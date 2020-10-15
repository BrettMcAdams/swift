import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import Search from '../components/Search'

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/swiftmail">Swiftmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar style={{ color: '#26FFD4', backgroundColor: '#094F80' }} />
        </div>
      </div>

      <div className="home__body">
        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
