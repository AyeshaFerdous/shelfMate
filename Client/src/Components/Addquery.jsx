import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import moment from 'moment';
const Addquery = () => {
    
   const {user} = useContext(AuthContext);

   
   const [startDate, setStartDate] = useState(moment(new Date()).format('MMMM Do YYYY, HH:mm:ss'))
  
  const handleSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const BookName = form.BookName.value;
    const BookBrand = form.BookBrand.value;
    const BookImage = form.BookImage.value;
    const queryTitle = form.queryTitle.value;
    const boycottReason = form.boycottReason.value;
    
    console.table({BookName, BookBrand, BookImage, queryTitle, boycottReason});

    const BookData = {
      BookName, 
      BookBrand,
      BookImage,
      queryTitle,
      boycottReason,
      buyer :{
        email : user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      date : startDate,
      recommendation_count : 0,
    }

    try {
      // 1. make a post request
      await axios.post(`${import.meta.env.VITE_URL}/add-books`, BookData)
      // 2. Reset form
      form.reset()
      // 3. Show toast and navigate
      toast.success('Book Added Successfully!!!')
      // navigate('/my-posted-jobs')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  };
  return (
    <div className="my-28 mx-4">
      <div className="max-w-xl  mx-auto mt-10 p-6 bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-lg shadow-lg">
        <h2
          className="text-3xl font-semibold text-center mb-6"
          style={{ color: "#60aee6" }}
        >
          Add a Query
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Book Name
            </label>
            <input
              type="text"
              name="BookName"
              placeholder="Enter Book name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Book Brand
            </label>
            <input
              type="text"
              name="BookBrand"
              placeholder="Enter Book brand"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Book Image URL
            </label>
            <input
              type="url"
              name="BookImage"
              placeholder="Enter Book image URL"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Query Title
            </label>
            <input
              type="text"
              name="queryTitle"
              placeholder="Enter your query title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Boycotting Reason Details
            </label>
            <textarea
              name="boycottReason"
              placeholder="Explain why you don't want this Book"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">

            <button className="btn py-3 px-6 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
              <span className="w-0 h-0 rounded bg-sky-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
               Add Query
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addquery;
