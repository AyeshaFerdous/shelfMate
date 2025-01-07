import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import errorImg from '../assets/Animation - 1733572552556.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h2 className="text-6xl font-black mb-4">404</h2>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        Page Not Found <BiError />
      </h3>
      <h3 className="text-lg font-medium mb-4">
        We cannot find the page you are looking for.
      </h3>
      <Link className="bg-[#5bb4e6] font-medium rounded-lg text-white px-6 py-2">
        Back to Home
      </Link>
      <figure className="mt-4">
        <div className="w-72">
        <Lottie animationData={errorImg} loop={true}  className="w-full h-full "/>
        </div>
      </figure>
    </div>
  );
};

export default ErrorPage;