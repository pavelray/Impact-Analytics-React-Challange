import React, { useState } from "react";
import { MovieForm } from "./MovieForm";
import MoveTable from "./MovieTable";

export const MoveiWrapper = () => {

    const [movies, setMovies ] = useState([]);
    const [movieResult, setMovieResults] = useState([]);
    const [searchValue , setSearchValue] = useState("");
    const saveMovie = (movie) => {
        setMovies([...movies, movie]);
        setMovieResults([...movies, movie]);
    }

    const searchMove = (event) => {
        const searchTerm = event.target.value;
        const length = searchTerm.length;
        if(length > 2){
            const result = movies.find(m => m.name.includes(searchTerm));
            if(result){
                setMovieResults([{...result}]);
            }else{
                setMovieResults([...movies]);
            }
        }else{
            setMovieResults([...movies]);
        }
    }

    const handleOnChange = (event) => {
        setSearchValue(event.target.value)
    }

  return (
    <>
      <MovieForm saveMovie={saveMovie}/>
      <br/>
      <br/>
      <br/>
      <label>Search Movie </label>
      <input type="text" value={searchValue} onChange={handleOnChange} onKeyUp={searchMove} />
      <br/>
      <br/>
      <br/>
      <MoveTable movies={movieResult} />
    </>
  );
};
