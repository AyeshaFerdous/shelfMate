import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";


const RecommendationsForMyQueries = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_URL}/my-queries/recommendations?email=${user?.email}`);
        setRecommendations(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecommendations();
  }, [user]);

  return (
    <div className="container mx-auto p-6 my-28">
    <h1 className="text-4xl font-extrabold text-center mb-8 text-gradient">
      Recommendations Overview
    </h1>
    {recommendations.length === 0 ? (
      <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg shadow-inner">
        <p className="text-lg text-gray-500 italic">
          No recommendations available at the moment.
        </p>
      </div>
    ) : (
      <div className="overflow-hidden border border-gray-200 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-gradient-to-b from-gray-100 to-white">
          <thead className="bg-[#5bb4e6] text-gray-200">
            <tr>
              <th className="p-4 text-left font-semibold">#</th>
              <th className="p-4 text-left font-semibold">Title</th>
              <th className="p-4 text-left font-semibold">Recommended Book</th>
              <th className="p-4 text-left font-semibold">Reason</th>
              <th className="p-4 text-left font-semibold">Date</th>
              <th className="p-4 text-center font-semibold">Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {recommendations.map((rec, index) => ( 

              <tr
                key={rec._id}
                className="transition-all hover:scale-[1.02] hover:shadow-md bg-white group"
              >
                <td className="p-4 text-center font-bold text-gray-700">
                  {index + 1}
                </td>
                <td className="p-4 font-semibold text-gray-800">
                  {rec.RecommendationTitle}
                </td>
                <td className="p-4 flex items-center gap-4">
                  {rec.RecommendedBookImage && (
                    <img
                      src={rec.RecommendedBookImage}
                      alt={rec.RecommendedBookName}
                      className="w-16 h-16 rounded-lg object-cover border border-gray-300 shadow-sm"
                    />
                  )}
                  <span>{rec.RecommendedBookName}</span>
                </td>
                <td className="p-4 text-gray-700">{rec.Recommendationreason}</td>
                <td className="p-4 text-gray-600 text-sm">
                  {rec.date}
                </td>
                <td className="p-4 text-center">
                 {rec.recommender.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  );
};

export default RecommendationsForMyQueries;