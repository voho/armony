import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ChordsInScaleFeature from "./feature/ChordsInScaleFeature";
import CommonChordsForScales from "./feature/CommonChordsForScales";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Armony</h1>
                </header>
                <menu>
                    <ul>
                        <li><a href="/scale-to-chords">Scale to chords</a></li>
                        <li><a href="/common-chords">Common Chords</a></li>
                    </ul>
                </menu>
                <section>
                    <BrowserRouter>
                        <Route path="/scale-to-chords" component={ChordsInScaleFeature}/>
                        <Route path="/common-chords" component={CommonChordsForScales}/>
                    </BrowserRouter>
                </section>
            </div>
        );
    }
};