import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import '../row/row.styles.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl) // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h3 className="title">{title}</h3>
            <div className="row-covers">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row-cover ${isLargeRow && "row-coverLarge" }`}
                        src={`${baseUrl}${
                            isLargeRow ? movie.poster_path :  movie.backdrop_path }`}
                        alt={`${movie.name}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
