import React, {useState, useEffect} from "react";
import AddMovie from "./AddMovie";
import Movie from "./Movie";
import Search from "./Search";

const apiHost = "https://movie-app-react-11.herokuapp.com/movies"

function MovieContainer() {

    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(apiHost)
          .then((res) => res.json())
          .then((movieData) => {
            setMovieData(movieData)
          })
      }, []);


      function postMovies(movieData){
        fetch(apiHost, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(movieData)
        })
        .then(res => res.json())
        .then(newMovie => setMovieData(movieData => [...movieData, newMovie]))
      }

      const searchMovie = (e) => {
        setSearch(e.target.value);
      }



return (
    <>
    
    <Search search={search} onSearchChange={searchMovie} />
    <br></br>
    <AddMovie postMovies={postMovies}/>
    <br></br>
    <div className="movie-container">
      {movieData.filter((movie)=>{
          if(search === ""){
            return movie;
          }else if(movie.name.toLowerCase().includes(search.toLowerCase())){
            return movie;
          }
          return false
        })?.map((displayMovieItem) => (
          <Movie key={displayMovieItem.id}  displayMovieItems={displayMovieItem} />
        ))}
      </div>
    
    
    </>
   
)













}

export default MovieContainer