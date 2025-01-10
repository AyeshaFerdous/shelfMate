import React, { useContext, useEffect, useState } from "react";
import Banner from "../Components/Banner";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import moment from "moment";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import { CiViewTable } from "react-icons/ci";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdBrowserUpdated } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
const MyQueries = () => {
  const { user, logOut } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")
  );
  const [book, setBook] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState('table'); 
  const navigate = useNavigate();




  
 
  const handleViewToggle = (viewType) => {
    setView(viewType); 
  };
  useEffect(() => {
    fetchAllBooks();
  }, [user]);

  const fetchAllBooks = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL}/books/${user?.email}`,
        { withCredentials: true }
      );
      setBooks(data);
    } catch (error) {
      console.log(error.response.data.message);
      if (error?.response?.data?.message) {
        logOut();
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const BookName = form.BookName.value;
    const BookBrand = form.BookBrand.value;
    const BookImage = form.BookImage.value;
    const queryTitle = form.queryTitle.value;
    const boycottReason = form.boycottReason.value;

    console.table({
      BookName,
      BookBrand,
      BookImage,
      queryTitle,
      boycottReason,
    });

    const BookData = {
      BookName,
      BookBrand,
      BookImage,
      queryTitle,
      boycottReason,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      date: book?.startDate,
      recommendation_count: book?.recommendation_count,
    };

    try {
      // 1. Make a PUT request
      await axios.put(
        `${import.meta.env.VITE_URL}/update-book/${book._id}`,
        BookData
      );

      form.reset();
      // 3. Show toast and close the modal
      toast.success("Data Updated Successfully!!!");
      setShowModal(false);
      fetchAllBooks();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  // delete functionality
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_URL}/book/${id}`
      );
      console.log(data);
      toast.success("Book Deleted Successfully!!!");
      fetchAllBooks();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  const fetchBookData = (book) => {
    setBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Featured Authors & Books
          </h2>
          <p className="text-lg text-gray-700 ">
            Explore a curated selection of timeless books by celebrated authors.
          </p>

          <div className="flex justify-end gap-4">
          <button
          onClick={() => handleViewToggle('table')}
            className={'px-4 py-2 rounded bg-blue-500 text-white'}
          >
            <CiViewTable />
          </button>
          
          <button
          onClick={() => handleViewToggle('cards')}
            className={'px-4 py-2 rounded bg-blue-500 text-white'}
          >
            <BsFillGrid3X3GapFill  />
          </button>
          </div>

        </div>

        {view === 'table' ? (
  <table className="w-full text-left dark:bg-black shadow-lg rounded-md">
    <thead className="bg-sky-500 text-white">
      <tr>
        <th className="p-2 sm:p-4 rounded-tl-md">Image</th>
        <th className="p-2 sm:p-4">Book Name</th>
        <th className="p-2 sm:p-4">Book Brand</th>
        <th className="p-2 sm:p-4 text-center rounded-tr-md">Actions</th>
      </tr>
    </thead>
    <tbody  className="divide-y divide-gray-200">
      {books?.length === 0 ? (
        <tr>
          <td colSpan="3" className="text-center text-gray-500 italic">
            You haven't made any queries yet.
          </td>
        </tr>
      ) : (
        books?.map((book) => (
          <tr key={book._id}>
            <td className="p-2 sm:p-4">
              <img
                src={book.BookImage}
                alt={book.BookName}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover"
              />
            </td>
            <td className="p-2 sm:p-4 font-semibold dark:text-white">
              {book.BookName}
            </td>
            <td className="p-2 sm:p-4 dark:text-white">
              {book.BookBrand}
            </td>
            <td className="p-2 sm:p-4 text-center">
              <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => navigate(`/viewDetails/${book._id}`)}
                className="text-xl text-blue-500"
              >
               <FcViewDetails />
              </button>
              <button
                onClick={() => fetchBookData(book)}
                className="text-xl text-yellow-500"
              >
                <MdBrowserUpdated />
              </button>
              <button
                onClick={() => modernDelete(book._id)}
                className="text-xl text-red-500"
              >
                <RiDeleteBin5Line />
              </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length === 0 ? (
            <p className="text-center col-span-3 text-gray-500 italic">
              You haven't made any queries yet.
            </p>
          ) : (
            books?.map((book, index) => (
              <div
                key={book._id}
                className="w-full mx-auto border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300"
              >
                <div className="relative p-4">
                  <img
                    src={book.BookImage}
                    alt={book.BookName}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold dark:text-white truncate">
                    {book.BookName}
                  </h2>
                  <p className="text-sm dark:text-white">{book.BookBrand}</p>

                  <div className="flex justify-between gap-4 mt-4">
                    <button
                      onClick={() => navigate(`/viewDetails/${book._id}`)}
                      className="btn py-3 px-6 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        View Details
                      </span>
                    </button>

                    <button
                      onClick={() => fetchBookData(book)}
                      className="btn py-3 px-6 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-yellow-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Update
                      </span>
                    </button>

                    <button
                      onClick={() => modernDelete(book._id)}
                      className="btn py-3 px-6 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"
                    >
                      <span className="w-0 h-0 rounded bg-red-400 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                      <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
)}
      </div>

      {/* Modal for Update */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Update Book"
        className="max-w-xl mx-auto mt-10 p-6 bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-lg shadow-lg"
        overlayClassName="fixed z-[1000] inset-0 bg-black bg-opacity-50"
      >
        <h2
          className="text-3xl font-semibold text-center mb-6"
          style={{ color: "#60aee6" }}
        >
          Update Query
        </h2>
        <form
          onSubmit={handleUpdate}
          className="space-y-6 max-h-[80vh] overflow-y-auto"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Book Name
            </label>
            <input
              type="text"
              name="BookName"
              defaultValue={book?.BookName}
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
              defaultValue={book?.BookBrand}
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
              defaultValue={book?.BookImage}
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
              defaultValue={book?.queryTitle}
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
              defaultValue={book?.boycottReason}
              placeholder="Explain why you don't want this Book"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="btn py-3 px-6 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-0 h-0 rounded bg-sky-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Update Query
              </span>
            </button>

            <button onClick={handleCloseModal} className="btn">
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyQueries;
