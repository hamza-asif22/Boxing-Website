import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
   <div>
    <div>
     <h1 className="text-center text-5xl">Boxing Mania</h1>
     <p className="text-center px-4 py-4">Welcome to Boxing World, your ultimate destination for mastering the art of boxing. 
      Whether you're a beginner looking to start your journey or a seasoned fighter aiming 
      to hone your skills, we provide the resources and support you need to achieve your 
      goals. Our platform offers expert training guides, tips from professional boxers, 
      and a community of enthusiasts to keep you motivated. 
      Stay updated with the latest news, upcoming events, and exclusive interviews. 
      Join us today and become an expert in the world of boxing. 
      Your path to greatness starts here!</p>
      <h1 className="text-center py-4">LET'S BEGIN</h1>
    </div>  
    <div>

    </div>
    




   </div>
  );
};

export default Home;
