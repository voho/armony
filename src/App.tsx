import React from "react";
import {BrowserRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import {ChordsByKeysFeature} from "./feature/ChordsByKeysFeature";
import {ChordsInScaleFeature} from "./feature/ChordsInScaleFeature";
import {CommonChordsForScales} from "./feature/CommonChordsForScales";

export const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter basename="/armony">
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">🎹 Armony</NavLink>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/scale-to-chords">Scale to Chords</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/notes-to-chords">Notes to Chords</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/common-chords">Common Chords</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Switch>
                        <Route exact path="/scale-to-chords" component={ChordsInScaleFeature}/>
                        <Route exact path="/notes-to-chords" component={ChordsByKeysFeature}/>
                        <Route exact path="/common-chords" component={CommonChordsForScales}/>
                        <Route exact path="/" component={ChordsInScaleFeature}/>
                    </Switch>
                    <Redirect to="/"/>
                </div>
            </BrowserRouter>
        </div>
    );
};
