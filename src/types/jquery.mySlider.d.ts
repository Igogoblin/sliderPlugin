// import "jquery";

declare module "jquery" {
  interface JQuery {
    mySlider(options: any): JQuery;
  }
}
export {};
