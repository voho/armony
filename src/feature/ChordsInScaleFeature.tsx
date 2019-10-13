import React, {useState} from "react";
import {C} from "../common/pitch";
import {IONIAN_SCALE} from "../common/scales";
import {KeyedScaleChartWithChords} from "../components/KeyedScaleChartWithChords";
import {ScaleSelector} from "../components/ScaleSelector";

export const ChordsInScaleFeature = () => {
    const [pitch, setPitch] = useState(C);
    const [scale, setScale] = useState(IONIAN_SCALE);

    return (
        <section className="p-3">
            <div className="jumbotron">
                <p className="lead">Shows all chords in the selected scale.</p>

                <hr className="my-4"/>

                <h3>Select Scale</h3>

                <ScaleSelector
                    selectedKey={pitch}
                    selectedScale={scale}
                    onKeyChange={(pitch) => setPitch(pitch)}
                    onScaleChange={(scale) => setScale(scale)}/>
            </div>

            <h3>Chords in selected scale</h3>

            <KeyedScaleChartWithChords scale={scale.withKey(pitch)}/>
        </section>
    );
};