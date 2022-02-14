import React, { Component, useState, useEffect } from 'react';
import './UpdateUser.scss';
import { userService } from '../_services/user.service'
import { useDispatch, useSelector } from 'react-redux';
import { dossierPatientService } from '../_services/dossierpatient.service';



export default function UpdateUser() {

    const [UserID, setUserID] = useState('');
    const [email, setMail] = useState('');
    const [motdepasse, setPassword] = useState('');
    const [numsecu, setNumSecu] = useState('');
   
    const [UserToChange, setUserToChange] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [dossiers, setDossiers] = useState('');
    const [doss, setDoss]  = useState('');

    const [APIData, setAPIData] = useState([])
    const [searching, setSearching] = useState(false);


   

    useEffect(() => {
        dossierPatientService.getAll()
            .then(
                dossiers => {
                    setAPIData(Array.from(dossiers));
                    console.log(Array.from(dossiers));
                    
                    
                    // console.log(dossiers);
                },
                error => {
                    alert("dosssier introuvable")
                }
            )
    },[])

    const handleChange = (e) => {
          
          setDossiers();
       
        }

    // handleChange = (e) => {
    //     e.preventDefault();
    //     const { dossiers, numsecu} = this.state;
    //     console.log(numsecu);

    //     let dossier = {'numsecu' : this.state.numsecu}
    
    // }
        

    
    

  return (
      
      
      <div className="w-75">
        
        

          <h1 className="mt-4 mb-4" >Modification de l'utilisateur</h1>
          <div className="form-group mb-4">
              <label className="mb-2">Choisir le numéro de sérité social du patient :</label>
              
                
              <select  id="monselect">
              
                            {APIData && APIData.map((dossier, index) => (                              
                                    <option key={index} value={dossier.nom} onClick={(e) => setDoss(e.target.value)}>{dossier.numSecu} </option> 
                                    
                                     ))
                                }
              </select>
                                         
                                    <p script ={console.log(doss)}>{doss} <input></input> <button>Modifier</button></p> 
                                    
                                
             
          </div>

        


      </div>


  )




}