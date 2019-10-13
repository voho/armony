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

export function getPitchWithOctave(index: number, octave: number): string {
    const pitch = getPitch(index);
    const octaveFixed = octave + (index / 12);
    return pitch + octaveFixed;
}

export function getPitch(index: number): string {
    switch (index % 12) {
        case C:
            return "C";
        case CIS:
            return "C#";
        case D:
            return "D";
        case DIS:
            return "D#";
        case E:
            return "E";
        case F:
            return "F";
        case FIS:
            return "F#";
        case G:
            return "G";
        case GIS:
            return "G#";
        case A:
            return "A";
        case AIS:
            return "A#";
        case B:
            return "B";
        default:
            throw new Error("Invalid pitch");
    }
}

export function isBlack(index: number): boolean {
    return [CIS, DIS, FIS, GIS, AIS].includes(index % 12);
}