import React, {useState} from "react";
import {getAllCommonChords} from "../common/matching";
import {C} from "../common/pitch";
import {DORIAN_SCALE, IONIAN_SCALE} from "../common/scales";
import {ChordList} from "../components/ChordList";
import {ScaleSelector} from "../components/ScaleSelector";

export const CommonChordsForScales: React.FC = () => {
    const [pitch1, setPitch1] = useState(C);
    const [pitch2, setPitch2] = useState(C);
    const [scale1, setScale1] = useState(IONIAN_SCALE);
    const [scale2, setScale2] = useState(DORIAN_SCALE);

    return (
        <section className="p-3">
            <div className="jumbotron">
                <p className="lead">Shows all chords that the two selected scales have in common.</p>

                <hr className="my-4"/>

                <h3>Select first scale</h3>

                <ScaleSelector
                    selectedKey={pitch1}
                    selectedScale={scale1}
                    onKeyChange={(pitch) => setPitch1(pitch)}
                    onScaleChange={(scale) => setScale1(scale)}/>

                <hr className="my-4"/>

                <h3>Select second scale</h3>

                <ScaleSelector
                    selectedKey={pitch2}
                    selectedScale={scale2}
                    onKeyChange={(pitch) => setPitch2(pitch)}
                    onScaleChange={(scale) => setScale2(scale)}/>
            </div>

            <h3>Chords in both selected scales</h3>

            <ChordList chords={getAllCommonChords(scale1.withKey(pitch1), scale2.withKey(pitch2))}/>
        </section>
    );
};
