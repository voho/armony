import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getAllCommonChords} from "../common/matching";
import {KeyedScaleChart} from "./KeyedScaleChart";

type Props = {
    scale1: KeyedScale,
    scale2: KeyedScale
}

export const KeyedScalesChartWithCommonChords: React.FC<Props> = (props) => {
    const chords = getAllCommonChords(props.scale1, props.scale2);

    if (!chords || chords.length < 1) {
        return (
            <div className="alert alert-secondary" role="alert">
                It is possible that these scales have no chords in common.
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
