/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/components/Toggle.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Toggle.js ***!
  \*******************************************/
/*! exports provided: Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Toggle\", function() { return Toggle; });\n// import $ from 'jquery';\nfunction Toggle() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-toggle';\n  var isOpen = false;\n  var openElement = null;\n  var OPEN_CLASS = 'is-open';\n  var elements = document.querySelectorAll(selector);\n\n  function stopPropagation(event) {\n    event.stopPropagation();\n  }\n\n  function handleClick(event) {\n    event.preventDefault();\n    event.stopPropagation();\n    var element = event.currentTarget;\n    var target = element.dataset.target;\n\n    if (target) {\n      var targetElement = document.querySelector(target);\n\n      if (isOpen) {\n        targetElement.classList.remove(OPEN_CLASS);\n        openElement = null;\n      } else {\n        targetElement.classList.add(OPEN_CLASS);\n        openElement = targetElement;\n      }\n\n      isOpen = !isOpen;\n    }\n  }\n\n  function init(element) {\n    // console.log(element);\n    element.addEventListener('click', handleClick);\n  }\n\n  elements.forEach(function (el) {\n    init(el);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ub2dnbGUuanM/OWExYSJdLCJuYW1lcyI6WyJUb2dnbGUiLCJzZWxlY3RvciIsImlzT3BlbiIsIm9wZW5FbGVtZW50IiwiT1BFTl9DTEFTUyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RvcFByb3BhZ2F0aW9uIiwiZXZlbnQiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidGFyZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvckVhY2giLCJlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsTUFBVCxHQUF5QztBQUFBLE1BQXpCQyxRQUF5Qix1RUFBZCxZQUFjO0FBQzlDLE1BQUlDLE1BQU0sR0FBRyxLQUFiO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLElBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCTixRQUExQixDQUFqQjs7QUFFQSxXQUFTTyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QkEsU0FBSyxDQUFDRCxlQUFOO0FBQ0Q7O0FBRUQsV0FBU0UsV0FBVCxDQUFxQkQsS0FBckIsRUFBNEI7QUFDMUJBLFNBQUssQ0FBQ0UsY0FBTjtBQUNBRixTQUFLLENBQUNELGVBQU47QUFFQSxRQUFNSSxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksYUFBdEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkQsTUFBL0I7O0FBRUEsUUFBSUEsTUFBSixFQUFZO0FBQ1YsVUFBTUUsYUFBYSxHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUJILE1BQXZCLENBQXRCOztBQUNBLFVBQUlaLE1BQUosRUFBWTtBQUNWYyxxQkFBYSxDQUFDRSxTQUFkLENBQXdCQyxNQUF4QixDQUErQmYsVUFBL0I7QUFDQUQsbUJBQVcsR0FBRyxJQUFkO0FBQ0QsT0FIRCxNQUdPO0FBQ0xhLHFCQUFhLENBQUNFLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCaEIsVUFBNUI7QUFDQUQsbUJBQVcsR0FBR2EsYUFBZDtBQUNEOztBQUNEZCxZQUFNLEdBQUcsQ0FBQ0EsTUFBVjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU21CLElBQVQsQ0FBY1QsT0FBZCxFQUF1QjtBQUNyQjtBQUNBQSxXQUFPLENBQUNVLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDWixXQUFsQztBQUNEOztBQUNETCxVQUFRLENBQUNrQixPQUFULENBQWlCLFVBQUNDLEVBQUQsRUFBUTtBQUN2QkgsUUFBSSxDQUFDRyxFQUFELENBQUo7QUFDRCxHQUZEO0FBR0QiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ub2dnbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZShzZWxlY3RvciA9ICcuanMtdG9nZ2xlJykge1xyXG4gIGxldCBpc09wZW4gPSBmYWxzZTtcclxuICBsZXQgb3BlbkVsZW1lbnQgPSBudWxsO1xyXG4gIGNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlbGVtZW50LmRhdGFzZXQudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShPUEVOX0NMQVNTKTtcclxuICAgICAgICBvcGVuRWxlbWVudCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKE9QRU5fQ0xBU1MpO1xyXG4gICAgICAgIG9wZW5FbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgICBpc09wZW4gPSAhaXNPcGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdChlbGVtZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgfVxyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBpbml0KGVsKTtcclxuICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/components/Toggle.js\n");

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Toggle */ \"./resources/js/components/Toggle.js\");\n\nObject(_components_Toggle__WEBPACK_IMPORTED_MODULE_0__[\"Toggle\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWFpbi5qcz9mMzJhIl0sIm5hbWVzIjpbIlRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBSUFBLGlFQUFNIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFRvZ2dsZVxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvVG9nZ2xlXCI7XHJcblxyXG5Ub2dnbGUoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ }),

/***/ "./resources/styles/main.scss":
/*!************************************!*\
  !*** ./resources/styles/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3R5bGVzL21haW4uc2Nzcz9mZmI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/styles/main.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/styles/main.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\xampp\htdocs\maxcrop\wp-content\themes\maxcrop\resources\js\main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! D:\xampp\htdocs\maxcrop\wp-content\themes\maxcrop\resources\styles\main.scss */"./resources/styles/main.scss");


/***/ })

/******/ });