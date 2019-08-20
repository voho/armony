import {Chord, Interval} from "./elements";

export const INTERVAL_MINOR_2 = new Interval("m2", [1]);
export const INTERVAL_MAJOR_2 = new Interval("M2", [2]);
export const INTERVAL_MINOR_3 = new Interval("m3", [3]);
export const INTERVAL_MAJOR_3 = new Interval("M3", [4]);
export const INTERVAL_PERFECT_4 = new Interval("4", [5]);
export const INTERVAL_TRITONE = new Interval("b5", [6]);
export const INTERVAL_PERFECT_5 = new Interval("5", [7]);
export const INTERVAL_MINOR_6 = new Interval("m6", [8]);
export const INTERVAL_MAJOR_6 = new Interval("M6", [9]);
export const INTERVAL_MINOR_7 = new Interval("m7", [10]);
export const INTERVAL_MAJOR_7 = new Interval("M7", [11]);

export const MAJOR = new Chord("Major", [4, 3]);
export const MAJOR_6TH = new Chord("Major 6th", [4, 3, 2]);
export const MAJOR_7TH = new Chord("Major 7th", [4, 3, 4]);
export const DOMINANT_7TH = new Chord("Dominant 7th", [4, 3, 3]);
export const MINOR = new Chord("Minor", [3, 4]);
export const MINOR_6TH = new Chord("Minor 6th", [3, 4, 2]);
export const MINOR_7TH = new Chord("Minor 7th", [3, 4, 3]);
export const DIMINISHED = new Chord("Diminished", [3, 3]);
export const DIMINISHED_7TH = new Chord("Diminished 7th", [3, 3, 3]);
export const AUGMENTED = new Chord("Augmented", [4, 4]);
export const AUGMENTED_7TH = new Chord("Augmented 7th", [4, 4, 2]);
export const SUSTAIN_4 = new Chord("Suspended 4th", [5, 2]);
export const SUSTAIN_2 = new Chord("Suspended 2nd", [2, 5]);
export const SUSTAIN_7TH_4 = new Chord("Suspended 7th 4th", [5, 2, 2]);
export const SUSTAIN_7TH_2 = new Chord("Suspended 7th 2nd", [2, 5, 2]);
export const MAJOR_9TH = new Chord("Major 9th", [4, 3, 4, 3]);
export const MINOR_9TH = new Chord("Minor 9th", [4, 3, 4, 3]);

export const ALL_CHORDS = [
    MAJOR, MAJOR_6TH, MAJOR_7TH, DOMINANT_7TH,
    MINOR, MINOR_6TH, MINOR_7TH,
    DIMINISHED, DIMINISHED_7TH, AUGMENTED, AUGMENTED_7TH,
    SUSTAIN_4, SUSTAIN_2, SUSTAIN_7TH_4, SUSTAIN_7TH_2,
    MAJOR_9TH, MINOR_9TH,
    INTERVAL_MINOR_2, INTERVAL_MAJOR_2,
    INTERVAL_MINOR_3, INTERVAL_MAJOR_3,
    INTERVAL_PERFECT_4, INTERVAL_TRITONE, INTERVAL_PERFECT_5,
    INTERVAL_MINOR_6, INTERVAL_MAJOR_6,
    INTERVAL_MINOR_7, INTERVAL_MAJOR_7
];