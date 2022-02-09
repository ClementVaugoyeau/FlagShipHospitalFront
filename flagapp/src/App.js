import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { LoginPage } from './LoginPage';
import NavBar from './_components/NavBar/NavBar';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    //useEffect(() => {
    //    history.listen((location, action) => {
    //        // clear alert on location change
    //        dispatch(alertActions.clear());
    //    });
    //}, []);

    return (
        <div>
           <NavBar />
            <div className="jumbotron">
                <div className="container">
                    <div className="col-md-8 offset-md-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Routes>
                            <Route exact path="/login" element={<LoginPage />} />
                            <Route exact path='/' element={<LoginPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App ;