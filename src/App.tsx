import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ChordsInScaleFeature from "./feature/ChordsInScaleFeature";
import CommonChordsForScales from "./feature/CommonChordsForScales";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Armony</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/scale-to-chords">Scale to chords</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/common-chords">Common Chords</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <BrowserRouter>
                        <Route path="/scale-to-chords" component={ChordsInScaleFeature}/>
                        <Route path="/common-chords" component={CommonChordsForScales}/>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
};