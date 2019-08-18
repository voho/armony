import React from "react";
import {Scale} from "../common/elements";
import {C} from "../common/pitch";
import {ScaleSelector} from "../components/ScaleSelector";
import {KeyedScaleChartWithChords} from "../components/KeyedScaleChartWithChords";
import {MAJOR_SCALE} from "../common/scales";

interface ChordsInScaleFeatureState {
    pitch: number,
    scale: Scale
}

export default class ChordsInScaleFeature extends React.Component<{}, ChordsInScaleFeatureState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pitch: C,
            scale: MAJOR_SCALE
        };
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <p className="lead">Shows all chords in the selected scale.</p>

                    <hr className="my-4"/>

                    <h3>Select Scale</h3>

                    <ScaleSelector
                        selectedKey={this.state.pitch}
                        selectedScale={this.state.scale}
                        onKeyChange={(pitch) => {
                            this.setState({pitch: pitch});
                        }}
                        onScaleChange={(scale) => {
                            this.setState({scale: scale});
                        }}/>

                </div>

                <h3>Chords in selected scale</h3>

                <KeyedScaleChartWithChords scale={this.state.scale.withKey(this.state.pitch)}/>
            </div>
        );
    }
};