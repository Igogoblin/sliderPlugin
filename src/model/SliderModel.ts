export class SliderModel {
  private min: number;
  private max: number;
  private step: number;
  private values?: number[];
  private value?: number;

  constructor({
    min,
    max,
    step,
    values,
    value,
  }: {
    min: number;
    max: number;
    step: number;
    values?: number[];
    value?: number;
  }) {
    this.min = min;
    this.max = max;
    this.step = step;
    this.values = values ?? (value !== undefined ? [value] : [min]);
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
