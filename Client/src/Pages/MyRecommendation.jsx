
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyRecommendation = () => {
    const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

      // Delete recommendation
  const handleDelete = async (id, BookId) => {
   
      try {
        await axios.delete(`${import.meta.env.VITE_URL}/delete-recommendation/${id}`, {
          data: { BookId }, 
        });

        setRecommendations((prev) => prev.filter((rec) => rec._id !== id));

        toast.success("Recommendation deleted successfully");
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete recommendation");
      }
    }


  const modernDelete = (id, BookId) => {
    toast(t => (
      <div className='flex gap-3 items-center'>
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className='gap-2 flex'>
          <button
            className='bg-red-400 text-white px-3 py-1 rounded-md'
            onClick={() => {
              toast.dismiss(t.id)
              handleDelete(id, BookId)
            }}
          >
            Yes
          </button>
          <button
            className='bg-green-400 text-white px-3 py-1 rounded-md'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ))
  }



    // get myrecommendation by email
    useEffect(() => {
        const fetchRecommendations = async () => {
          try {
            const { data } = await axios.get(
              `${import.meta.env.VITE_URL}/my-recommendations?email=${user?.email}`
            );
            setRecommendations(data);
          } catch (err) {
            console.error(err);
            toast.error("Failed to fetch recommendations");
          }
        };
        fetchRecommendations();
      }, [user]);
    
  return (
    <div className="my-28">
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          My Recommendations
        </h1>

        {recommendations.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            You haven't made any recommendations yet.
          </p>
        ) : (
          <table className="w-full border border-gray-200 rounded-lg shadow-sm bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-4">Title</th>
                <th className="p-4">Recommended Book</th>
                <th className="p-4">Reason</th>
                <th className="p-4">Date</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec) => (
                <tr key={rec._id} className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">{rec.RecommendationTitle}</td>
                  <td className="p-4">{rec.RecommendedBookName}</td>
                  <td className="p-4">{rec.Recommendationreason.slice(0,40)}...</td>
                  <td className="p-4 text-sm text-gray-500">
                    {rec.date}
                    
                  </td>
                  
                  <td className="p-4">
                    <button
                      
                      onClick={() => modernDelete(rec._id, rec.BookId)}
                      className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

};
export default MyRecommendation;
