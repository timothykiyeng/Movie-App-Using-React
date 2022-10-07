import React from "react";


function Movie({displayMovieItems}) {
  return (
    <div className="movie">
        <img src={displayMovieItems.image} alt="" />
        <div className="movie-info">
           <h3>{displayMovieItems.name}</h3>
           <span>Rating: {displayMovieItems.ratings}</span>
        </div>
      <div className="movie-overview">
         <h2>Overview:</h2>
         <p>{displayMovieItems.overview}</p>
      </div>
    </div>
  );
}

export default Movie;