import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const RecentQueries = () => {
  const allBooks = useLoaderData();

  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto py-24">
        <h2 className="text-4xl font-black text-center mb-6 text-gray-800">Book Haven</h2>
        <p className="text-lg text-gray-500 italic text-center mb-10">Your go-to destination for discovering the latest must-read books and timeless classics.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          {allBooks.map((book) => (
            <div
              key={book._id}
              className="relative group bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              {/* Book Image */}
              <div>
                
              <img
                src={book.BookImage}
                alt={book.BookName}
                className="w-full h-56 object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              />
              </div>
             
              {/* Book Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {book.BookName}
                </h3>
                <p className="text-sm text-gray-600 mb-3 truncate">
                  <strong>Brand:</strong> {book.BookBrand}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  <strong>Posted By:</strong> {book.buyer?.name}
                </p>
              </div>
              {/* Bottom Tag */}
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg">
                New
              </div>
              {/* Hover Effect */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate(`/viewDetails/${book._id}`)}
                  className="group relative overflow-hidden rounded bg-[#45a3d8] px-6 py-2 text-white transition-all duration-300  hover:bg-gradient-to-r hover:from-[#5bb4e6] hover:to-[#76b8df] "
                >
                  <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
                  <span className="relative">View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



  );
};

export default RecentQueries;
