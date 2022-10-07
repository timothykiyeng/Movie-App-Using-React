import React, {useState, useEffect} from "react";
import AddMovie from "./AddMovie";
import Movie from "./Movie";
import Search from "./Search";



function MovieContainer() {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/movies")
          .then((res) => res.json())
          .then((movieData) => {
            setMovieData(movieData)
          })
      }, []);





return (
    <>
    
    <Search />
    <AddMovie />
    
    
    
    </>
   
)













}

export default MovieContainer