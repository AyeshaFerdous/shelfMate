import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import { TbColumns1 } from "react-icons/tb";
const AllQueries = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [columns, setColumns] = useState(3);

   const navigate = useNavigate()

  useEffect(() => {
    fetchAllBooks();
  }, [user, search, sort]);

  const fetchAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL}/books?search=${search}&sort=${sort}`
    );
    setBooks(data);
  };


  const handleReset = ()=>{
    setSearch('');
    setSort('');
  }
  
  const handleColumnChange = numOfColumn =>{
    setColumns(numOfColumn)
  }

  
  return (
    <div className="my-28 mx-4">
     
       <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5">

       <div className="flex justify-center space-x-4 ">
        <button
          onClick={() => handleColumnChange(1)}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${columns === 1 ? "bg-blue-700" : ""}`}
        >
          <TbColumns1 />
        </button>
        <button
          onClick={() => handleColumnChange(2)}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${columns === 2 ? "bg-blue-700" : ""}`}
        >
         <HiViewGrid />
        </button>
        <button
          onClick={() => handleColumnChange(3)}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${columns === 3 ? "bg-blue-700" : ""}`}
        >
          <BsFillGrid3X3GapFill />
        </button>
        </div>
       <div className="flex  p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={e=> setSearch(e.target.value)}
            value={search}
            placeholder="Enter Book Name"
            aria-label="Enter Book Name"
          />

          <button className="group relative overflow-hidden rounded bg-[#45a3d8] px-6 py-2 text-white transition-all duration-300  hover:bg-gradient-to-r hover:from-[#5bb4e6] hover:to-[#76b8df] ">
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="relative">Search</span>
          </button>
        </div>
        <div>
            <select
              name='date'
              id='date'
              onChange={e=> setSort(e.target.value)}
              value={sort}
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Date And Time</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button onClick={handleReset} className="group relative overflow-hidden rounded bg-[#45a3d8] px-6 py-2 text-white transition-all duration-300  hover:bg-gradient-to-r hover:from-[#5bb4e6] hover:to-[#76b8df] ">
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="relative">Reset</span>
          </button>
       </div>
      <div className="container mx-auto px-4 py-8">
        <div className={`grid ${columns === 1 ? 'grid-cols-1' : columns=== 2 ? 'grid-cols-2'  :'grid-cols-3'}  gap-6`}>
          {books?.map((book, index) => (
            <div
              key={book._id}
              className="w-full mx-auto border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300"
            >
              <div className="relative p-4">
                <img
                  src={book.BookImage}
                  alt={book.BookName}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold dark:text-white truncate">
                  {book.BookName}
                </h2>
                <p className="text-sm dark:text-white">{book.BookBrand}</p>
                <p className="text-sm dark:text-white">{book.date}</p>

                <div className="flex justify-between gap-4 mt-4">
                  <button onClick={() => navigate(`/viewDetails/${book._id}`)} className="group relative overflow-hidden rounded bg-[#45a3d8] px-6 py-2 text-white transition-all duration-300  hover:bg-gradient-to-r hover:from-[#5bb4e6] hover:to-[#76b8df] ">
                    <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
                    <span className="relative">Recommend</span>
                  </button>
                  <p className="mt-2 text-sm font-bold text-gray-600 ">
                    Recommendation Count: {book.recommendation_count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllQueries;
