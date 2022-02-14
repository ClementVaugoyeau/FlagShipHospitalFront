import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
/*library.add(faCheckSquare, faCoffee)*/
/*import { fa-power - off } from '@fortawesome/free-solid-svg-icons'*/
library.add(faPowerOff);

export default function NavBar() {

    //const role = useSelector(state => state.authentication.user.role);
    const user = useSelector(state => state.authentication.user);
    /*const admin = user.role === "admin";*/
    ; const role = useSelector(state => state.authentication.role);
    const isDocteur = role === "Docteur";
    const isStaff = role === "Staff";
    const isPatient = role === "Patient";
    /*const [role, setRole] = useState("");*/
    const logOut = () => {
        localStorage.removeItem("user");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="p-4 mr-auto">
                FlagS Hospital
            </h1>
            {(isDocteur || isStaff ) &&
                <button className='btn btn-nav'>
                    <Link to='/listeDossiers' className="btn btn-nav">
                        Liste Dosiers
                    </Link>
                </button>
            }
            {isDocteur && <button className='btn btn-nav'>
                <Link to='/createPatient' className="btn btn-nav">
                    Creer Dossier
                </Link>
            </button>}
            {isDocteur && <button className='btn btn-nav'>
                <Link to='/createUser' className="btn btn-nav">
                    Creer User
                </Link>
            </button>}
            {(isDocteur || isStaff) && <button className='btn btn-nav'>
                <Link to='/Dossierpatient' className="btn btn-nav">
                    Chercher Dossier
                </Link>
            </button>}
            {user &&
                <Link to="/" className="btn"><FontAwesomeIcon icon={faPowerOff} onClick={logOut} /></Link>
            }
        </nav>
    )
}