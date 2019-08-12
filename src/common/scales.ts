import {Scale} from "./elements";

export const MAJOR_SCALE = new Scale("Major", [2, 2, 1, 2, 2, 2, 1]);
export const MINOR_SCALE = new Scale("Minor", [2, 1, 2, 2, 1, 2, 2]);
export const WHOLETONE_SCALE = new Scale("Wholetone", [2, 2, 2, 2, 2]);

export const ALL_SCALES = [
    MAJOR_SCALE, MINOR_SCALE, WHOLETONE_SCALE
];