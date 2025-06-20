import "./view/sliderView.css";
declare global {
    interface JQuery {
        mySlider(options: any): JQuery;
    }
}
