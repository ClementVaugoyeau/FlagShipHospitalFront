import React, { Component, useState, useEffect } from 'react';
import './ReadPatient.scss';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { dossierPatientService } from '../_services/dossierpatient.service'
import { useParams } from 'react-router-dom';
import { dossierActions } from '../_actions';
import { alertActions } from '../_actions';

export default function CreatePatient() {

  let params  = useParams();
  const [dossier, setDossier] = useState([])
  const [id, setId] = useState('');
  const [numSecu, setNumSecu] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateArrivee, setDateArrivee] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [note, setNote] = useState();
  const role = useSelector(state => state.authentication.user.role);
  const dispatch = useDispatch();

  const isDocteur = role === "Docteur";
  const isStaff = role === "Staff";
  const isPatient = role === "Patient";

  let numsecu = '';

    useEffect(() => {
        dispatch(alertActions.clear());
        if (params['id'] != undefined) {
            setNumSecu(params['id'])
            dossierPatientService.getByNumSecu(params['id'])
                .then(
                    dossier => {
                        setData(dossier);
                    },
                    error => {
                        alert("dosssier introuvable")
                    }

                )
        }
   }, [])



    const setData = (data) => {
      setId(data.id)
      setNumSecu(data.numSecu);
      setNom(data.nom);
      setPrenom(data.prenom);
      setDateArrivee(data.dateArrivee);
      setDateDepart(data.dateDepart);
      setNote(data.note);
      setNote(data.note);
  }

  const getData = (e) => {

    e.preventDefault();
      
      dossierPatientService.getByNumSecu(numSecu)
          .then(
            dossier => {
              setData(dossier);              
          },
          error => {
            alert("dosssier introuvable")
        }
          
            )
 
    }

    const updateData = (e) => {

        let dossier = {
            "id": id,
            "Nom": nom,
            "Prenom": prenom,
            "NumSecu": numSecu,
            "DateArrivee": new Date(dateArrivee),
            "DateDepart": new Date(dateDepart),
            "Note": note
        }

        e.preventDefault();
        dispatch(dossierActions.update(dossier));
        //dossierPatientService.update(dossier)
        //    .then(
        //        dossier => {
        //            setDossier(dossier);
        //            console.log(dossier);

        //        },
        //        error => {
        //            alert("dosssier non mis ?? jour")
        //        }

        //    )

    }
  
    return (
      <div className="container">
        <h1 id="titleTable" >Dossier patient</h1>
        <button className='btn-primary m-2 rounded' onClick={getData} type='submit' >Entrez le num??ro de s??cu du patient</button>
            <input value={numSecu} placeholder='Num??ro de S??cu' onChange={(e) => setNumSecu(e.target.value)} />
        <table className="table">
          
        <tbody>
            <tr>
               <td>Nom</td>
               <td><input placeholder='Nom' value={nom || ''} onChange={(e) => setNom(e.target.value)}></input></td>
               </tr>
            <tr>
              <td>Pr??nom</td>
              <td><input placeholder='Pr??nom' value={prenom || ''} onChange={(e) => setPrenom(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Num??ro de S??cu</td>
              <td><input placeholder='NumSecu' value={numSecu || ''} onChange={(e) => setNumSecu(e.target.value)}></input></td>
            </tr>
            <tr>
               <td>Date d'arriv??e</td>
               <td ><input type="datetime-local" id="arrivee" name="arrivee" value={dateArrivee.substring(0, 16) || ''} onChange={(e) => { setDateArrivee(e.target.value); console.log(e.target.value)}}></input></td>

            </tr>
            <tr>
               <td>Date de d??part</td>
               <td ><input type="datetime-local" id="depart" name="depart" value={dateDepart.substring(0, 16) || ''} onChange={(e) => setDateDepart(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>Note concernant le Patient</td>
              <td ><textarea rows="9" cols="40" placeholder="Sympt??mes, diagnotics traitements, divers remarques pour l'equipe medicale."
                    value={note || ''} onChange={(e) => setNote(e.target.value)}></textarea></td>

          </tr>

          </tbody>
        </table>
            {(isDocteur || isStaff) && <button className='btn-primary m-2 rounded' onClick={updateData} type='submit' >Modifier</button>}
      </div>
    )



}