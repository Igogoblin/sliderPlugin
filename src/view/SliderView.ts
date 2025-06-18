export class SliderView {
  private root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
  }
  render(): void {
    this.root.innerHTML = `
         <div class="slider-track">
        <div class="slider-progress"></div>
        <div class="slider-handle" tabindex="0"></div>
      </div>
        `;
  }
  updateHandlePosition(position: number): void {
    const handle = this.root.querySelector(".slider-handle") as HTMLElement;
    if (handle) {
      handle.style.left = `${position}%`;
    }
  }
}
