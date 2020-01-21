import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";

const App = () => {
  const themehook = useState("peru");
  return (
    <ThemeContext.Provider value={themehook}>
      <div>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
