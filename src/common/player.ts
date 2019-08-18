import {KeyedScale} from "./elements";
import {getPitchWithOctave} from "./pitch";
import Tone from "tone";

var synth = new Tone.PolySynth(6, Tone.FMSynth).toMaster();

function playAsChord(scale: KeyedScale) {
    playAsHuman(scale, 0.01);
}

function playAsScale(scale: KeyedScale) {
    playAsHuman(scale, 0.1);
}

function playAsHuman(scale: KeyedScale, time: number) {
    Tone.Transport.stop(0);
    const pitches = scale.generate();

    for (let i = 0; i < pitches.length; i++) {
        const is = i * time;
        const ie = is + time;
        const name = getPitchWithOctave(pitches[i], 4);
        synth.triggerAttack([name], "+" + is);
        synth.triggerRelease([name], "+" + ie);
    }

    Tone.Transport.start(0);
}

export function play(scale: KeyedScale) {
    const pitches = scale.generate();
    if (pitches.length <= 4) {
        playAsChord(scale);
    } else {
        playAsScale(scale);
    }
}