import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_left"></div>
        <div className="home_right">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google"
        />

        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}
export default Home;
