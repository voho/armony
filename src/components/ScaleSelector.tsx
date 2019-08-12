import React from "react";
import {Button} from "reactstrap";
import {Scale} from "../common/elements";
import {getPitch} from "../common/pitch";
import {ALL_SCALES} from "../common/scales";

export interface ScaleSelectorProps {
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

    render() {
        const pitches: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        return (
            <div>
                <p>
                    Select key:
                    {pitches.map(pitch => {
                        return <Button className="btn btn-default"
                                       onClick={this.handleOnKeyClick.bind(this, pitch)}>{getPitch(pitch)}</Button>;
                    })}
                </p>
                <p>
                    Select scale:
                    {ALL_SCALES.map(scale => {
                        return <Button className="btn btn-default"
                                       onClick={this.handleOnScaleClick.bind(this, scale)}>{scale.getName()}</Button>;
                    })}
                </p>
            </div>
        );
    }
}