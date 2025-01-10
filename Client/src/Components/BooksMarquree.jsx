import React from "react";
import Marquee from "react-fast-marquee";

const BooksMarquree = () => {
  const books = [
    { id: 1, image: "https://i.ibb.co.com/CH1w3z7/soul.jpg" },
    { id: 2, image: "https://i.ibb.co.com/NTMwnRc/alone.webp" },
    { id: 3, image: "https://i.ibb.co.com/XbQvrmm/ending.jpg" },
    { id: 4, image: "https://i.ibb.co.com/wSpBxqB/hide.webp" },
    { id: 5, image: "https://i.ibb.co.com/7jQXrNb/first-love.webp" },
    { id: 6, image: "https://i.ibb.co.com/Tv7NXzD/sweet-kiss.jpg" },
    { id: 7, image: "https://i.ibb.co.com/7NdPNJH/the-shadow-cell.jpg" },
    { id: 8, image: "https://i.ibb.co.com/zQ4BtWr/shadow.jpg" },
    { id: 9, image: "https://i.ibb.co.com/Jm7Pbzq/graylock.jpg" },
    { id: 10, image: "https://i.ibb.co.com/tCW5SwM/holy-ghosts.jpg" },
    { id: 11, image: "https://i.ibb.co.com/NY329nL/ghost-in-the-house.jpg" },
  ];

  return (
    <div className="bg-gradient-to-t from-sky-200 to-sky-100 py-16">
      <h2 className="text-4xl font-black  text-center mb-6 text-gray-800">Latest Literary Treasures</h2>
      <p className="text-lg text-gray-500 italic text-center mb-10">Unveil fresh stories and exciting voices in today’s book world.</p>
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex space-x-6 ml-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="w-40 h-60 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={book.image}
                alt={`Book ${book.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BooksMarquree;