import { useState } from "react";


const BookFeaturesSection = () => {
    const [books] = useState([
        {
          id: 1,
          author: "J.K. Rowling",
          book: "Harry Potter and the Philosopher's Stone",
          cover: "https://i.ibb.co.com/1XdFnrK/harry.jpg",
        },
        {
          id: 2,
          author: "George R.R. Martin",
          book: "A Game of Thrones",
          cover: "https://i.ibb.co.com/B6Rk8g6/a-game-of-thrones.jpg",
        },
        {
          id: 3,
          author: "J.R.R. Tolkien",
          book: "The Lord of the Rings",
          cover: "https://i.ibb.co.com/gdH9pqC/the-lord-of-the-rings.jpg",
        },
        {
          id: 4,
          author: "Agatha Christie",
          book: "Murder on the Orient Express",
          cover: "https://i.ibb.co.com/3vB3xsY/murder-of-the-orient-express.jpg",
        },
        {
          id: 5,
          author: "Harper Lee",
          book: "To Kill a Mockingbird",
          cover: "https://i.ibb.co.com/M8w3GJ2/to-kill-a-mockingbird.webp",
        },
        {
          id: 6,
          author: "F. Scott Fitzgerald",
          book: "The Great Gatsby",
          cover: "https://i.ibb.co.com/8NLpG0d/the-great-gatsby.jpg",
        },
      ]);
    
      return (
        <div className="bg-gradient-to-br from-[#b6dbf0] to-[#5bb4e6] py-28">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Featured Authors & Books
              </h2>
              <p className="text-lg text-white">
                Explore a curated selection of timeless books by celebrated authors.
              </p>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {books.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <img
                    src={item.cover}
                    alt={item.book}
                    className="w-full h-72 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.book}
                    </h3>
                    <p className="text-sm text-gray-600">by {item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    


export default BookFeaturesSection;
