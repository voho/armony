import * as React from "react";
import {getAllMatchingChordsWithPitches} from "../common/matching";
import {KeyedScaleChart} from "./KeyedScaleChart";

type Props = {
    pitches: number[]
}

export const KeyedScalesChartWithSelectedNotes: React.FC<Props> = (props) => {
    const chords = getAllMatchingChordsWithPitches(props.pitches);

    if (!chords || chords.length < 1) {
        return (
            <div className="alert alert-secondary" role="alert">
                No results. Please make sure to select at least two notes.
            </div>
        );
    }

    return (
        <div>
            <div className="row">
                {chords.map(scale => {
                    return (
                        <div key={scale.getName()} className="col-3">
                            <KeyedScaleChart scale={scale}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
