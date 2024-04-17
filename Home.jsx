import { useEffect } from "react";
import "../css/Home.css";
import axios from "axios";

const Home = () => {
  return (
    <div className="hero">
        <div className="hero-content">
            <h1 className="hero-text">Book Shop</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Debitis laborum mollitia dolor necessitatibus aut libero fugiat blanditiis asperiores 
                facilis provident?
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home