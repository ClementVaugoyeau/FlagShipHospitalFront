import {apiUrl, apiUrlGetPatientByID} from '../Environnements';
import { authHeader } from '../_helpers';

export const PatientService = {
   
    getById,
    getByName,
  
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Dossierpatient/${id}`, requestOptions).then(handleResponse);
}

function getByName(nom) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Dossierpatient/nom/${nom}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                /*location.reload(true);*/
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}