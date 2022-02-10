import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {

    //const role = useSelector(state => state.authentication.user.role);
    const user = useSelector(state => state.authentication.user);
    const role = useSelector(state => state.authentication.user.role);
    /*const [role, setRole] = useState("");*/
    const logOut = () => {
        localStorage.removeItem("user");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>
                FlagS Hospital
            </h1>
            {user && <button className='btn btn-nav'>
                <Link to='/read' className="btn btn-nav">
                    Liste Patients
                </Link>
            </button>}
            {user && < button className='btn btn-nav'>
            <Link to='/createPatient' className="btn btn-nav">
                Créer Patient
            </Link>
                </button>}
            {user && <button className='btn btn-nav'>
                <Link to='/createUser' className="btn btn-nav">
                    Créer User
                </Link>
            </button>}
            <button className='btn btn-primary' onClick={logOut}>
                <Link to="/" className="btn">Logout</Link>
            </button>
        </nav>
    )
}