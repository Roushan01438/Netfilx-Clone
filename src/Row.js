// import React from 'react';
// import axios from './axios';// since we are seting default export so we can change the name of the exprot module
// import { useState, useEffect } from 'react';
// import './Row.css';
// import YouTube from "react-youtube";
// import movieTrailer from 'movie-trailer';
// const base_url = "https://image.tmdb.org/t/p/original/";
// function Row({ title, fetchUrl,isLargeRow }) {
    
//     const [movies, setMovies] = useState([]);
//     const [trailerUrl,setTrailerUrl]=useState("");
//     //when the row load , we want to run a peace of  code and that code is written in useEffect section
//     // if [] is kept blank the we want to say that run the useEffect code once and then dont run it again
//     //now [movies], run once when the page load and run every time when the movies changes i.e. dependent of variable on 'movies'
//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(fetchUrl);
//             //console.log(request.data.results);
//             setMovies(request.data.results);
//             return request;
//         }
//         fetchData();
//     }, [fetchUrl])//note that whenever there is a variable from outside which is used in the useEffect it means that the content of the page is dependent on that variable i.e change in it may cause th page to rerender so include it in []
//     const opts={
//         height:"350px",
//         width:"100%",
//         playVars:{
//             autoplay:1,
//         }}
//         const handleClick = (movie) => {
//             // console.table(movie?.title)
//             if (trailerUrl) {
//               setTrailerUrl('')
//             } else {
//               movieTrailer(movie?.title || "")
//                 .then(url => {
//                   const urlParams = new URLSearchParams(new URL(url).search);
//                   setTrailerUrl(urlParams.get('v'));
//                 }).catch((error) => console.log(error));
//             }
//         }
//     //console.table(movies);
//     return (
//         <div className='row'>

            
//             {title}
//             <div className="row_posters" >
//                 {movies.map(movie => (
//                     <img onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id}
//                       src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
//                     //NOTE:- THE POSTER_PATH CONTAINED ONLY THE ENDPOINT ...THE BASE URL CARRIES THE FRONT PART WHICH HAS BEEND TAKENN FROM DOCUMENTATION
//                     // NOTE:- THIS SHOULD BE DONE USING "  `  " 
//                     //when we use key ,if there is any chage in a particular poster , only that poster section will be rerendered and not the entire row
//                ))}
//             </div>
//            {trailerUrl &&<YouTube videoId='tpQWSzy6glU' opts={opts}/>} 
//         </div>
//     );
// }

// export default Row

import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => {
          return <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        })}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;