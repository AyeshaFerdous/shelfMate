import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TrendingNow = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const trendingBooks = [
    {
      id: 1,
      title: "The Ocean Between Us",
      description: "A captivating tale of love and discovery.",
      image: "https://i.ibb.co.com/93g5bzv/the-occean.jpg",
      tag: "#BestSeller",
      readers: "1.2K Readers",
    },
    {
        id: 2,
        title: "Whispers of the Forgotten",
        description: "Uncover the mysteries hidden within ancient ruins.",
        image: "https://i.ibb.co.com/3CZ0XwC/whisper.webp",
        tag: "#MustRead",
        readers: "1.1K Readers",
      },
    {
      id: 3,
      title: "Echoes of Eternity",
      description: "A mystery spanning across time.",
      image: "https://i.ibb.co.com/2ZfXbDP/eternity.jpg",
      tag: "#HotPick",
      readers: "800 Readers",
    },
  ];

  const handleVote = () => {
    if (selectedBook) {
      toast.success(`You voted for: ${selectedBook.title}`);
    } else {
      toast.error("Please select a book to vote!");
    }
  };

  return (
    <div className="py-10 px-4 md:px-8 rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Trending Now</h2>
        <p className="text-center text-gray-600 mb-10 italic">
          See the buzzworthy books making waves across the community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingBooks.map((book) => (
            <div
              key={book.id}
              className=" border rounded-lg shadow-md p-4 relative hover:scale-105 transition-transform"
            >
              <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded">
                {book.tag}
              </div>
              <img
                src={book.image}
                alt={book.title}
                className="h-64 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{book.description}</p>
              <div className="flex justify-between items-center">
                <button onClick={()=> navigate(`/summary/${book.id}`) } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Read More
                </button>
                <span className="text-gray-400">{book.readers}</span>
              </div>
            </div>
          ))}
        </div>

        {/* User Poll Section */}
        <div className="user-poll mt-12 bg bg-gradient-to-b from-sky-200 to-sky-50 p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            Vote for Your Favorite Trending Book
          </h3>
          <ul className="poll-options">
            {trendingBooks.map((book) => (
              <li key={book.id} className="mb-3 flex items-center">
                <input
                  type="radio"
                  name="poll"
                  id={`book-${book.id}`}
                  className="mr-3"
                  onChange={() => setSelectedBook(book)}
                />
                <label htmlFor={`book-${book.id}`} className="text-gray-700">
                  {book.title}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleVote}
            className="block mx-auto mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Submit Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;