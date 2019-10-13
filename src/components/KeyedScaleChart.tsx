import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getPitch, isBlack} from "../common/pitch";
import {play} from "../common/player";

type Props = {
    scale: KeyedScale
}

export const KeyedScaleChart: React.FC<Props> = (props) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-10 p-1">
                        <b>{getPitch(props.scale.getRoot())}</b>
                        {" "}
                        <small>{props.scale.getScale().getName()}</small>
                    </div>
                    <div className="col-2 p-1 text-right">
                        <button className="btn btn-sm" onClick={() => play(props.scale)}>
                            <small>&#9654;</small>
                        </button>
                    </div>
                    <div className="col-12 p-1">
                        {props.scale.generate().map((pitch) => {
                            const classes = isBlack(pitch) ? "badge badge-dark mr-1 pt-3" : "badge badge-secondary mr-1 pt-3";
                            return (<span key={pitch} className={classes}>{getPitch(pitch)}</span>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};