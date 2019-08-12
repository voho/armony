import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getAllCommonChords} from "../common/matching";
import {KeyedScaleChart} from "./KeyedScaleChart";

export interface KeyedScalesChartWithCommonChordsProps {
    scale1: KeyedScale,
    scale2: KeyedScale
}

export const KeyedScalesChartWithCommonChords: React.FC<KeyedScalesChartWithCommonChordsProps> = (props) => {
    return (
        <div>
            <KeyedScaleChart scale={props.scale1}/>
            {getAllCommonChords(props.scale1, props.scale2)
                .map(scale => {
                    return (
                        <KeyedScaleChart scale={scale}/>
                    );
                })}
        </div>
    );
};