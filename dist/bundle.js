(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MySlider"] = factory();
	else
		root["MySlider"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model/SliderModel.ts":
/*!**********************************!*\
  !*** ./src/model/SliderModel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderModel: () => (/* binding */ SliderModel)
/* harmony export */ });
class SliderModel {
    constructor({ min, max, step, values, }) {
        this.min = min;
        this.max = max;
        this.step = step;
        this.values = values;
    }
    getValues() {
        return this.values;
    }
    setValues(values) {
        this.values = values;
    }
    getStep() {
        return this.step;
    }
    getRange() {
        return [this.min, this.max];
    }
}


/***/ }),

/***/ "./src/presenter/SliderPresenter.ts":
/*!******************************************!*\
  !*** ./src/presenter/SliderPresenter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderPresenter: () => (/* binding */ SliderPresenter)
/* harmony export */ });
class SliderPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }
    init() {
        const [min, max] = this.model.getRange();
        const value = this.model.getValues()[0];
        const percentage = ((value - min) / (max - min)) * 100;
        this.view.updateHandlePosition(percentage);
    }
}


/***/ }),

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
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_SliderPresenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/SliderPresenter */ "./src/presenter/SliderPresenter.ts");
/* harmony import */ var _model_SliderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/SliderModel */ "./src/model/SliderModel.ts");
/* harmony import */ var _view_SliderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/SliderView */ "./src/view/SliderView.ts");



(function ($) {
    $.fn.mySlider = function (options) {
        return this.each(function () {
            const root = this;
            const model = new _model_SliderModel__WEBPACK_IMPORTED_MODULE_1__.SliderModel(options);
            const view = new _view_SliderView__WEBPACK_IMPORTED_MODULE_2__.SliderView(root);
            new _presenter_SliderPresenter__WEBPACK_IMPORTED_MODULE_0__.SliderPresenter(model, view);
        });
    };
})(jQuery);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map