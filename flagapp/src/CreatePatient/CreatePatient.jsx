import React, { Component, useState, useEffect } from 'react';
import './CreatePatient.scss';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { dossierPatientService } from '../_services/dossierpatient.service'
import { dossierActions } from '../_actions';
import { userActions, alertActions } from '../_actions';

export default function CreatePatient() {
  const [UserID, setUserID] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numsecu, setNumSecu] = useState('');
  const [dateArrivee, setDateArrivee] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [note, setNote] = useState();
  const role = useSelector(state => state.authentication.user.role);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(alertActions.clear());
  }, [])

  const postData = (e) => {

      e.preventDefault();
      

      let dossierPatient = {
          "Nom": nom,
          "Prenom": prenom,
          "NumSecu": numsecu,
          "DateArrivee": new Date(dateArrivee),
          "DateDepart": new Date(dateDepart),
          "Note": note
      }
      dispatch(dossierActions.create(dossierPatient));
      //dossierPatientService.create(dossierPatient)
      //    .then(
      //        dossierPatient => {
      //            console.log(dossierPatient)
      //            alert("dossierPatient créé")
      //        },
      //        error => {
      //            alert(error)
      //        }
      //    );
  }


    return (
      <div className="container">
        <h1 id="titleTable" >Création du dossier patient</h1>

            <table className="table">

          <tbody>
            <tr>
               <td>Nom</td>
               <td><input placeholder='Nom' value={nom} onChange={(e) => setNom(e.target.value)}></input></td>
               </tr>
            <tr>
              <td>Prénom</td>
              <td><input placeholder='Prénom' value={prenom} onChange={(e) => setPrenom(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Numéro de Sécu</td>
              <td><input placeholder='NumSecu' value={numsecu} onChange={(e) => setNumSecu(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>Date d'arrivée</td>
              <td ><input type="datetime-local" id="arrivee" name="arrivee" value={dateArrivee} onChange={(e) => setDateArrivee(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Date de départ</td>
              <td ><input type="datetime-local" id="depart" name="depart" value={dateDepart} onChange={(e) => setDateDepart(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Note concernant le Patient</td>
              <td ><textarea rows="9" cols="40" placeholder="Symptômes, diagnotics traitements, divers remarques pour l'equipe medicale."
              value={note} onChange={(e) => setNote(e.target.value)}></textarea></td>

            </tr>

          </tbody>
            </table>

        <button className='btn-primary m-2 rounded' onClick={postData} type='submit' >Enregistrer</button>
      </div>
    )



  }