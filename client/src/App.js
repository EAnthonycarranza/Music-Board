import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchMusic from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div>
        {/* display searchbar */}
        <SearchMusic />
      </div>
    </Router>
  );
}

export default App;
