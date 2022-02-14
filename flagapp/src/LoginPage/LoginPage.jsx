import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

function LoginPage() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        Email: '',
        Motdepasse: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { Email, Motdepasse } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (Email && Motdepasse) {
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.Login(Email, Motdepasse, from));
        }
    }

    return (
        <div className="w-75">
            <h2 className="mt-4 mb-4">Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <label className="mb-2">Email</label>
                    <input type="text" name="Email" value={Email} onChange={handleChange} className={'mb-2 form-control' + (submitted && !Email ? ' is-invalid' : '')} />
                    {submitted && !Email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label className="mb-2">Mot de passe</label>
                    <input type="password" name="Motdepasse" value={Motdepasse} onChange={handleChange} className={'mb-2 form-control' + (submitted && !Motdepasse ? ' is-invalid' : '')} />
                    {submitted && !Motdepasse &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group mt-5 d-flex justify-content-around">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    {/*<button className="btn btn-primary">*/}
                    {/*    {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}*/}
                    {/*    <Link className="btn btn-primary" to="/register">Register</Link>*/}
                    {/*</button>*/}
                </div>
            </form>
        </div>
    );
}

export { LoginPage };