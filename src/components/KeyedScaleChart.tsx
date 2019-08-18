import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getPitch, isBlack} from "../common/pitch";
import {play} from "../common/player";

export interface KeyedScaleChartProps {
    scale: KeyedScale
}

export const KeyedScaleChart: React.FC<KeyedScaleChartProps> = (props) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <h6>{getPitch(props.scale.getRoot())} <span className="badge badge-info">{props.scale.getScale().getName()}</span></h6>
            </div>
            <div className="card-body">
                {props.scale.generate().map((pitch) => {
                    const classes = isBlack(pitch) ? "badge badge-dark mr-1" : "badge badge-light mr-1";
                    return (<span className={classes}>{getPitch(pitch)}</span>);
                })}
            </div>
            <div className="card-footer">
                <a href="#" onClick={() => play(props.scale)}>
                    <small>Play</small>
                </a>
            </div>
        </div>
    );
};