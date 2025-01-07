import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import bgLogin from '../assets/sky.jpg'
import auth from "../Firebase/firebase.config";


import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const LoginRegister = () => {
  const { userLogin, createNewUser, setUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

 
    
      userLogin(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          toast.success("🦄 Successfully Login!");
          navigate("/");
        })
        .catch(() => {
          toast.error("Login failed!");
          form.reset()
        });
    }
  

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const email = form.email.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password does not match requirements");
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Register Successfully!!");
            navigate("/");
          })
          .catch(() => {
            toast.error("Register failed!!");
          });
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Google login Successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google login Failed!");
      });
  };

  

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 bg-no-repeat bg-cover bg-center brightness-90" style={{backgroundImage: `url(${bgLogin})`}}>
      <div className="bg-transparent shadow-xl rounded-3xl mt-28 w-full max-w-md overflow-hidden border border-[#60aee6]">
        <div className="flex justify-center border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-4 text-lg font-bold ${
              isLogin
                ? "text-[#60aee6] border-b-4 border-[#60aee6]"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-4 text-lg font-bold ${
              !isLogin
                ? "text-[#60aee6] border-b-4 border-[#60aee6]"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        <div className="p-8">
          {isLogin ? (
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold  text-center">
                  Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                  Login to your account
                </p>
                <div>
                  <label className="block text-sm font-medium ">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#60aee6]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mt-1  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60aee6]"
                    required
                  />
                 
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#60aee6] text-white font-semibold rounded-lg hover:bg-[#60aee6] transition duration-200"
                >
                  Login
                </button>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </form>
              <div className="text-center my-3 flex mx-auto">
                <button
                  onClick={handleGoogle}
                  className="btn w-full font-semibold px-12 md:px-24"
                >
                  <FcGoogle className="text-2xl" />
                  <span>Sign in with Google</span>
                </button>
              </div>
             
              <p className="text-center font-semibold">
                Don't have an account?{" "}
                <Link className="text-[#5bb4e6]" onClick={() => setIsLogin(false)} >
                  Register
                </Link>
              </p>
            </div>
          ) : (
             <div>
            <form onSubmit={handleRegister} className="space-y-4">
              <h2 className="text-2xl font-bold  text-center">
                Create Account
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Sign up for a new account
              </p>
              <div>
                <label className="block text-sm font-medium ">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#60aee6]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#60aee6]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#60aee6]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#60aee6]"
                  required
                />
                
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#60aee6] text-white font-semibold rounded-lg hover:bg-[#60aee6] transition duration-200"
              >
                Register
              </button>

              <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
            </form>
            <div className="text-center my-3 flex mx-auto">
                <button
                  onClick={handleGoogle}
                  className="btn w-full font-semibold px-12 md:px-24"
                >
                  <FcGoogle className="text-2xl" />
                  <span>Sign in with Google</span>
                </button>
              </div>

              <p className="text-center font-semibold">
                Don't have an account?{" "}
                <Link className="text-[#60aee6]" onClick={() => setIsLogin(true)}>
                  LogIn
                </Link>
              </p>
             </div>
          )}
        </div>
      </div>
    
    </div>
  );
};

export default LoginRegister;
