import * as React from "react";
import {KeyedScale} from "../common/elements";
import {getAllMatchingChords} from "../common/matching";
import {KeyedScaleChart} from "./KeyedScaleChart";

type Props = {
    scale: KeyedScale
}

export const KeyedScaleChartWithChords: React.FC<Props> = (props) => {
    return (
        <div>
            <div className="row">
                {getAllMatchingChords(props.scale)
                    .map(scale => {
                        return (
                            <div key={scale.getName()} className="col-3">
                                <KeyedScaleChart scale={scale}/>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};