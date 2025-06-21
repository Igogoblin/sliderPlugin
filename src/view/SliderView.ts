export class SliderView {
  private root: HTMLElement;
  constructor(root: HTMLElement) {
    this.root = root;
    this.render();
    this.registerEvens();
    // this.updateHandlePosition(0); // Initialize handle position
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
  registerEvens(): void {
    const handle = this.root.querySelector(".slider-handle") as HTMLElement;
    const track = this.root.querySelector(".slider-track") as HTMLElement;
    handle.addEventListener("mousedown", (event) => {
      const onMouseMove = (e: MouseEvent) => {
        const rect = track.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
        this.updateHandlePosition(percentage * 100);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
    track.addEventListener("click", (event) => {
      const rect = track.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
      this.updateHandlePosition(percentage * 100);
    });
  }
}
