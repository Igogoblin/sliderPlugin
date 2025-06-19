export declare class SliderModel {
    private min;
    private max;
    private step;
    private values;
    constructor({ min, max, step, values, }: {
        min: number;
        max: number;
        step: number;
        values: number[];
    });
    getValues(): number[];
    setValues(values: number[]): void;
    getStep(): number;
    getRange(): number[];
}
