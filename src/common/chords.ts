import {Scale} from "./elements";

export const MAJOR = new Scale("Major", [4, 3]);
export const MAJOR_6TH = new Scale("Major 6th", [4, 3, 2]);
export const MAJOR_7TH = new Scale("Major 7th", [4, 3, 4]);
export const DOMINANT_7TH = new Scale("Dominant 7th", [4, 3, 3]);
export const MINOR = new Scale("Minor", [3, 4]);
export const MINOR_6TH = new Scale("Minor 6th", [3, 4, 2]);
export const MINOR_7TH = new Scale("Minor 7th", [3, 4, 3]);
export const DIMINISHED = new Scale("Diminished", [3, 3]);
export const DIMINISHED_7TH = new Scale("Diminished 7th", [3, 3, 3]);
export const AUGMENTED = new Scale("Augmented", [4, 4]);
export const AUGMENTED_7TH = new Scale("Augmented 7th", [4, 4, 2]);
export const SUSTAIN_4 = new Scale("Suspended 4th", [5, 2]);
export const SUSTAIN_2 = new Scale("Suspended 2nd", [2, 5]);
export const SUSTAIN_7TH_4 = new Scale("Suspended 7th 4th", [5, 2, 2]);
export const SUSTAIN_7TH_2 = new Scale("Suspended 7th 2nd", [2, 5, 2]);
export const MAJOR_9TH = new Scale("Major 9th", [4, 3, 4, 3]);
export const MINOR_9TH = new Scale("Minor 9th", [4, 3, 4, 3]);

export const ALL_CHORDS = [
    MAJOR, MAJOR_6TH, MAJOR_7TH,
    MINOR, MINOR_6TH, MINOR_7TH,
    DIMINISHED, DIMINISHED_7TH, AUGMENTED, AUGMENTED_7TH,
    SUSTAIN_4, SUSTAIN_2, SUSTAIN_7TH_2, SUSTAIN_7TH_2, DOMINANT_7TH,
    MAJOR_9TH, MINOR_9TH,
];