import Tone from "tone";
import {KeyedScale} from "./elements";
import {getPitchWithOctave} from "./pitch";

const synth = new Tone.PolySynth(6, Tone.FMSynth).toMaster();

function playAsChord(scale: KeyedScale) {
    playAsHuman(scale, 0.01);
}

function playAsScale(scale: KeyedScale) {
    playAsHuman(scale, 0.07);
}

function playAsHuman(scale: KeyedScale, timeFactor: number) {
    Tone.Transport.stop(0);
    Tone.Transport.start(0);
    const pitches = scale.generate();

    for (let i = 0; i < pitches.length; i++) {
        const iStartTime = i * timeFactor;
        const iEndTime = iStartTime + timeFactor;
        const name = getPitchWithOctave(pitches[i], 4);
        synth.triggerAttack([name], "+" + iStartTime);
        synth.triggerRelease([name], "+" + iEndTime);
    }
}

export function play(scale: KeyedScale) {
    const pitches = scale.generate();
    if (pitches.length <= 4) {
        playAsChord(scale);
    } else {
        playAsScale(scale);
    }
}