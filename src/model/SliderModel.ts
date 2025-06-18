export class SliderModel {
  private min: number;
  private max: number;
  private step: number;
  private values: number[];

  constructor({
    min,
    max,
    step,
    values,
  }: {
    min: number;
    max: number;
    step: number;
    values: number[];
  }) {
    this.min = min;
    this.max = max;
    this.step = step;
    this.values = values;
  }

  getValues() {
    return this.values;
  }
  setValues(values: number[]) {
    this.values = values;
  }
  getStep(): number {
    return this.step;
  }
  getRange(): number[] {
    return [this.min, this.max];
  }
}
