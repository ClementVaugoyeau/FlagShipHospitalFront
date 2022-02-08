import React, { useState } from 'react';
import './CreatePatient.scss';


export default function CreatePatient() {
    

   

    return (
        <div class = "container">
            <div className="create-form">
                <div>
                    <label>Prénom</label>
                    <input placeholder='Prénom' />
                </div>
                <div>
                    <label>Nom</label>
                    <input placeholder='Nom' />
                </div>
                <div>
                    <label>Date d'arrivée</label>
                    <input placeholder='Nom' />
                </div>
                <div>
                    <label>Date de départ</label>
                    <input placeholder='Nom' />
                </div>
                
                
                <div>
                <label>Note dossier patient</label>
                <textarea rows = "5" cols = "60" name = "description" placeholder='Notez les informations du patient ici'>
            
         </textarea>
                </div>
                
                
                <button  type='submit'>Envoyer</button>
            </div>
        </div>
    )
}