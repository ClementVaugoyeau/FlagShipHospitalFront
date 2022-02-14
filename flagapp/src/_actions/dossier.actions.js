import { dossierConstants } from '../_constants';
import { dossierPatientService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const dossierActions = {
    create,
    update
};

function create(dossier) {
    return dispatch => {
        dispatch(request(dossier));

        dossierPatientService.create(dossier)
            .then(
                dossier => {
                    dispatch(success(dossier));
                    dispatch(alertActions.success('Dossier cree'));
                    /*setTimeout(dispatch(alertActions.clear(),1000));*/
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(dossier) { return { type: dossierConstants.CREATE_REQUEST } }
    function success(user) { return { type: dossierConstants.CREATE_SUCCESS, dossier } }
    function failure(error) { return { type: dossierConstants.CREATEL_FAILURE, error } }
}

function update(dossier) {
    return dispatch => {
        dispatch(request(dossier));

        dossierPatientService.update(dossier)
            .then(
                dossier => {
                    dispatch(success(dossier));
                    dispatch(alertActions.success('Dossier modifie'));
                    /*const t = setTimeout(dispatch(alertActions.clear()), 1000);*/
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(dossier) { return { type: dossierConstants.UPDATE_REQUEST } }
    function success(user) { return { type: dossierConstants.UPDATE_SUCCESS, dossier } }
    function failure(error) { return { type: dossierConstants.UPDATE_FAILURE, error } }
}