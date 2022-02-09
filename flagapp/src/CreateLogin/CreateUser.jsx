import React, { Component, useState } from 'react';
import './CreateUser.scss';
import Table from 'react-bootstrap/Table'



export default class CreateUser extends Component {
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        const { users, checkInDate,  checkOutDate, IdUser} = this.state;
        console.log(checkInDate)
        console.log(checkOutDate)
        console.log(IdUser)
        var parsedDateIn = new Date(checkInDate);
        var parsedDateOut = new Date(checkOutDate);
        let horodatage = {
            "idUser": this.state.IdUser,
            "dateArrival": parsedDateIn,
            "dateDeparture": parsedDateOut
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(horodatage)
        };
        console.log(requestOptions)
        return fetch(`https://localhost:7023/HorodatageUsers`, requestOptions);
        
    }
   
   render(){
    return (
        <div className="container">

            <h1 id="titleTable" >Création de l'utilisateur</h1>
            
<Table striped bordered hover>
  
  <tbody>
    <tr>
      <td>Adresse mail</td>
      <td><input type="email" placeholder='mail'></input></td>
     
    </tr>
    <tr>
      <td>Mot de passe</td>
      <td><input type="password"  placeholder='mot de passe'></input></td>
      
    </tr>
    
    <tr>
      <td>Role</td>
      <td ><select id="monselect">
  <option value="Patient">Patient</option>
  <option value="Staff" selected>Staff</option>
  <option value="Docteur">Docteur</option>
</select></td>
      
    </tr>
    
  </tbody>
</Table>
    
    <button className='btn-primary m-2 rounded' >Enregistrer</button>
        </div>
    )
    }



}