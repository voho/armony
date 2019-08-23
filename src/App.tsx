import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ChordsInScaleFeature from "./feature/ChordsInScaleFeature";
import CommonChordsForScales from "./feature/CommonChordsForScales";
import HomeFeature from "./feature/HomeFeature";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Armony</a>
                    </nav>
                    <BrowserRouter>
                        <Route exact path="/scale-to-chords" component={ChordsInScaleFeature}/>
                        <Route exact path="/common-chords" component={CommonChordsForScales}/>
                        <Route exact path="/" component={HomeFeature}/>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
};