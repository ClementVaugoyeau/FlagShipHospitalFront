import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { dossierPatientService } from '../_services/dossierpatient.service'
import './ListeDossiers.scss';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);
library.add(faPen);

export default function ListeDossiers() {

    const [APIData, setAPIData] = useState([])
    const [searching, setSearching] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.authentication.user);
    const role = useSelector(state => state.authentication.role);
    const isDocteur = role === "Docteur";
    const isStaff = role === "Staff";
    const isPatient = role === "Patient";

    useEffect(() => {
        dispatch(alertActions.clear());
        getData();
        //dossierPatientService.getAll()
        //    .then(
        //        dossiers => {
        //            setAPIData(dossiers)
        //        },
        //        error => {
        //            alert("dosssier introuvable")
        //        }
        //    )
    },[])
    
    const deleteDossier = id => {
        
        setSearching(true)
       
        dossierPatientService._delete(id)
            .then(
                user => {
                    setSearching(false)
                    getData()
                },
                error => {
                    console.log(error)
                }
            );

    }

    const getData = () => {

        setSearching(true)

        dossierPatientService.getAll()
            .then(
                dossiers => {
                    setAPIData(dossiers)
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
                                    {/*{(isDocteur || isStaff) && <button*/}
                                    {/*    className="btn btn-success">*/}
                                    {/*    <Link to={`/Dossierpatient/${dossier.numSecu}`}> Edit </Link>*/}
                                    {/*</button>}*/}
                                    {(isDocteur || isStaff) &&
                                       <div className="btn">
                                            <Link to={`/Dossierpatient/${dossier.numSecu}`}> <FontAwesomeIcon icon={faPen} />
                                            </Link>
                                    </div>
                                    }
                                </td>
                                <td>
                                    {/*{isDocteur && <button*/}
                                    {/*    className="btn btn-danger">*/}
                                    {/*    Delete*/}
                                    {/*    <FontAwesomeIcon icon={faTrash} onClick={() => deleteDossier(dossier.id)}/>*/}
                                    {/*</button>}*/}
                                    {isDocteur && 
                                        <div className="btn">
                                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteDossier(dossier.id)} />
                                        </div>
                                     }
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}