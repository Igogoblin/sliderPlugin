import { SliderPresenter } from "./presenter/SliderPresenter";
import { SliderModel } from "./model/SliderModel";
import { SliderView } from "./view/SliderView";
import "./view/sliderView.css";

declare global {
  interface JQuery {
    mySlider(options: any): JQuery;
  }
}

(function ($) {
  $.fn.mySlider = function (options: any) {
    return this.each(function () {
      const root = this as HTMLElement;
      const model = new SliderModel(options);
      const view = new SliderView(root);
      new SliderPresenter(model, view);
    });
  };
})(jQuery);

$(function () {
  $("#slider-container").text("slider initialized");
});
$(function () {
  $("#slider-root").mySlider({
    min: 0,
    max: 100,
    step: 1,
    value: 50,
  });
});
