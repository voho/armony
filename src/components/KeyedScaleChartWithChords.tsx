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
            <KeyedScaleChart scale={props.scale}/>
            {getAllMatchingChords(props.scale)
                .map(scale => {
                    return (
                        <KeyedScaleChart scale={scale}/>
                    );
                })}
        </div>
    );
};