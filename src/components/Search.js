import React, { useState } from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../provider/StateProvider";
import { actionTypes } from "../reducers/reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    history.push("/search");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <form className="search">
      <div className={`search__input ${!hideButtons ? "" : "noMargin"}`}>
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__micIcon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} style={{ color: "#26FFD4" }}>
            Swift Search
          </Button>
          <Button className="search__buttons" style={{ color: "#26FFD4" }}>Show me the money</Button>
        </div>
      ): (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            style={{ color: "#26FFD4" }}
          >
            Swift Search
          </Button>
          <Button
            className="search__buttonsHidden"
            style={{ color: "#26FFD4" }}
          >
            Show me the money
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
