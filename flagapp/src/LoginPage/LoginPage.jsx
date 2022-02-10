import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import { useNavigate } from "react-router-dom";


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

    // reset login status
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
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.Login(Email, Motdepasse, from));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="Email" value={Email} onChange={handleChange} className={'form-control' + (submitted && !Email ? ' is-invalid' : '')} />
                    {submitted && !Email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" name="Motdepasse" value={Motdepasse} onChange={handleChange} className={'form-control' + (submitted && !Motdepasse ? ' is-invalid' : '')} />
                    {submitted && !Motdepasse &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export { LoginPage };