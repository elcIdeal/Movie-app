import React, { useState } from "react";
import { observer } from "mobx-react";
import { TextField, Button } from "@mui/material";
import moviesStore from "../stores/MoviesStore";

const SearchBar = observer(() => {
  const [searchValue, setSearchValue] = useState(""); 

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value); 
    moviesStore.fetchMovies(value); 
  };

  const handleClear = () => {
    setSearchValue(""); 
    moviesStore.fetchMovies(""); 
  };

  return (
    <div className="search-bar">
      <TextField
        label="Search Movies"
        variant="outlined"
        value={searchValue}
        onChange={handleSearch} 
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClear}
        style={{ height: "50px" }}
      >
        Clear
      </Button>
    </div>
  );
});

export default SearchBar;
