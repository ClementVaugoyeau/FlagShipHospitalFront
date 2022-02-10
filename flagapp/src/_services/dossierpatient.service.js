import { apiUrl } from '../Environnements';
import { authHeader } from '../_helpers';

export const dossierPatientService = {
    create,
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
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('dossier', JSON.stringify(dossier));

            return dossier;
        });
}

//function logout() {
//    // remove user from local storage to log user out
//    localStorage.removeItem('user');
//}

//function getAll() {
//    const requestOptions = {
//        method: 'GET',
//        headers: authHeader()
//    };

//    return fetch(`${apiUrl}/Users`, requestOptions).then(handleResponse);
//}

//function getById(id) {
//    const requestOptions = {
//        method: 'GET',
//        headers: authHeader()
//    };

//    return fetch(`${apiUrl}/Users/${id}`, requestOptions).then(handleResponse);
//}

//function register(user) {
//    const requestOptions = {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(user)
//    };

//    return fetch(`${apiUrl}/Users`, requestOptions).then(handleResponse);
//}

//function update(user) {
//    const requestOptions = {
//        method: 'PUT',
//        headers: { ...authHeader(), 'Content-Type': 'application/json' },
//        body: JSON.stringify(user)
//    };

//    return fetch(`${apiUrl}/Users/${user.id}`, requestOptions).then(handleResponse);;
//}

//// prefixed function name with underscore because delete is a reserved word in javascript
//function _delete(id) {
//    const requestOptions = {
//        method: 'DELETE',
//        headers: authHeader()
//    };

//    return fetch(`${apiUrl}/Users/${id}`, requestOptions).then(handleResponse);
//}

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