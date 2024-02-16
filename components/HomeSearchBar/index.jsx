import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomeSearchBar = () => {
  const [location, setLocation] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    if (location.trim() !== "") {
      // Redirect to the search page with the search query
      history.push(`/search?location=${encodeURIComponent(location)}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter a city..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HomeSearchBar;