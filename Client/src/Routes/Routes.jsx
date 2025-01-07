import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home";
import LoginRegister from "../Authentication/LoginRegister";
import Addquery from "../Components/Addquery";
import MyQueries from "../Pages/MyQueries";
import QueryDetails from "../Components/QueryDetails";
import AllQueries from "../Pages/AllQueries";
import MyRecommendation from "../Pages/MyRecommendation";
import RecommendationsForMyQueries from "../Pages/RecommendationForMyQueries";
import PrivateRoute from "./PrivateRoute";
import ReadMore from "../Components/ReadMore";
import ContactSection from "../Pages/Nested components/ContactSection";
import BookFeaturesSection from "../Pages/Nested components/BookFeaturesSection";
import ErrorPage from "../Pages/Errorpage";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      errorElement: <ErrorPage/>,
      children :[
        {
            path: '/',
            element : <Home></Home>,
            loader: ()=> fetch('https://shelfmate-server.vercel.app/allBooks'),
           
             
           
        },
        {
          path: '/home/contact',
          element: <ContactSection/>
        },
        {
          path: '/home/features',
          element: <BookFeaturesSection/>
        },
        {
           path: '/add-queries',
           element : <Addquery/>
        },
        {
          path: '/my-queries',
          element: <PrivateRoute><MyQueries/></PrivateRoute>
        },
        {
          path:'/summary/:id',
          element : <ReadMore/>
        },
        {
          path : '/queries',
          element: <AllQueries/>
        },
        {
          path: '/my-recommendations',
          element: <PrivateRoute><MyRecommendation/></PrivateRoute>
        },
        {
          path : '/viewDetails/:id',
          element: <PrivateRoute><QueryDetails/></PrivateRoute>,
          loader : ({params})=> fetch(`https://shelfmate-server.vercel.app/book/${params.id}`)
        },

        {
          path : '/recommendations-for-me',
          element : <PrivateRoute><RecommendationsForMyQueries/></PrivateRoute>
        },
        {
            path: '/login',
            element: <LoginRegister/>
        }
      ]
    },
  ]);


  export default router;