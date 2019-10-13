import React from "react";
import {Scale} from "../common/elements";
import {getPitch} from "../common/pitch";
import {ALL_SCALES} from "../common/scales";
import {KeyedScaleChart} from "./KeyedScaleChart";

export interface ScaleSelectorProps {
    selectedKey?: number,
    selectedScale?: Scale,
    onKeyChange: (selectedKey: number) => void
    onScaleChange: (selectedScale: Scale) => void
}

export class ScaleSelector extends React.Component<ScaleSelectorProps> {
    handleOnKeyClick(index: number) {
        this.props.onKeyChange(index);
    }

    handleOnScaleClick(scale: Scale) {
        this.props.onScaleChange(scale);
    }

    private isPitchSelected(pitch: number) {
        if (this.props.selectedKey === undefined) {
            return false;
        }
        return this.props.selectedKey === pitch;
    }

    private isScaleSelected(scale: Scale) {
        if (this.props.selectedScale === undefined) {
            return false;
        }
        return scale.getName() === this.props.selectedScale!.getName();
    }

    render() {
        const pitches: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        return (
            <div>
                <div className="row align-items-start justify-content-start">
                    <div className="col-auto">
                        <p className="btn-group-sm">
                            {pitches.map(pitch => {
                                const classes1 = this.isPitchSelected(pitch) ? "active btn btn-secondary btn-sm m-1" : "btn btn-secondary btn-sm m-1";
                                return <button key={pitch}
                                               className={classes1}
                                               onClick={this.handleOnKeyClick.bind(this, pitch)}>{getPitch(pitch)}</button>;
                            })}
                        </p>
                    </div>
                </div>
                <div className="row align-items-start justify-content-start">
                    <div className="col-auto">
                        <p className="btn-group-sm">
                            {ALL_SCALES.map(scale => {
                                const classes2 = this.isScaleSelected(scale) ? "active btn btn-primary btn-sm m-1" : "btn btn-primary btn-sm m-1";
                                return <button key={scale.getName()}
                                               className={classes2}
                                               onClick={this.handleOnScaleClick.bind(this, scale)}>{scale.getName()}</button>;
                            })}
                        </p>
                    </div>
                </div>
                <div className="row align-items-start justify-content-start">
                    <div className="col-auto">
                        {this.props.selectedScale !== undefined && this.props.selectedKey !== undefined && <KeyedScaleChart scale={this.props.selectedScale!.withKey(this.props.selectedKey!)}/>}
                    </div>
                </div>
            </div>
        );
    }
}