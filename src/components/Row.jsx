import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import '../components/row.styles.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl) // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    console.table(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-covers">
                {movies.map((movie) => (
                    <img
                        className='row-cover'
                        src={`${baseUrl}${movie.poster_path}`}
                        alt={`${baseUrl}${movie.name}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
