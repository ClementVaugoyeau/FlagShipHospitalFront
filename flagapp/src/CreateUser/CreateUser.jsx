import React, { Component, useState, useEffect } from 'react';
import './CreateUser.scss';
import { userService } from '../_services/user.service'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { userActions, alertActions } from '../_actions';

export default function CreateUser() {

  const [UserID, setUserID] = useState('');
  const [email, setMail] = useState('');
  const [motdepasse, setPassword] = useState('');
  const [role, setRole] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(alertActions.clear());
   }, [])

  const postData = (e) => {
    
      e.preventDefault();
      setSearching(true)
      let user = {
              "email": email,
              "motdepasse": motdepasse,
              "role": role
      }
      dispatch(userActions.register(user));
      //userService.register(user)
      //        .then(
      //            user => {
      //                console.log(user)
      //                /*alert("Utilisateur créé")*/
      //                setSearching(false)
      //            },
      //            error => {
      //                alert(error)
      //            }
      //    );

  }
    
   
   
    return (
        <div className="w-75">

            <h1 className="mt-4 mb-4" >Création de l'utilisateur</h1>

                <div className="form-group mb-4">
                    <label className="mb-2">Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => setMail(e.target.value)} 
                    className={'mb-2 form-control' + (submitted && !email ? ' is-invalid' : '')} />
                    {submitted && !email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group mb-4">
                    <label className="mb-2">Mot de passe</label>
                    <input type="password" name="motdepasse" value={motdepasse} onChange={(e) => setPassword(e.target.value)} 
                    className={'mb-2 form-control' + (submitted && !motdepasse ? ' is-invalid' : '')} />
                    {submitted && !motdepasse &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group mb-4">
                    <label className="mb-2">Role</label>
                    <select id="monselect" defaultValue={'DEFAULT'} onChange={(e) => setRole(e.target.value)}>
                              <option value="DEFAULT" disabled>Choose a salutation ...</option>
                              <option value="Patient">Patient</option>
                              <option value="Staff">Staff</option>
                              <option value="Docteur">Docteur</option>
                    </select>
                </div>
            <div className="form-group mt-5 d-flex justify-content-around">
              <button className='btn btn-primary' onClick={postData} type='submit' >
                {searching && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Enregistrer
              </button>
            </div>
       
        </div>
    )
    



}