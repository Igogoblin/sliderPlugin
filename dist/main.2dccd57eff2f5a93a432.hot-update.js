"use strict";
self["webpackHotUpdateMySlider"]("main",{

/***/ "./src/view/SliderView.ts":
/*!********************************!*\
  !*** ./src/view/SliderView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderView: () => (/* binding */ SliderView)
/* harmony export */ });
class SliderView {
    constructor(root) {
        this.root = root;
        this.render();
        this.registerEvens();
        // this.updateHandlePosition(0); // Initialize handle position
    }
    render() {
        this.root.innerHTML = `
         <div class="slider-track">
        <div class="slider-progress"></div>
        <div class="slider-handle" tabindex="0"></div>
      </div>
        `;
    }
    updateHandlePosition(position) {
        const handle = this.root.querySelector(".slider-handle");
        if (handle) {
            handle.style.left = `${position}%`;
        }
    }
    registerEvens() {
        const handle = this.root.querySelector(".slider-handle");
        const track = this.root.querySelector(".slider-track");
        handle.addEventListener("mousedown", (event) => {
            const onMouseMove = (e) => {
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d16e8d4004145b44475d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2dccd57eff2f5a93a432.hot-update.js.map