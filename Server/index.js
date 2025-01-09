require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

// middleware
// app.use(cors({
//   origin: ["http://localhost:5173" , "https://shelfmate-81012.web.app"],
//   credentials: true
// }));


const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://shelfmate-81012.web.app',
  ],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.isdx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// verify Token

const verifyToken = (req, res, next)=>{
  const token = req.cookies?.token;
  console.log(token)
  if(!token){
   return res.status(401).send({message : 'unauthorized access'})
  }
  jwt.verify(token, process.env.JWT_SECRET, (error, decode)=>{
    if(error){
      return res.status(401).send({message : "unauthorized access"});
    }
    req.user = decode;
    next();
  })

}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("shelfmate-db");
    const booksCollection = db.collection("books");
    const recommendedCollection = db.collection("recommendation");


    // verifyToken related apis

    app.post('/jwt', (req,res)=>{
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn:'365d'})
      res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
    })

    app.post('/logout', (req,res)=>{
    
      res
      .clearCookie("token",  {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({message : "logout", success: true });
    })
    // books collection apis

    // get all books api

    app.get('/allBooks', async(req,res)=>{
      const result = await booksCollection
      .find()
      .sort({ _id: -1 }) 
      .limit(8)          
      .toArray();
    res.send(result);
    })

    app.get("/books", async (req, res) => {
      const search = req.query.search;
      const sort = req.query.sort;
      let options = {};
      if(sort) options = {sort : {date : sort === "asc" ? 1 : -1}}
      let query = {};
      if(query){
       query = { BookName : {
          $regex : search, $options: 'i'
        }}
      }
      
      const result = await booksCollection.find(query, options).toArray();
      res.send(result);
    });

    //  get books by specific email
    app.get("/books/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { "buyer.email": email };
      console.log(req.user.email)
      if(req.user.email !== email){
        return res.status(403).send({message: 'forbidden access'})
      }
      const result = await booksCollection.find(query).toArray();
      res.send(result);
    });

    // post apis for books
    app.post("/add-books", async (req, res) => {
      const bookData = req.body;
      const result = await booksCollection.insertOne(bookData);
      res.send(result);
    });

    // delete a book from db
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.deleteOne(query);
      res.send(result);
    });

    // get a single book data by id from db
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(query);
      res.send(result);
    });
    // Update the single book api
    app.put("/update-book/:id", async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;
      const updated = {
        $set: updateData,
      };
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const result = await booksCollection.updateOne(query, updated, options);
      res.send(result);
    });

    // recommended collection

    // get all recommendation

    app.post("/add-recommendations", async (req, res) => {
      const recommendedData = req.body;
      const query = {
        "recommender.email": recommendedData?.recommender?.email,
        BookId: recommendedData.BookId,
      };
      const alreadyExist = await recommendedCollection.findOne(query);
      if (alreadyExist)
        return res
          .status(400)
          .send("You have already recommend this book!");
     

      const result = await recommendedCollection.insertOne(recommendedData);
      const addedRecommendation = await recommendedCollection.findOne({
        _id: result.insertedId,
      });
      // update data in book collection
      const filter = { _id: new ObjectId(recommendedData.BookId) };
      const update = {
        $inc: { recommendation_count: 1 },
      };

      const updateRecommendCount = await booksCollection.updateOne(
        filter,
        update
      );
      res.send(addedRecommendation);
    });

    app.get("/recommendations/:bookId", async (req, res) => {
      const bookId = req.params.bookId;
      const query = { BookId: bookId };
      const recommendations = await recommendedCollection.find(query).toArray();
      res.send(recommendations);
    });

    // Get recommendations made by the current user
    app.get("/my-recommendations", async (req, res) => {
      const { email } = req.query;
      const query = { "recommender.email": email };
     
        const recommendations = await recommendedCollection
          .find(query)
          .toArray();
        res.send(recommendations);
     
     
    });


    // Delete a recommendation and decrease recommendation count
  app.delete('/delete-recommendation/:id', async (req, res) => {
      const id = req.params.id;
       const { BookId } = req.body;

       const deleteResult = await recommendedCollection.deleteOne({
      _id: new ObjectId(id),
       });

       if (deleteResult.deletedCount === 1) {
     
        const updateResult = await booksCollection.updateOne(
          { _id: new ObjectId(BookId) },
          { $inc: { recommendation_count: -1 } }
        );

         res.send({
        message: 'Recommendation deleted and count updated',
        deleteResult,
        updateResult,
         });
    } 
  });


  // Get recommendations for the user's queries
  app.get('/my-queries/recommendations', async (req, res) => {
  const email = req.query.email; 
 
    const userQueries = await booksCollection.find({ 'buyer.email': email }).toArray();

    const queryIds = userQueries.map(query => query._id.toString());

    const recommendations = await recommendedCollection.find({
      BookId: { $in: queryIds }
    }).toArray();

    res.send(recommendations);
});
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("ShelfMate is reading Books....");
});

app.listen(port, () => {
  console.log(`ShelfMate is running on the port : ${port}`);
});
