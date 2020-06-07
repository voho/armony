import {ALL_CHORDS} from "./chords";
import {KeyedScale} from "./elements";
import {NUM_PITCHES, Pitch} from "./pitch";

function containsAllPitches(scalePitches: Pitch[], chordPitches: Pitch[]) {
    const scalePitchesNormalized = scalePitches.map(a => a % NUM_PITCHES);
    const chordPitchesNormalized = chordPitches.map(a => a % NUM_PITCHES);
    const chordPitchesNotInScale = chordPitchesNormalized.filter(a => !scalePitchesNormalized.includes(a));
    return chordPitchesNotInScale.length === 0;
}

export function getAllMatchingChords(scale: KeyedScale): KeyedScale[] {
    const result: KeyedScale[] = [];
    for (let root = 0; root < NUM_PITCHES; root++) {
        ALL_CHORDS.forEach(chord => {
            const scalePitches = scale.generate();
            let keyedChord = chord.withKey(root);
            const chordPitches = keyedChord.generate();

            if (containsAllPitches(scalePitches, chordPitches)) {
                result.push(keyedChord);
            }
        });
    }
    sort(result);
    return result;
}

export function getAllCommonChords(scale1: KeyedScale, scale2: KeyedScale): KeyedScale[] {
    const result: KeyedScale[] = [];
    for (let root = 0; root < NUM_PITCHES; root++) {
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
    sort(result);
    return result;
}

export function getAllMatchingChordsWithPitches(pitches: number[]): KeyedScale[] {
    const result: KeyedScale[] = [];
    for (let root = 0; root < NUM_PITCHES; root++) {
        ALL_CHORDS.forEach(chord => {
            let keyedChord = chord.withKey(root);
            const chordPitches = keyedChord.generate();

            if (containsAllPitches(chordPitches, pitches)) {
                result.push(keyedChord);
            }
        });
    }
    sort(result);
    return result;
}

function sort(result: KeyedScale[]) {
    result.sort((a: KeyedScale, b: KeyedScale) => {
        const t1 = a.getScale().getSize();
        const t2 = b.getScale().getSize();
        if (t1 < t2) {
            return 1;
        } else if (t2 < t1) {
            return -1;
        } else {
            const r1 = a.getRoot();
            const r2 = b.getRoot();
            if (r1 < r2) {
                return -1;
            } else if (r2 < r1) {
                return 1;
            } else {
                return a.getName() < b.getName() ? -1 : a.getName() > b.getName() ? 1 : 0;
            }
        }
    });
}
