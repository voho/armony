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
            <div className="card-header row">
                <div className="col-auto">
                    <h6>{getPitch(props.scale.getRoot())} <span className="badge badge-info">{props.scale.getScale().getName()}</span></h6>
                </div>
                <div className="col text-right">
                    <button className="btn btn btn-outline-secondary btn-sm" onClick={() => play(props.scale)}>Play</button>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text">
                    {props.scale.generate().map((pitch) => {
                        const classes = isBlack(pitch) ? "badge badge-dark mr-1" : "badge badge-light mr-1";
                        return (<span className={classes}>{getPitch(pitch)}</span>);
                    })}
                </p>
            </div>
        </div>
    );
};