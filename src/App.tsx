import React from "react";
import {BrowserRouter, Link, Redirect, Route} from "react-router-dom";
import {CommonChordsForScales} from "./feature/CommonChordsForScales";
import {ChordsInScaleFeature} from "./feature/ChordsInScaleFeature";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <BrowserRouter>
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <a className="navbar-brand" href="/">Armony</a>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/scale-to-chords">Scale to Chords</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/common-chords">Common Chords</Link>
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
    }
};