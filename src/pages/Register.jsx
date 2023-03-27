import { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {
  const [newUser,setNewUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    photoURL:""
  })
  const { createUser,signUpProvider } = useAuthContext();


  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName,lastName,email,password,photoURL}=newUser
    const displayName=`${firstName} ${lastName}`
    createUser(email,password,displayName,photoURL)
  
// console.log(email);
// console.log(password);
// console.log(displayName);

  };
  return (
    <div className="register overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={` form-container mt-[5vh] w-[380px] h-[580px] m-auto `}>
        <form className=" h-[570px] " onSubmit={handleSubmit}>
          <h2 className="text-main-yellow text-2xl font-[500] text-center tracking-[0.1em] mb-3 dark:text-gray-800 ">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="firstName"
              className="peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label htmlFor="floating_text" className="">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_text"
              id="lastName"
              className="peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="email"
              className="peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label htmlFor="floating_email">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="password"
              className="peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              name="floating_password"
              id="photoURL"
              className="peer"
              placeholder=" "
              onChange={handleChange}
            />
            <label htmlFor="floating_password">Add Photo Url (optional)</label>
          </div>
          <button type="submit" className="btn-submit">
            Register
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

export default Register;
