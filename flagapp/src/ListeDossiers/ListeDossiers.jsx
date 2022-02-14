import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { dossierPatientService } from '../_services/dossierpatient.service'
import './ListeDossiers.scss';

export default function ListeDossiers() {

    const [APIData, setAPIData] = useState([])
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        dossierPatientService.getAll()
            .then(
                dossiers => {
                    setAPIData(dossiers)
                },
                error => {
                    alert("dosssier introuvable")
                }
            )
    },[])
    
    const deleteDossier = id => {
        
        setSearching(true)
       
        dossierPatientService._delete(id)
            .then(
                user => {
                    alert("Dossier effacé")
                    setSearching(false)
                },
                error => {
                    console.log(error)
                }
            );

    }


    return (
        <div className="m-4">
            <table className="table">
                <thead className="">
                    <tr>
                        <th>Num Secu</th>
                        <th></th>
                        <th></th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date entrée</th>
                        <th>Date sortie</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {APIData &&
                        APIData.map((dossier, index) => (
                            <tr key={index}>
                                <td className="text-truncate align-middle colspan='3'">{dossier.numSecu}</td>
                                <td></td>
                                <td></td>
                                <td className="text-truncate align-middle">{dossier.nom}</td>
                                <td className="text-truncate align-middle">{dossier.prenom}</td>
                                <td className="text-truncate align-middle">{new Date(dossier.dateArrivee).toLocaleString()}</td>
                                <td className="text-truncate align-middle">{new Date(dossier.dateDepart).toLocaleString()}</td>
                                <td>
                                    <button
                                        className="btn btn-success">
                                        <Link to={`/Dossierpatient/${dossier.numSecu}`}> Edit </Link>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteDossier(dossier.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}