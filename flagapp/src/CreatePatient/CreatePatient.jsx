import React, { Component, useState } from 'react';
import './CreatePatient.scss';
import Table from 'react-bootstrap/Table'



export default class CreatePatient extends Component {
    
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

            <h1 id="titleTable" >Creation du dossier patient</h1>
            
<Table striped bordered hover>
  
  <tbody>
    <tr>
      <td>Prénom</td>
      <td><input placeholder='Prénom'></input></td>
     
    </tr>
    <tr>
      <td>Nom</td>
      <td><input placeholder='Nom'></input></td>
      
    </tr>
    <tr>
      <td>Date d'arrivée</td>
      <td ><input type="datetime-local" id="arrivee" name="arrivee"></input></td>
      
    </tr>
    <tr>
      <td>Date de départ</td>
      <td ><input type="datetime-local" id="depart" name="depart"></input></td>
      
    </tr>
    <tr>
      <td>Note concernant le Patient</td>
      <td ><textarea rows="9" cols="40" placeholder="Symptômes, diagnotics traitements, divers remarques pour l'equipe medicale."></textarea></td>
      
    </tr>
    
  </tbody>
</Table>
    
    <button className='btn-primary m-2 rounded' >Enregistrer</button>
        </div>
    )
    }



}