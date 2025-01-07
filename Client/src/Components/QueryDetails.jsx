import React, { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

const QueryDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [book, setBook] = useState(loadedData);
  const [recommendations, setRecommendations] = useState([]);
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("MMMM Do YYYY, HH:mm:ss")
  );

  const { _id, BookName, BookBrand, BookImage, queryTitle, buyer } = book;

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/recommendations/${_id}`
        );
        setRecommendations(data);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        toast.error("Failed to load recommendations.");
      }
    };

    fetchRecommendations();
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const RecommendationTitle = form.RecommendationTitle.value;
    const RecommendedBookName = form.RecommendedbookName.value;
    const RecommendedBookImage = form.RecommendedImage.value;
    const Recommendationreason = form.Recommendationreason.value;

    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?([\\w.-]+)+(:\\d+)?(\\/.*)?$"
    );
    if (!urlPattern.test(RecommendedBookImage)) {
      return toast.error("Please provide a valid URL for the book image.");
    }

    const RecommendedData = {
      RecommendationTitle,
      RecommendedBookName,
      RecommendedBookImage,
      Recommendationreason,
      BookId: _id,
      queryTitle,
      BookName,
      user: {
        email: buyer?.email || "N/A",
        name: buyer?.name || "N/A",
      },
      recommender: {
        email: user?.email || "Unknown",
        name: user?.displayName || "Anonymous",
      },
      date: startDate,
    };

    
    // email validation

    if (user?.email === buyer?.email)
      return toast.error("Action not permitted");
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/add-recommendations`,
        RecommendedData
      );
      form.reset();
      toast.success("Successfully added your recommendation!");
      setRecommendations((prev) => [...prev, data]);
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto my-28">
        <div className="flex-1 px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
          <h1 className="mt-2 text-3xl font-semibold text-gray-800">
            {BookName}
          </h1>
          <p className="mt-6 text-sm font-bold text-gray-600">
            Creator Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="text-sm text-gray-600">
                Name: {buyer?.name || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Email: {buyer?.email || "N/A"}
              </p>
            </div>
            {buyer?.photo && (
              <div  className="rounded-full overflow-hidden w-14 h-14 ">
                <img referrerPolicy="no-referrer" src={buyer.photo} alt="Buyer" />
              </div>
            )}
          </div>
        </div>
        <section className="p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-lg font-semibold text-gray-700">
            Add Recommendation
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700">Recommendation Title</label>
                <input
                  type="text"
                  name="RecommendationTitle"
                  required
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-700">Recommended Book Name</label>
                <input
                  type="text"
                  name="RecommendedbookName"
                  defaultValue={BookName}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-700">Recommended Book Image</label>
                <input
                  type="url"
                  name="RecommendedImage"
                  defaultValue={BookImage}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-700">Recommendation Reason</label>
                <input
                  type="text"
                  name="Recommendationreason"
                  required
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2 text-white bg-sky-500 rounded-md hover:bg-sky-300 focus:outline-none"
              >
                Add Recommendation
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="container mx-auto mt-6">
        <h2 className="text-xl font-bold mb-4">All Recommendations</h2>
        <div className="space-y-6">
          {recommendations.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              No recommendations available for this query yet.
            </p>
          ) : (
            recommendations.map((rec) => (
              <div
                key={rec._id}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  {rec.RecommendedBookImage ? (
                    <img
                      src={rec.RecommendedBookImage}
                      alt={rec.RecommendedBookName}
                      className="w-20 h-20 md:w-28 md:h-28 rounded-lg object-cover border border-gray-300"
                    />
                  ) : (
                    <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-gray-200 rounded-lg border border-gray-300">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {rec.RecommendationTitle}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">Product:</span>{" "}
                    {rec.RecommendedBookName}
                  </p>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {rec.Recommendationreason}
                  </p>
                </div>

                {/* Metadata Section */}
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Recommender:</span>{" "}
                    {rec.recommender?.name} ({rec.recommender?.email})
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Date:</span>{" "}
                    {rec?.date}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default QueryDetails;
