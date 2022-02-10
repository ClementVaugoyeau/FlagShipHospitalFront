import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {

    //const role = useSelector(state => state.authentication.user.role);
    const user = useSelector(state => state.authentication.user);
    /*const admin = user.role === "admin";*/
    ; const role = useSelector(state => state.authentication.role);
    const isAdmin = role === "admin";
    const isStaff = role === "staff";
    const isPatient = role === "Patient";
    /*const [role, setRole] = useState("");*/
    const logOut = () => {
        localStorage.removeItem("user");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="p-4">
                FlagS Hospital
            </h1>
            {isPatient &&
                <button className='btn btn-nav'>
                    <Link to='/read' className="btn btn-nav">
                        Liste Patients
                    </Link>
                </button>
            }
            {isAdmin && <button className='btn btn-nav'>
                <Link to='/createPatient' className="btn btn-nav">
                    Cr�er Patient
                </Link>
            </button>}
            {isAdmin && <button className='btn btn-nav'>
                <Link to='/createUser' className="btn btn-nav">
                    Cr�er User
                </Link>
            </button>}
            {user && <button className='btn btn-primary' onClick={logOut}>
                <Link to="/" className="btn">Logout</Link>
            </button>}
        </nav>
    )
}