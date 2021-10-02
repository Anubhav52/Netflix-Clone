import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {

    const [movie, setMovie] = useState([]);
// Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            // Like setState.
            setMovie(
                // here we are generating any random number from the some many data comes from the api.
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [] );
    // console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button play">
                <i className="fas fa-play"></i>
                    Play</button>
                <button className="banner_button info">
                <i class="fas fa-info-circle"></i>
                    More Info</button>
            </div>
            <h1 className="banner_description">
                {truncate (movie?.overview , 150 )}
            </h1>
        </div>

        <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
