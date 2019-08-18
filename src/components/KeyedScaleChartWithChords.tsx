import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getAllMatchingChords} from "../common/matching";
import {KeyedScaleChart} from "./KeyedScaleChart";

export interface KeyedScaleChartWithChordsProps {
    scale: KeyedScale
}

export const KeyedScaleChartWithChords: React.FC<KeyedScaleChartWithChordsProps> = (props) => {
    return (
        <div>
            <div className="row">
                {getAllMatchingChords(props.scale)
                    .map(scale => {
                        return (
                            <div className="col-3">
                                <KeyedScaleChart scale={scale}/>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};