import React from "react";
import {C, G} from "../common/pitch";
import {MAJOR} from "../common/chords";
import {ScaleSelector} from "../components/ScaleSelector";
import {Scale} from "../common/elements";
import {KeyedScalesChartWithCommonChords} from "../components/KeyedScalesChartWithCommonChords";

interface CommonChordsForScalesState {
    pitch1: number,
    scale1: Scale,
    pitch2: number,
    scale2: Scale
}

export default class CommonChordsForScales extends React.Component<{}, CommonChordsForScalesState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pitch1: C,
            scale1: MAJOR,
            pitch2: G,
            scale2: MAJOR
        };
    }

    render() {
        return (
            <div className="App">
                <h2>Common Chords</h2>

                <h3>Select first scale</h3>

                <ScaleSelector onKeyChange={(pitch) => {
                    this.setState({pitch1: pitch});
                }}
                               onScaleChange={(scale) => {
                                   this.setState({scale1: scale});
                               }}/>

                <h3>Select second scale</h3>

                <ScaleSelector onKeyChange={(pitch) => {
                    this.setState({pitch2: pitch});
                }}
                               onScaleChange={(scale) => {
                                   this.setState({scale2: scale});
                               }}/>


                <h3>Chords in both selected scale</h3>

                <KeyedScalesChartWithCommonChords
                    scale1={this.state.scale1.withKey(this.state.pitch1)}
                    scale2={this.state.scale2.withKey(this.state.pitch2)}/>
            </div>
        );
    }
};