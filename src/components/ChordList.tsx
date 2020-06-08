import * as React from "react";
import {KeyedScale} from "../common/elements";
import "./ChordList.css";
import {ScaleChart} from "./ScaleChart";

type Props = {
    chords: KeyedScale[]
}

export const ChordList: React.FC<Props> = (props) => {
    if (!props.chords || props.chords.length < 1) {
        return (
            <div className="alert alert-secondary" role="alert">
                Could not find any known chords for this scale.
            </div>
        );
    }

    return (
        <div className="chord-list">
            <div className="row">
                {props.chords.map(scale => {
                    return (
                        <div key={scale.getName()}>
                            <ScaleChart scale={scale}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
