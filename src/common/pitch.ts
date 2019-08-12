export const C = 0;
export const CIS = 1;
export const D = 2;
export const DIS = 3;
export const E = 4;
export const F = 5;
export const FIS = 6;
export const G = 7;
export const GIS = 8;
export const A = 9;
export const AIS = 10;
export const B = 11;

export function getPitch(index: number): string {
    switch (index % 12) {
        case 0:
            return "C";
        case 1:
            return "C#";
        case 2:
            return "D";
        case 3:
            return "D#";
        case 4:
            return "E";
        case 5:
            return "F";
        case 6:
            return "F#";
        case 7:
            return "G";
        case 8:
            return "G#";
        case 9:
            return "A";
        case 10:
            return "A#";
        case 11:
            return "B";
        default:
            throw new Error("Invalid pitch");
    }
}

export function isBlack(index: number): boolean {
    return [1, 3, 6, 8, 10].includes(index % 12);
}