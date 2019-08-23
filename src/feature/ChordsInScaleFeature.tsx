import React from "react";
import {Scale} from "../common/elements";
import {C} from "../common/pitch";
import {IONIAN_SCALE} from "../common/scales";
import {KeyedScaleChartWithChords} from "../components/KeyedScaleChartWithChords";
import {ScaleSelector} from "../components/ScaleSelector";
import HomeFeature from "./HomeFeature";

interface ChordsInScaleFeatureState {
    pitch: number,
    scale: Scale
}

export default class ChordsInScaleFeature extends React.Component<{}, ChordsInScaleFeatureState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pitch: C,
            scale: IONIAN_SCALE
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

                <HomeFeature/>
            </div>
        );
    }
};