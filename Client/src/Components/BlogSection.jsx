import React from 'react';
import Marquee from "react-fast-marquee";


const BlogSection = () => {

    const authors = [
        {
            id: 1,
            name: "Jane Doe",
            profileImage: "https://i.ibb.co.com/yp6Xb8w/jane-doe.jpg",
            bio: "Award-winning author and avid reader with a passion for storytelling.",
            blogs: [
              {
                title: "The Art of Crafting Characters",
                excerpt: "Explore how to create compelling characters that resonate with readers.",
              },
              {
                title: "World-Building for Beginners",
                excerpt: "Learn the basics of building immersive worlds for your stories.",
              },
            ],
          },
          {
            id: 2,
            name: "John Smith",
            profileImage: "https://i.ibb.co.com/J2WJqCX/john-smith.jpg", 
            bio: "A tech-savvy writer focused on science fiction and futuristic narratives.",
            blogs: [
              {
                title: "AI in Literature",
                excerpt: "How artificial intelligence is shaping the stories of tomorrow.",
              },
              {
                title: "Top Sci-Fi Books to Read in 2025",
                excerpt: "A curated list of must-read science fiction books for enthusiasts.",
              },
            ],
          },
          {
            id: 3,
            name: "Emily Carter",
            profileImage: "https://i.ibb.co.com/5cJ53b9/emily-carter.jpg", 
            bio: "Romance novelist bringing heartfelt stories to life with a modern twist.",
            blogs: [
              {
                title: "Writing Authentic Love Stories",
                excerpt: "Tips for creating realistic and emotional romantic plots.",
              },
              {
                title: "Top Romantic Reads for Winter",
                excerpt: "Cozy up with these heartwarming romance novels this season.",
              },
            ],
          },
          {
            id: 4,
            name: "Alex Morgan",
            profileImage: "https://i.ibb.co.com/R0S9MTq/alex-morgan.jpg",
            bio: "Mystery author with a knack for creating suspenseful plots and twists.",
            blogs: [
              {
                title: "Mastering the Art of Suspense",
                excerpt: "Learn how to keep readers on the edge of their seats with suspenseful writing.",
              },
              {
                title: "Building a Thrilling Mystery Plot",
                excerpt: "Step-by-step guide to writing a compelling mystery story.",
              },
            ],
          },
          {
            id: 5,
            name: "Sarah Green",
            profileImage: "https://i.ibb.co.com/t2n5qPk/sarah-green.jpg",
            bio: "Fantasy writer with a love for creating epic worlds filled with magic and adventure.",
            blogs: [
              {
                title: "Creating Magical Systems",
                excerpt: "Designing unique and believable magic systems for fantasy novels.",
              },
              {
                title: "Building Epic Fantasy Worlds",
                excerpt: "Tips for creating immersive fantasy settings that captivate readers.",
              },
            ],
          },
          {
            id: 6,
            name: "Mark Davis",
            profileImage: "https://i.ibb.co.com/B6ch9Jg/Mark-Davis.jpg",
            bio: "Historical fiction author who brings the past to life with detailed narratives.",
            blogs: [
              {
                title: "Researching for Historical Fiction",
                excerpt: "How to ensure accuracy and authenticity in historical stories.",
              },
              {
                title: "Bringing History to Life",
                excerpt: "Tips for weaving historical events into compelling narratives.",
              },
            ],
          },
    ]
    return (
        <section className="bg-sky-100 py-24 px-6">
        <div className="mx-auto">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Meet the Authors</h2>
            <p className="text-gray-600">
              Get to know the minds behind your favorite blogs and their stories.
            </p>
          </div>
  
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
          
            {authors.map((author) => (
              <div
                key={author.id}
                className="mr-4  bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-md h-96"
              >
                
                <div className="flex flex-col justify-center items-center p-4 border-b">
                  <img
                    src={author.profileImage}
                    alt={author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4 text-center">
                    <h3 className="text-lg font-bold text-gray-800">{author.name}</h3>
                    <p className="text-sm text-gray-600">{author.bio}</p>
                  </div>
                </div>
  
               
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Blogs by {author.name}:
                  </h4>
                  <ul className="space-y-3">
                    {author.blogs.map((blog, index) => (
                      <li key={index} className="text-gray-700">
                        <h5 className="text-sm font-semibold">{blog.title}</h5>
                        <p className="text-sm">{blog.excerpt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
         
          </Marquee>
        </div>
      </section>
    );
};

export default BlogSection;