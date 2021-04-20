import React from 'react'
import Row from '../row/row.component'
import requests from '../../utils/requests'

function Rows() {
    return (
        <>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
    )
}

export default Rows