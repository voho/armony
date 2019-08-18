import React from "react";
import {C, D} from "../common/pitch";
import {ScaleSelector} from "../components/ScaleSelector";
import {Scale} from "../common/elements";
import {KeyedScalesChartWithCommonChords} from "../components/KeyedScalesChartWithCommonChords";
import {MAJOR_SCALE, MINOR_SCALE} from "../common/scales";

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
            scale1: MAJOR_SCALE,
            pitch2: D,
            scale2: MINOR_SCALE
        };
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <p className="lead">Shows all chords that the two selected scales have in common.</p>

                    <hr className="my-4"/>

                    <h3>Select first scale</h3>

                    <ScaleSelector
                        selectedKey={this.state.pitch1}
                        selectedScale={this.state.scale1}
                        onKeyChange={(pitch) => this.setState({pitch1: pitch})}
                        onScaleChange={(scale) => this.setState({scale1: scale})}/>

                    <hr className="my-4"/>

                    <h3>Select second scale</h3>

                    <ScaleSelector
                        selectedKey={this.state.pitch2}
                        selectedScale={this.state.scale2}
                        onKeyChange={(pitch) => this.setState({pitch2: pitch})}
                        onScaleChange={(scale) => this.setState({scale2: scale})}/>
                </div>

                <h3>Chords in both selected scale</h3>

                <KeyedScalesChartWithCommonChords
                    scale1={this.state.scale1.withKey(this.state.pitch1)}
                    scale2={this.state.scale2.withKey(this.state.pitch2)}/>
            </div>
        );
    }
};