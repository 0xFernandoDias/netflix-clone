import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import requests from '../../utils/requests'
import '../banner/banner.styles.css'

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    }, [])

    const truncate = (str, num) => {
        return str?.length > num ? str.substr(0, num - 1) + "..." : str 
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name }
                </h1>
                <div className="banne-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">More Info</button>
                </div>
                <h1 className='banner-description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>
    )
}

export default Banner