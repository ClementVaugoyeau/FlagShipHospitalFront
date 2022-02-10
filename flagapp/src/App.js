import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LoginPage } from './LoginPage';
import  CreateUser from './CreateUser/CreateUser';
import  CreatePatient  from './CreatePatient/CreatePatient';
import NavBar from './_components/NavBar/NavBar';
import { history } from './_helpers';
import { alertActions } from './_actions';
import { useNavigate } from "react-router-dom";

function App() {

    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        history.listen((location, action) => {
            nav(location["location"]["pathname"]);
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div>
           <NavBar />
            {/* <div className="jumbotron">
                <div className=""> */}
                    <div className="d-flex justify-content-center">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Routes history={history}>
                            <Route exact path="/login" element={<LoginPage />} />
                            <Route exact path='/' element={<LoginPage />} />
                            <Route exact path='/CreateUser' element={<CreateUser />} />
                            <Route exact path='/createPatient' element={<CreatePatient />} />
                        </Routes>
                    </div>
                {/* </div>
            </div> */}
        </div>
    );
}

export default App ;