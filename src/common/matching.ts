import {ALL_CHORDS} from "./chords";
import {KeyedScale} from "./elements";

function containsAllPitches(scalePitches: number[], chordPitches: number[]) {
    for (let i = 0; i < chordPitches.length; i++) {
        if (!scalePitches.includes(chordPitches[i] % 12)) {
            return false;
        }
    }
    return true;
}

export function getAllMatchingChords(scale: KeyedScale): KeyedScale[] {
    const result: KeyedScale[] = [];
    for (let root = 0; root < 12; root++) {
        ALL_CHORDS.forEach(chord => {
            const scalePitches = scale.generate();
            let keyedChord = chord.withKey(root);
            const chordPitches = keyedChord.generate();

            if (containsAllPitches(scalePitches, chordPitches)) {
                result.push(keyedChord);
            }
        });
    }
    return result;
}

export function getAllCommonChords(scale1: KeyedScale, scale2: KeyedScale): KeyedScale[] {
    const result: KeyedScale[] = [];
    for (let root = 0; root < 12; root++) {
        ALL_CHORDS.forEach(chord => {
            const scale1Pitches = scale1.generate();
            const scale2Pitches = scale2.generate();
            let keyedChord = chord.withKey(root);
            const chordPitches = keyedChord.generate();

            if (containsAllPitches(scale1Pitches, chordPitches) && containsAllPitches(scale2Pitches, chordPitches)) {
                result.push(keyedChord);
            }
        });
    }
    return result;
}