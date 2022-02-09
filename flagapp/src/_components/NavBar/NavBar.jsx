import React from 'react'

import { Link } from 'react-router-dom';

export default function NavBar() {

    const logOut = () => {
        localStorage.removeItem("user");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>
                FlagS Hospital
            </h1>
            <button className='btn btn-nav'>
                <Link to='/read' className="btn btn-nav">
                    Liste Patients
                </Link>
            </button>
            <button className='btn btn-primary' onClick={logOut}>
                <Link to="/" className="btn">Logout</Link>
            </button>
        </nav>
    )
}