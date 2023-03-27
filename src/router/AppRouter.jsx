import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../pages/About";

import Contact from "../pages/Contact";
import HighScore from "../pages/HighScore";
import Home from "../pages/Home";
import Licensing from "../pages/Licensing";
import Login from "../pages/Login";
import LowScore from "../pages/LowScore";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";
import Policy from "../pages/Policy";
import Register from "../pages/Register";
import Trends from "../pages/Trends";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/highscore" element={<HighScore />} />
        <Route path="/lowscore" element={<LowScore />} />
        
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetails />} />
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/licensing" element={<Licensing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
