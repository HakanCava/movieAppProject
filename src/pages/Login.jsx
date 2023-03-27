import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn,signUpProvider}=useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password)
  };

  return (
    <div className="login overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[10vh] w-[380px] h-[500px]`}>
        <form className="h-[98%]" onSubmit={handleSubmit}>
          <h2 className="text-main-yellow text-2xl font-[500] text-center tracking-[0.1em] mb-3 dark:text-gray-800 ">
            Sign in
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="peer"
              placeholder=" "
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="peer"
              placeholder=" "
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <div className="flex justify-between">
            <span className="py-3 font-[0.75em] cursor-pointer decoration-none text-red-700 hover:text-main-yellow dark:hover:text-red-500 text-lg">
              Forgot Password
            </span>
            <Link
              className="py-3 font-[0.75em] cursor-pointer decoration-none text-red-700 hover:text-main-yellow dark:hover:text-red-500 text-lg"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>

          <button
            type="button"
            className=" btn-google flex justify-between text-center "
            onClick={()=>signUpProvider()}
          >
            Continue with Google <GoogleIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
