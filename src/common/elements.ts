import {getPitch} from "./pitch";

export class Scale {
    private readonly name: string;
    private readonly steps: number[];

    constructor(name: string, steps: number[]) {
        this.name = name;
        this.steps = steps;
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.steps.length + 1;
    }

    withKey(root: number): KeyedScale {
        return new KeyedScale(this, root);
    }

    generate(root: number): number[] {
        const result = [root];
        let temp = root;

        for (let step of this.steps) {
            temp = temp + step;
            result.push(temp);
        }

        return result;
    }
}

export class KeyedScale {
    private readonly scale: Scale;
    private readonly root: number;

    constructor(scale: Scale, root: number) {
        this.scale = scale;
        this.root = root;
    }

    getName(): string {
        return `${getPitch(this.root)} ${this.scale.getName()}`;
    }

    getRoot(): number {
        return this.root;
    }

    getScale(): Scale {
        return this.scale;
    }

    generate(): number[] {
        return this.scale.generate(this.root);
    }

    transpose(delta: number): KeyedScale {
        return new KeyedScale(this.scale, this.root + delta);
    }

    up(): KeyedScale {
        return this.transpose(1);
    }

    down(): KeyedScale {
        return this.transpose(-1);
    }
}