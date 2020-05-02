import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getAllMatchingChords} from "../common/matching";
import {KeyedScaleChart} from "./KeyedScaleChart";

type Props = {
    scale: KeyedScale
}

export const KeyedScaleChartWithChords: React.FC<Props> = (props) => {
    const chords = getAllMatchingChords(props.scale);

    if (!chords || chords.length < 1) {
        return (
            <div className="alert alert-secondary" role="alert">
                Could not find any known chords for this scale.
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
