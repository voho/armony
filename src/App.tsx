import React from "react";
import {BrowserRouter, NavLink, Redirect, Route} from "react-router-dom";
import {CommonChordsForScales} from "./feature/CommonChordsForScales";
import {ChordsInScaleFeature} from "./feature/ChordsInScaleFeature";

export const App: React.FC = () => {
    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Armony</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/scale-to-chords">Scale to Chords</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/common-chords">Common Chords</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/scale-to-chords" component={ChordsInScaleFeature}/>
                    <Route exact path="/common-chords" component={CommonChordsForScales}/>
                    <Redirect to="/scale-to-chords"/>
                </BrowserRouter>
            </div>
        </div>
    );
};