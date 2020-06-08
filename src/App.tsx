import "normalize.css";
import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import "./App.css";
import {Header} from "./components/Header";
import {ChordsByKeysFeature} from "./feature/ChordsByKeysFeature";
import {ChordsInScaleFeature} from "./feature/ChordsInScaleFeature";
import {CommonChordsForScales} from "./feature/CommonChordsForScales";

export const App: React.FC = () => {
    return (
        <div className="app">
            <BrowserRouter basename="/armony">
                <div className="header">
                    <Header/>
                </div>
                <div className="container">
                    <Switch>
                        <Route exact path="/scale-to-chords" component={ChordsInScaleFeature}/>
                        <Route exact path="/notes-to-chords" component={ChordsByKeysFeature}/>
                        <Route exact path="/common-chords" component={CommonChordsForScales}/>
                        <Redirect to="/scale-to-chords"/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};
