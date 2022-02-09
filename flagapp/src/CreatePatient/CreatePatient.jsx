import React, { Component, useState } from 'react';
import './CreatePatient.scss';
import Table from 'react-bootstrap/Table'

import axios from 'axios';

export default function CreatePatient()  {
    
    
   
   
    return (
        <div className="container">

            <h1 id="titleTable" >Création du dossier patient</h1>
            
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
    
    <button className='btn-primary m-2 rounded'  >Enregistrer</button>
        </div>
    )
    



}