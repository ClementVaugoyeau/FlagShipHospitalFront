import React, { Component, useState, useEffect } from 'react';
import './ReadPatient.scss';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { dossierPatientService } from '../_services/dossierpatient.service'
import { useParams } from 'react-router-dom';


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
  let numsecu = '';

    useEffect(() => {

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

        dossierPatientService.update(dossier)
            .then(
                dossier => {
                    setDossier(dossier);
                    console.log(dossier);

                },
                error => {
                    alert("dosssier non mis à jour")
                }

            )

    }
  
    return (
      <div className="container">
        <h1 id="titleTable" >Dossier patient</h1>
        <button className='btn-primary m-2 rounded' onClick={getData} type='submit' >Entrez le numéro de sécu du patient</button>
            <input value={numSecu} placeholder='Numéro de Sécu' onChange={(e) => setNumSecu(e.target.value)} />
        <table className="table">
          
        <tbody>
            <tr>
               <td>Nom</td>
               <td><input placeholder='Nom' value={nom || ''} onChange={(e) => setNom(e.target.value)}></input></td>
               </tr>
            <tr>
              <td>Prénom</td>
              <td><input placeholder='Prénom' value={prenom || ''} onChange={(e) => setPrenom(e.target.value)}></input></td>

            </tr>
            <tr>
              <td>Numéro de Sécu</td>
              <td><input placeholder='NumSecu' value={numSecu || ''} onChange={(e) => setNumSecu(e.target.value)}></input></td>
            </tr>
            <tr>
               <td>Date d'arrivée</td>
               <td ><input type="datetime-local" id="arrivee" name="arrivee" value={dateArrivee.substring(0, 16) || ''} onChange={(e) => { setDateArrivee(e.target.value); console.log(e.target.value)}}></input></td>

            </tr>
            <tr>
               <td>Date de départ</td>
               <td ><input type="datetime-local" id="depart" name="depart" value={dateDepart.substring(0, 16) || ''} onChange={(e) => setDateDepart(e.target.value)}></input></td>
            </tr>
            <tr>
              <td>Note concernant le Patient</td>
              <td ><textarea rows="9" cols="40" placeholder="Symptômes, diagnotics traitements, divers remarques pour l'equipe medicale."
                    value={note || ''} onChange={(e) => setNote(e.target.value)}></textarea></td>

            </tr>

          </tbody>
        </table>
            <button className='btn-primary m-2 rounded' onClick={updateData} type='submit' >Modifier</button>
      </div>
    )



  }