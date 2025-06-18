import { SliderModel } from "../model/SliderModel";
import { SliderView } from "../view/SliderView";

export class SliderPresenter {
  constructor(private model: SliderModel, private view: SliderView) {
    this.init();
  }
  private init(): void {
    const [min, max] = this.model.getRange();
    const value = this.model.getValues()[0];
    const percentage = ((value - min) / (max - min)) * 100;
    this.view.updateHandlePosition(percentage);
  }
}
