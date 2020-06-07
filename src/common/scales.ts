import {Scale} from "./elements";

/**
 * Sources
 * =======
 *
 * https://lotusmusic.com/lm_exoticscales.html
 * https://guitarsix.com/blog/lessons/piano-chords/241/1/
 * https://en.wikipedia.org/wiki/Mode_(music)
 */

export const IONIAN_SCALE = new Scale("Ionian (major)", [2, 2, 1, 2, 2, 2, 1]);
export const PHRYGIAN_SCALE = new Scale("Phrygian", [1, 2, 2, 2, 1, 2, 2]);
export const DORIAN_SCALE = new Scale("Dorian", [2, 1, 2, 2, 2, 1, 2]);
export const LYDIAN_SCALE = new Scale("Lydian", [2, 2, 2, 1, 2, 2, 1]);
export const MIXOLYDIAN_SCALE = new Scale("Mixolydian", [2, 2, 1, 2, 2, 1, 2]);
export const AEOLIAN_SCALE = new Scale("Aeolian (minor)", [2, 1, 2, 2, 1, 2, 2]);
export const LOCRIAN_SCALE = new Scale("Locrian", [1, 2, 2, 1, 2, 2, 2]);

export const WHOLETONE_SCALE = new Scale("Wholetone", [2, 2, 2, 2, 2]);

export const HUNGARIAN = new Scale("Hungarian", [1, 3, 3, 1, 3, 1]);
export const GYPSY = new Scale("Gypsy", [1, 3, 1, 3, 1, 3, 1]);
export const BYZANTINE = new Scale("Byzantine", [2, 3, 1, 2, 1, 3, 1]);
export const HINDU = new Scale("Hindu", [2, 2, 1, 2, 1, 2, 2]);
export const ARABIAN = new Scale("Arabian", [2, 2, 1, 1, 2, 2, 2]);
export const ORIENTAL = new Scale("Oriental", [1, 3, 1, 1, 3, 1, 2]);
export const JAVANESE = new Scale("Javanese", [2, 2, 2, 1, 1, 2, 2]);
export const IN_SEN = new Scale("In Sen", [1, 2 + 2, 2, 2 + 1, 2]);
export const IWATO = new Scale("Iwato", [1, 2 + 2, 1, 2 + 2, 2]);
export const BALINESE = new Scale("Balinese", [1, 2, 2 + 2, 1, 2 + 2]);

export const CHROMATIC = new Scale("Chromatic (all)", [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

export const ALL_SCALES = [
    IONIAN_SCALE, PHRYGIAN_SCALE, DORIAN_SCALE, LYDIAN_SCALE, MIXOLYDIAN_SCALE, AEOLIAN_SCALE, LOCRIAN_SCALE,
    WHOLETONE_SCALE,
    HUNGARIAN, GYPSY, BYZANTINE, HINDU, ARABIAN, ORIENTAL, JAVANESE, IN_SEN, IWATO, BALINESE,
    CHROMATIC
];
