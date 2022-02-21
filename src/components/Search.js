import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
function Search(hidebuttons) {
  return (
    <form className="search">
      <div className="search_input search-box">
        <SearchIcon className="searchicon" />
        <input />
      </div>
      {!hidebuttons && (
        <div className="search_buttons">
          <Button type="submit" variant="outline" className="search">
            Google Search
          </Button>
          <Button type="submit" variant="outline">
            Feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}
export default Search;
