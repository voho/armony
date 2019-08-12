import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getPitch, isBlack} from "../common/pitch";

export interface KeyedScaleChartProps {
    scale: KeyedScale
}

export const KeyedScaleChart: React.FC<KeyedScaleChartProps> = (props) => {
    return (
        <div className="scale">
            <p>
                <strong className="key">{getPitch(props.scale.getRoot())}</strong>
                <span className="scale">{props.scale.getScale().getName()}</span>
                <span className="structure">{props.scale.generate().map((pitch) => {
                    const classes = isBlack(pitch) ? "pitch pitch-black" : "pitch";
                    return (<span className={classes}>{getPitch(pitch)}</span>);
                })}</span>
            </p>
        </div>
    );
};