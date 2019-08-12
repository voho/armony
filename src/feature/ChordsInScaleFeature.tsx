import React from "react";
import {Scale} from "../common/elements";
import {C} from "../common/pitch";
import {MAJOR} from "../common/chords";
import {ScaleSelector} from "../components/ScaleSelector";
import {KeyedScaleChartWithChords} from "../components/KeyedScaleChartWithChords";

interface ChordsInScaleFeatureState {
    pitch: number,
    scale: Scale
}

export default class ChordsInScaleFeature extends React.Component<{}, ChordsInScaleFeatureState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pitch: C,
            scale: MAJOR
        };
    }

    render() {
        return (
            <div className="App">
                <h2>Chords in Scale</h2>

                <h3>Select Scale</h3>

                <ScaleSelector onKeyChange={(pitch) => {
                    this.setState({pitch: pitch});
                }}
                               onScaleChange={(scale) => {
                                   this.setState({scale: scale});
                               }}/>

                <h3>Chords in selected scale</h3>

                <KeyedScaleChartWithChords scale={this.state.scale.withKey(this.state.pitch)}/>
            </div>
        );
    }
};