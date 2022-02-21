import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import ".//SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google"
          />
        </Link>

        <div className="searchPage_headerBody">
          <Search hidebuttons />
        </div>
      </div>

      <div className="searchPage_results">
        <p className="searchPage_resultCount">
          About 12,50,00,000 results (0.77 seconds)
        </p>
      </div>
      <div className="searchPage_result">
        <a
          href="https://en.wikipedia.org/wiki/Akshay_Kumar"
          className="searchPage_resultLink"
        >
          <img
            src="https://avatars.githubusercontent.com/u/71595653?s=200&v=4"
            alt="google"
            className="searchPage_resultImage"
          />
          https://en.wikipedia.org
        </a>

        <a href="https://en.wikipedia.org" className="searchPage_resultTitle">
          <h2>Akshay Kumar - Wikipedia</h2>
        </a>

        <p className="searchPage_resultDes">
          Rajiv Hari Om Bhatia (born 9 September 1967), known professionally as
          Akshay Kumar is an Indian-born naturalised Canadian actor, film
          producer, ...
        </p>
      </div>
    </div>
  );
}
export default SearchPage;
