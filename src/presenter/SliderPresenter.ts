import { SliderModel } from "../model/SliderModel";
import { SliderView } from "../view/SliderView";

export class SliderPresenter {
  constructor(private model: SliderModel, private view: SliderView) {
    this.init();
  }
  private init(): void {
    const [min, max] = this.model.getRange();
    const values = this.model.getValues();
    const value = values && values.length > 0 ? values[0] : min;
    const percentage = ((value - min) / (max - min)) * 100;
    this.view.updateHandlePosition(percentage);
  }
}
