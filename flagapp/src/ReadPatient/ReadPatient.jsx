import React, { Component, useState, useEffect } from 'react';
import './ReadPatient.scss';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PatientService } from '../_services/patient.service'

export default function CreatePatient() {
  
  const [dossier, setDossier] = useState([])

  const [id, setId] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateArrivee, setDateArrivee] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [note, setNote] = useState();
  const role = useSelector(state => state.authentication.user.role);
 
  // useEffect(() => {
  //   // axios.get('https://61fa55d392093f0017ad972d.mockapi.io/User')
  //   axios.get('https://localhost:7008/api/Dossierpatient')
  //   .then( (response) => {
  //       setAPIData(response.data)
  //   } )
  // }, )

  

  const setData = (data) => {
    let {id, nom, prenom, dateArrivee, dateDepart, note } = data;
    localStorage.setItem('id', id);
    localStorage.getItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('dateArrivee', dateArrivee);
    localStorage.setItem('dateDepart', dateDepart);
    localStorage.setItem('note', note);
    
  }

  const getData = (e) => {
    
    e.preventDefault();

    let dossier = {
      "id" : id,
      "nom": nom,
      "prenom": prenom,
      "dateArrivee": dateArrivee,
      'dateDepart': dateDepart,
      'note': note

    }

  PatientService.getById(id)
          .then(
            dossier => {
              setDossier(dossier);
              console.log(dossier);
              
          },
          error => {
            alert("dosssier introuvable")
        }
          
            )
 
  }
  
  //convertisseur pour les dates
  var a = dossier.dateArrivee;
  var aFormat = new Date(a).toLocaleString();

  var d = dossier.dateDepart;
  var dFormat = new Date(d).toLocaleString();

    return (
      <div className="container">
        <h1 id="titleTable" >Dossier patient</h1>
        
        <Table striped bordered hover>
          
          <tbody>
            <tr>
              <td>Prénom</td>
              <td><p>{dossier.prenom}</p></td>

            </tr>
            <tr>
              <td>Nom</td>
              <td>{dossier.nom}</td>

            </tr>
            <tr>
              <td>Date d'arrivée</td>
              <td >{aFormat}</td>

            </tr>
            <tr>
              <td>Date de départ</td>
              <td >{dFormat}</td>

            </tr>
            <tr>
              <td>Note concernant le Patient</td>
              <td >{dossier.note}</td>

            </tr>

          </tbody>
        </Table>
         
        <button className='btn-primary m-2 rounded' onClick={getData} type='submit' >Validez l'ID du dossier patient</button>
        <input  value={id} placeholder='id' onChange={(e) => setId(e.target.value)} />
      </div>
    )



  }