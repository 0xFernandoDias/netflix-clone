import React, { useEffect, useState } from 'react'
import './nav.styles.css'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200 ) {
                handleShow(true)
            } else handleShow (false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`navbar ${show && "navbar-black"}`}>
            <div>
            <img className='nav-logo'
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-3-1.png"
            alt="Netflix Logo"/>

            <ul className="nav-ul">
                <li className="nav-li">
                    <a className="a-nav" href="/">Home</a>
                </li>
                <li className="nav-li">
                    <a className="a-nav" href="/">TV Shows</a>
                </li>
                <li className="nav-li">
                    <a className="a-nav" href="/">Movies</a>
                </li>
                <li className="nav-li">
                    <a className="a-nav" href="/">{`New & Popular`}</a>
                </li>
                <li className="nav-li">
                    <a className="a-nav" href="/">My List</a>
                </li>
            </ul>

            </div>

            <img className="nav-avatar"
            src="https://occ-0-185-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png"
            alt="Avatar" />
        </div>
    )
}

export default Nav
