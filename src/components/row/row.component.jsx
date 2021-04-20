import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import '../row/row.styles.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl) // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch((error) => console.log(error))
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters 
            autoplay: 1
        }
    }

    return (
        <div className='row'>
            <h3 className="title">{title}</h3>
            <div className={`${isLargeRow ? "row-leftLarge" : "row-left"}`} >
                <NavigateBeforeIcon style={{fontSize:50}} />
            </div>
            <div className={`${isLargeRow ? "row-rightLarge" : "row-right"}`} >
                <NavigateNextIcon style={{fontSize:50}} />
            </div>
            <div className="row-covers">
                {movies.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row-cover ${isLargeRow && "row-coverLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row