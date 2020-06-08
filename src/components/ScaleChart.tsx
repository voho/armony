import * as React from "react";
import {useState} from "react";
import {KeyedScale} from "../common/elements";
import {getPitch, isBlack} from "../common/pitch";
import {play} from "../common/player";

type Props = {
    scale: KeyedScale
}

export const ScaleChart: React.FC<Props> = (props) => {
    const [playing, setPlaying] = useState(false);

    function playScale() {
        setPlaying(true);
        play(props.scale);
        setTimeout(() => setPlaying(false), 200);
    }

    return (
        <div
            className={"chord " + (props.scale.getScale().getType() === "secondary" ? " " : " secondary") + (playing ? " playing" : " ")}>
            <div className="row">
                <div className="title">
                    {getPitch(props.scale.getRoot())}
                    {" "}
                    <small>{props.scale.getScale().getName()}</small>
                </div>
                <div className="play">
                    <button disabled={playing} onClick={() => playScale()}>
                        <small>&#9654;</small>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="pitches">
                    {props.scale.generate().map((pitch) => {
                        const classes = isBlack(pitch) ? "badge badge-dark mr-1 pt-3" : "badge badge-secondary mr-1 pt-3";
                        return (<span key={pitch} className={classes}>{getPitch(pitch)}</span>);
                    })}
                </div>
            </div>
        </div>
    );
};
