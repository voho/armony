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

export const ALL_CHORDS = [
    MAJOR, MAJOR_6TH, MAJOR_7TH, DOMINANT_7TH, MINOR, MINOR_6TH, MINOR_7TH, DIMINISHED, DIMINISHED_7TH, AUGMENTED, AUGMENTED_7TH
];