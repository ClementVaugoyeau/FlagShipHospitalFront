import React, { Component, useState } from 'react';
import './CreateUser.scss';
import Table from 'react-bootstrap/Table'
import { userService } from '../_services/user.service'
import axios from 'axios'

export default function CreateUser() {

  const [UserID, setUserID] = useState('');
  const [email, setMail] = useState('');
  const [motdepasse, setPassword] = useState('');
  const [role, setRole] = useState();

  const postData = (e) => {
      //axios.post('https://localhost:7008/api/Users' , {
      //    email,
      //    motdepasse,
      //    role
      //})
      e.preventDefault();
   
      let user = {
              "email": email,
              "motdepasse": motdepasse,
              "role": role
      }
      userService.register(user)
              .then(
                  user => {
                      console.log(user)
                      alert("Utilisateur créé")
                  },
                  error => {
                      alert(error)
                  }
          );

  }
    
   
   
    return (
        <div className="container">

            <h1 id="titleTable" >Création de l'utilisateur</h1>
            
            <Table striped bordered hover>
  
              <tbody>
                <tr>
                  <td>Adresse mail</td>
                  <td><input value={email} placeholder='mail' onChange={(e) => setMail(e.target.value)}></input></td>
     
                </tr>
                <tr>
                  <td>Mot de passe</td>
                  <td><input type="password" value={motdepasse} placeholder='mot de passe' onChange={(e) => setPassword(e.target.value)}></input></td>
      
                </tr>
    
                <tr>
                    <td>Role</td>
                    <td >
                            <select id="monselect" defaultValue={'DEFAULT'} onChange={(e) => setRole(e.target.value)}>
                              <option value="DEFAULT" disabled>Choose a salutation ...</option>
                              <option value="Patient">Patient</option>
                              <option value="Staff">Staff</option>
                              <option value="Docteur">Docteur</option>
                        </select>
                    </td>    
                </tr>   
                </tbody>

            </Table>
    
            <button className='btn-primary m-2 rounded' onClick={postData} type='submit' >Enregistrer</button>
        </div>
    )
    



}