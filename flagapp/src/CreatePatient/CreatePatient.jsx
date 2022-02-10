import React, { Component, useState } from 'react';
import './CreatePatient.scss';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function CreatePatient() {
  const [UserID, setUserID] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateArrivee, setDateArrivee] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [note, setNote] = useState();
  const role = useSelector(state => state.authentication.user.role);
  const postData = () => {
    axios.post('https://localhost:7008/api/Dossierpatient', {
      UserID,
      nom,
      prenom,
      dateArrivee,
      dateDepart,
      note
    })
  }


    return (
      <div className="container">
        <h1 id="titleTable" >Création du dossier patient</h1>

        <Table striped bordered hover>

          <tbody>
            <tr>
              <td>Prénom</td>
              <td><input placeholder='Prénom' value={prenom} onChange={(e) => setPrenom(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Nom</td>
              <td><input placeholder='Nom' value={nom} onChange={(e) => setNom(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Date d'arrivée</td>
              <td ><input type="datetime-local" id="arrivee" name="arrivee" value={dateArrivee} onChange={(e) => setDateArrivee(new Date(e.target.value))}></input></td>

            </tr>
            <tr>
              <td>Date de départ</td>
              <td ><input type="datetime-local" id="depart" name="depart" value={dateDepart} onChange={(e) => setDateDepart(new Date(e.target.value))}></input></td>

            </tr>
            <tr>
              <td>Note concernant le Patient</td>
              <td ><textarea rows="9" cols="40" placeholder="Symptômes, diagnotics traitements, divers remarques pour l'equipe medicale."
              value={note} onChange={(e) => setNote(e.target.value)}></textarea></td>

            </tr>

          </tbody>
        </Table>

        <button className='btn-primary m-2 rounded' onClick={postData} type='submit' >Enregistrer</button>
      </div>
    )



  }