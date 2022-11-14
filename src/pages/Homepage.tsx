import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Homepage = () => {
    return (
        <div className="App">
          <header className="App-header">
            <p className='homepage-p'>Find the number within 10 guesses!</p>
            <div className='App-logo'>?</div>
            <Link
              className="App-link"
              to="/guessnumber?max=10"
              >
              Play
            </Link>
          </header>
        </div>
      );
}

export default Homepage;