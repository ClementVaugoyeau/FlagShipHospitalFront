import React, { Component, useState, useEffect } from 'react';
import './UpdateUser.scss';
import { userService } from '../_services/user.service'
import { useDispatch, useSelector } from 'react-redux';



export default function UpdateUser() {

    const [UserID, setUserID] = useState('');
    const [email, setMail] = useState('');
    const [motdepasse, setPassword] = useState('');
    const [UserToChange, setUserToChange] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [searching, setSearching] = useState(false);





  return (
      <div className="w-75">

          <h1 className="mt-4 mb-4" >Modification de l'utilisateur</h1>
          <div className="form-group mb-4">
              <label className="mb-2">Choisir un numero de secu</label>
              <select id="monselect" defaultValue={'DEFAULT'} onChange={(e) => setUserToChange(e.target.value)}>
                  <option value="DEFAULT" disabled>Liste Utilisateur</option>
                  <option value="Patient">Patient</option>
                  <option value="Staff">Staff</option>
                  <option value="Docteur">Docteur</option>
              </select>
          </div>




      </div>


  )




}