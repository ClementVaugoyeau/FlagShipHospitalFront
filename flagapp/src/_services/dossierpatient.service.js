import { apiUrl } from '../Environnements';
import { authHeader } from '../_helpers';

export const dossierPatientService = {
    create,
    getById,
    getByNumSecu,
    getAll,
    _delete,
    update
};

function create(dossierPatient) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(dossierPatient)
    };

    return fetch(`${apiUrl}/Dossierpatient`, requestOptions)
        .then(handleResponse)
        .then(dossier => {
            localStorage.setItem('dossier', JSON.stringify(dossier));

            return dossier;
        });
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Dossierpatient/${id}`, requestOptions).then(handleResponse);
}

function getByNumSecu(numSecu) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Dossierpatient/numsecu/${numSecu}`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Dossierpatient`, requestOptions).then(handleResponse);
}

function update(dossier) {
    console.log(dossier)
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(dossier)
    };

    return fetch(`${apiUrl}/Dossierpatient`, requestOptions).then(handleResponse);;
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/Dossierpatient/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                /*logout();*/
                /*location.reload(true);*/
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}