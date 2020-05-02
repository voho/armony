import React from "react";
import {Scale} from "../common/elements";
import {getPitch, PITCHES} from "../common/pitch";
import {ALL_SCALES} from "../common/scales";
import {KeyedScaleChart} from "./KeyedScaleChart";

type Props = {
    selectedKey?: number,
    selectedScale?: Scale,
    onKeyChange: (selectedKey: number) => void
    onScaleChange: (selectedScale: Scale) => void
}

export const ScaleSelector: React.FC<Props> = (props) => {
    function isPitchSelected(pitch: number) {
        if (props.selectedKey === undefined) {
            return false;
        }
        return props.selectedKey === pitch;
    }

    function isScaleSelected(scale: Scale) {
        if (props.selectedScale === undefined) {
            return false;
        }
        return scale.getName() === props.selectedScale!.getName();
    }

    return (
        <section>
            <div className="row align-items-start justify-content-start">
                <div className="col-auto">
                    <p className="btn-group-sm">
                        {PITCHES.map(pitch => {
                            const classes1 = isPitchSelected(pitch) ? "active btn btn-secondary btn-sm m-1" : "btn btn-secondary btn-sm m-1";
                            return <button key={pitch}
                                           className={classes1}
                                           onClick={() => props.onKeyChange(pitch)}>{getPitch(pitch)}</button>;
                        })}
                    </p>
                </div>
            </div>
            <div className="row align-items-start justify-content-start">
                <div className="col-auto">
                    <p className="btn-group-sm">
                        {ALL_SCALES.map(scale => {
                            const classes2 = isScaleSelected(scale) ? "active btn btn-primary btn-sm m-1" : "btn btn-primary btn-sm m-1";
                            return <button key={scale.getName()}
                                           className={classes2}
                                           onClick={() => props.onScaleChange(scale)}>{scale.getName()}</button>;
                        })}
                    </p>
                </div>
            </div>
            <div className="row align-items-start justify-content-start">
                <div className="col-auto">
                    {props.selectedScale !== undefined && props.selectedKey !== undefined &&
                    <KeyedScaleChart scale={props.selectedScale!.withKey(props.selectedKey!)}/>}
                </div>
            </div>
        </section>
    );
};
