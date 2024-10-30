/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/weather-svgs sync \\.svg$":
/*!***********************************************************!*\
  !*** ./src/assets/weather-svgs/ sync nonrecursive \.svg$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": "./src/assets/weather-svgs/clear-day.svg",
	"./clear-night.svg": "./src/assets/weather-svgs/clear-night.svg",
	"./cloudy.svg": "./src/assets/weather-svgs/cloudy.svg",
	"./fog.svg": "./src/assets/weather-svgs/fog.svg",
	"./hail.svg": "./src/assets/weather-svgs/hail.svg",
	"./partly-cloudy-day.svg": "./src/assets/weather-svgs/partly-cloudy-day.svg",
	"./partly-cloudy-night.svg": "./src/assets/weather-svgs/partly-cloudy-night.svg",
	"./rain-snow-showers-day.svg": "./src/assets/weather-svgs/rain-snow-showers-day.svg",
	"./rain-snow-showers-night.svg": "./src/assets/weather-svgs/rain-snow-showers-night.svg",
	"./rain-snow.svg": "./src/assets/weather-svgs/rain-snow.svg",
	"./rain.svg": "./src/assets/weather-svgs/rain.svg",
	"./showers-day.svg": "./src/assets/weather-svgs/showers-day.svg",
	"./showers-night.svg": "./src/assets/weather-svgs/showers-night.svg",
	"./sleet.svg": "./src/assets/weather-svgs/sleet.svg",
	"./snow-showers-day.svg": "./src/assets/weather-svgs/snow-showers-day.svg",
	"./snow-showers-night.svg": "./src/assets/weather-svgs/snow-showers-night.svg",
	"./snow.svg": "./src/assets/weather-svgs/snow.svg",
	"./thunder-rain.svg": "./src/assets/weather-svgs/thunder-rain.svg",
	"./thunder-showers-day.svg": "./src/assets/weather-svgs/thunder-showers-day.svg",
	"./thunder-showers-night.svg": "./src/assets/weather-svgs/thunder-showers-night.svg",
	"./thunder.svg": "./src/assets/weather-svgs/thunder.svg",
	"./wind.svg": "./src/assets/weather-svgs/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/weather-svgs sync \\.svg$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/autocomplete */ \"./src/js/autocomplete.js\");\n/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/carousel */ \"./src/js/carousel.js\");\n/* harmony import */ var _js_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/weather */ \"./src/js/weather.js\");\n/* harmony import */ var _js_handleDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/handleDOM */ \"./src/js/handleDOM.js\");\n\r\n\r\n\r\n\r\n\r\n__webpack_require__(\"./src/assets/weather-svgs sync \\\\.svg$\");\r\n\r\nasync function defaultRequest() {\r\n  const weatherData = await (0,_js_weather__WEBPACK_IMPORTED_MODULE_2__.getWeather)(59.911491, 10.757933); // coordinates of Oslo, Norway.\r\n  _js_handleDOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].applyDataToDOM('Oslo, Norway', weatherData);\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', defaultRequest);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkI7QUFDSjtBQUNtQjtBQUNIO0FBQ3ZDO0FBQ0EsNkRBQXlEO0FBQ3pEO0FBQ0E7QUFDQSw0QkFBNEIsdURBQVUsd0JBQXdCO0FBQzlELEVBQUUscURBQVM7QUFDWDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9qcy9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgJy4vanMvY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9qcy93ZWF0aGVyJztcclxuaW1wb3J0IGhhbmRsZURPTSBmcm9tICcuL2pzL2hhbmRsZURPTSc7XHJcblxyXG5yZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL3dlYXRoZXItc3ZncycsIGZhbHNlLCAvXFwuc3ZnJC8pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdFJlcXVlc3QoKSB7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKDU5LjkxMTQ5MSwgMTAuNzU3OTMzKTsgLy8gY29vcmRpbmF0ZXMgb2YgT3NsbywgTm9yd2F5LlxyXG4gIGhhbmRsZURPTS5hcHBseURhdGFUb0RPTSgnT3NsbywgTm9yd2F5Jywgd2VhdGhlckRhdGEpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGVmYXVsdFJlcXVlc3QpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/autocomplete.js":
/*!********************************!*\
  !*** ./src/js/autocomplete.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autocompleteInput: () => (/* binding */ autocompleteInput),\n/* harmony export */   debounce: () => (/* binding */ debounce),\n/* harmony export */   findBtn: () => (/* binding */ findBtn)\n/* harmony export */ });\nconst autocompleteInput = document.querySelector('.autocomplete');\r\nconst findBtn = document.querySelector('.find-btn');\r\nconst autoCompletePlaceholder = document.querySelector(\r\n  '.autocomplete-placeholder',\r\n);\r\nconst options = {\r\n  method: 'GET',\r\n  headers: { accept: 'application/json' },\r\n  mode: 'cors',\r\n};\r\n\r\nconst debounce = (func, ms) => {\r\n  let timeout;\r\n  return (...args) => {\r\n    clearTimeout(timeout);\r\n    timeout = setTimeout(() => {\r\n      func(...args);\r\n    }, ms);\r\n  };\r\n};\r\n\r\nconst getCitySuggestions = async () => {\r\n  try {\r\n    const response = await fetch(\r\n      `https://eu1.locationiq.com/v1/autocomplete?q=${autocompleteInput.value}&tag=place%3Acity&limit=5&accept-language=en&dedupe=1&key=pk.372ca6b6ad1157e7185b0f6413208262`,\r\n      options,\r\n    );\r\n    if (response.ok) {\r\n      const responseJSON = await response.json();\r\n      return responseJSON;\r\n    }\r\n  } catch (e) {\r\n    console.log(e);\r\n  }\r\n};\r\n\r\nfunction createError() {\r\n  const autocompleteWrapper = document.createElement('div');\r\n  autocompleteWrapper.className = 'autocomplete-wrapper';\r\n\r\n  const addressWrapper = document.createElement('div');\r\n  addressWrapper.className = 'error-wrapper';\r\n\r\n  const err = document.createElement('span');\r\n  err.className = 'city';\r\n  err.textContent = 'No city found';\r\n\r\n  addressWrapper.append(err);\r\n  autocompleteWrapper.append(addressWrapper);\r\n  autoCompletePlaceholder.append(autocompleteWrapper);\r\n\r\n  // remove loader\r\n  document.querySelector('.loader-wrapper').remove();\r\n}\r\n\r\nfunction createAutoCompleteDOM(data) {\r\n  if (document.querySelector('.autocomplete-wrapper')) {\r\n    document.querySelector('.autocomplete-wrapper').remove();\r\n  }\r\n  const autocompleteWrapper = document.createElement('div');\r\n  autocompleteWrapper.className = 'autocomplete-wrapper';\r\n\r\n  for (let element of data) {\r\n    const addressWrapper = document.createElement('div');\r\n    addressWrapper.className = 'address-wrapper';\r\n    addressWrapper.setAttribute('data-lan', element.lat);\r\n    addressWrapper.setAttribute('data-lon', element.lon);\r\n\r\n    const city = document.createElement('span');\r\n    city.className = 'city';\r\n    city.textContent = element.address.name;\r\n\r\n    const country = document.createElement('span');\r\n    country.className = 'country';\r\n    country.textContent =\r\n      element.address.country === 'United States of America'\r\n        ? element.address.state\r\n        : element.address.country;\r\n\r\n    addressWrapper.append(city, country);\r\n    autocompleteWrapper.append(addressWrapper);\r\n  }\r\n  autoCompletePlaceholder.append(autocompleteWrapper);\r\n}\r\n\r\nfunction createAutoCompleteDropdown() {\r\n  if (autocompleteInput.value.length >= 3) {\r\n    getCitySuggestions()\r\n      .then((res) => createAutoCompleteDOM(res))\r\n      .catch(() => createError());\r\n  }\r\n}\r\nconst debouncedDropdown = debounce(createAutoCompleteDropdown, 1000);\r\n\r\nconst hideAutocompleteDropdown = () => {\r\n  if (document.querySelector('.autocomplete-wrapper')) {\r\n    document.querySelector('.autocomplete-wrapper').classList.add('hide');\r\n  }\r\n};\r\n\r\nfunction createLoader() {\r\n  const loaderWrapper = document.createElement('div');\r\n  loaderWrapper.className = 'loader-wrapper';\r\n\r\n  const loader = document.createElement('div');\r\n  loader.className = 'loader';\r\n\r\n  loaderWrapper.append(loader);\r\n  autoCompletePlaceholder.append(loaderWrapper);\r\n}\r\n\r\nconst handleAutocompleteInput = (e, addressWrapper = e.target) => {\r\n  addressWrapper.setAttribute('data-selected', 'selected');\r\n\r\n  const city = addressWrapper.querySelector('.city').textContent;\r\n  const country = addressWrapper.querySelector('.country').textContent;\r\n  autocompleteInput.value = `${city}, ${country}`;\r\n\r\n  findBtn.classList.remove('hide');\r\n  hideAutocompleteDropdown();\r\n};\r\n\r\nautocompleteInput.addEventListener('input', () => {\r\n  if (!document.querySelector('.loader-wrapper')) createLoader();\r\n\r\n  if (autocompleteInput.value.length < 3) {\r\n    autoCompletePlaceholder.innerHTML = '';\r\n  }\r\n  findBtn.classList.add('hide');\r\n  debouncedDropdown();\r\n});\r\n\r\nautocompleteInput.addEventListener('keyup', (e) => {\r\n  // Checking if autocomplete exist\r\n  const autocompleteWrapper = document.querySelector('.autocomplete-wrapper');\r\n  if (!autocompleteWrapper) return;\r\n\r\n  const selectedCityWrapper =\r\n    autocompleteWrapper.querySelector('.address-wrapper');\r\n\r\n  if (e.code === 'Enter') {\r\n    handleAutocompleteInput(e, selectedCityWrapper);\r\n  }\r\n});\r\n\r\nautoCompletePlaceholder.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('address-wrapper')) {\r\n    // Removing loader\r\n    document.querySelector('.loader-wrapper').remove();\r\n    handleAutocompleteInput(e);\r\n  }\r\n});\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXV0b2NvbXBsZXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx3QkFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLLElBQUksUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9hdXRvY29tcGxldGUuanM/NjQ3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRvY29tcGxldGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRvY29tcGxldGUnKTtcclxuY29uc3QgZmluZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5kLWJ0bicpO1xyXG5jb25zdCBhdXRvQ29tcGxldGVQbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgJy5hdXRvY29tcGxldGUtcGxhY2Vob2xkZXInLFxyXG4pO1xyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbiAgaGVhZGVyczogeyBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gIG1vZGU6ICdjb3JzJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCBtcykgPT4ge1xyXG4gIGxldCB0aW1lb3V0O1xyXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmdW5jKC4uLmFyZ3MpO1xyXG4gICAgfSwgbXMpO1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaXR5U3VnZ2VzdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2V1MS5sb2NhdGlvbmlxLmNvbS92MS9hdXRvY29tcGxldGU/cT0ke2F1dG9jb21wbGV0ZUlucHV0LnZhbHVlfSZ0YWc9cGxhY2UlM0FjaXR5JmxpbWl0PTUmYWNjZXB0LWxhbmd1YWdlPWVuJmRlZHVwZT0xJmtleT1way4zNzJjYTZiNmFkMTE1N2U3MTg1YjBmNjQxMzIwODI2MmAsXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFcnJvcigpIHtcclxuICBjb25zdCBhdXRvY29tcGxldGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXV0b2NvbXBsZXRlV3JhcHBlci5jbGFzc05hbWUgPSAnYXV0b2NvbXBsZXRlLXdyYXBwZXInO1xyXG5cclxuICBjb25zdCBhZGRyZXNzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZHJlc3NXcmFwcGVyLmNsYXNzTmFtZSA9ICdlcnJvci13cmFwcGVyJztcclxuXHJcbiAgY29uc3QgZXJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGVyci5jbGFzc05hbWUgPSAnY2l0eSc7XHJcbiAgZXJyLnRleHRDb250ZW50ID0gJ05vIGNpdHkgZm91bmQnO1xyXG5cclxuICBhZGRyZXNzV3JhcHBlci5hcHBlbmQoZXJyKTtcclxuICBhdXRvY29tcGxldGVXcmFwcGVyLmFwcGVuZChhZGRyZXNzV3JhcHBlcik7XHJcbiAgYXV0b0NvbXBsZXRlUGxhY2Vob2xkZXIuYXBwZW5kKGF1dG9jb21wbGV0ZVdyYXBwZXIpO1xyXG5cclxuICAvLyByZW1vdmUgbG9hZGVyXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci13cmFwcGVyJykucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUF1dG9Db21wbGV0ZURPTShkYXRhKSB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRvY29tcGxldGUtd3JhcHBlcicpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0b2NvbXBsZXRlLXdyYXBwZXInKS5yZW1vdmUoKTtcclxuICB9XHJcbiAgY29uc3QgYXV0b2NvbXBsZXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGF1dG9jb21wbGV0ZVdyYXBwZXIuY2xhc3NOYW1lID0gJ2F1dG9jb21wbGV0ZS13cmFwcGVyJztcclxuXHJcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWRkcmVzc1dyYXBwZXIuY2xhc3NOYW1lID0gJ2FkZHJlc3Mtd3JhcHBlcic7XHJcbiAgICBhZGRyZXNzV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuJywgZWxlbWVudC5sYXQpO1xyXG4gICAgYWRkcmVzc1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkYXRhLWxvbicsIGVsZW1lbnQubG9uKTtcclxuXHJcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY2l0eS5jbGFzc05hbWUgPSAnY2l0eSc7XHJcbiAgICBjaXR5LnRleHRDb250ZW50ID0gZWxlbWVudC5hZGRyZXNzLm5hbWU7XHJcblxyXG4gICAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvdW50cnkuY2xhc3NOYW1lID0gJ2NvdW50cnknO1xyXG4gICAgY291bnRyeS50ZXh0Q29udGVudCA9XHJcbiAgICAgIGVsZW1lbnQuYWRkcmVzcy5jb3VudHJ5ID09PSAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJ1xyXG4gICAgICAgID8gZWxlbWVudC5hZGRyZXNzLnN0YXRlXHJcbiAgICAgICAgOiBlbGVtZW50LmFkZHJlc3MuY291bnRyeTtcclxuXHJcbiAgICBhZGRyZXNzV3JhcHBlci5hcHBlbmQoY2l0eSwgY291bnRyeSk7XHJcbiAgICBhdXRvY29tcGxldGVXcmFwcGVyLmFwcGVuZChhZGRyZXNzV3JhcHBlcik7XHJcbiAgfVxyXG4gIGF1dG9Db21wbGV0ZVBsYWNlaG9sZGVyLmFwcGVuZChhdXRvY29tcGxldGVXcmFwcGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXV0b0NvbXBsZXRlRHJvcGRvd24oKSB7XHJcbiAgaWYgKGF1dG9jb21wbGV0ZUlucHV0LnZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICBnZXRDaXR5U3VnZ2VzdGlvbnMoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjcmVhdGVBdXRvQ29tcGxldGVET00ocmVzKSlcclxuICAgICAgLmNhdGNoKCgpID0+IGNyZWF0ZUVycm9yKCkpO1xyXG4gIH1cclxufVxyXG5jb25zdCBkZWJvdW5jZWREcm9wZG93biA9IGRlYm91bmNlKGNyZWF0ZUF1dG9Db21wbGV0ZURyb3Bkb3duLCAxMDAwKTtcclxuXHJcbmNvbnN0IGhpZGVBdXRvY29tcGxldGVEcm9wZG93biA9ICgpID0+IHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dG9jb21wbGV0ZS13cmFwcGVyJykpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRvY29tcGxldGUtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2FkZXIoKSB7XHJcbiAgY29uc3QgbG9hZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxvYWRlcldyYXBwZXIuY2xhc3NOYW1lID0gJ2xvYWRlci13cmFwcGVyJztcclxuXHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9hZGVyLmNsYXNzTmFtZSA9ICdsb2FkZXInO1xyXG5cclxuICBsb2FkZXJXcmFwcGVyLmFwcGVuZChsb2FkZXIpO1xyXG4gIGF1dG9Db21wbGV0ZVBsYWNlaG9sZGVyLmFwcGVuZChsb2FkZXJXcmFwcGVyKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlSW5wdXQgPSAoZSwgYWRkcmVzc1dyYXBwZXIgPSBlLnRhcmdldCkgPT4ge1xyXG4gIGFkZHJlc3NXcmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG5cclxuICBjb25zdCBjaXR5ID0gYWRkcmVzc1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmNpdHknKS50ZXh0Q29udGVudDtcclxuICBjb25zdCBjb3VudHJ5ID0gYWRkcmVzc1dyYXBwZXIucXVlcnlTZWxlY3RvcignLmNvdW50cnknKS50ZXh0Q29udGVudDtcclxuICBhdXRvY29tcGxldGVJbnB1dC52YWx1ZSA9IGAke2NpdHl9LCAke2NvdW50cnl9YDtcclxuXHJcbiAgZmluZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgaGlkZUF1dG9jb21wbGV0ZURyb3Bkb3duKCk7XHJcbn07XHJcblxyXG5hdXRvY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXItd3JhcHBlcicpKSBjcmVhdGVMb2FkZXIoKTtcclxuXHJcbiAgaWYgKGF1dG9jb21wbGV0ZUlucHV0LnZhbHVlLmxlbmd0aCA8IDMpIHtcclxuICAgIGF1dG9Db21wbGV0ZVBsYWNlaG9sZGVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuICBmaW5kQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICBkZWJvdW5jZWREcm9wZG93bigpO1xyXG59KTtcclxuXHJcbmF1dG9jb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAvLyBDaGVja2luZyBpZiBhdXRvY29tcGxldGUgZXhpc3RcclxuICBjb25zdCBhdXRvY29tcGxldGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dG9jb21wbGV0ZS13cmFwcGVyJyk7XHJcbiAgaWYgKCFhdXRvY29tcGxldGVXcmFwcGVyKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkQ2l0eVdyYXBwZXIgPVxyXG4gICAgYXV0b2NvbXBsZXRlV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy13cmFwcGVyJyk7XHJcblxyXG4gIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcclxuICAgIGhhbmRsZUF1dG9jb21wbGV0ZUlucHV0KGUsIHNlbGVjdGVkQ2l0eVdyYXBwZXIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5hdXRvQ29tcGxldGVQbGFjZWhvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkcmVzcy13cmFwcGVyJykpIHtcclxuICAgIC8vIFJlbW92aW5nIGxvYWRlclxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci13cmFwcGVyJykucmVtb3ZlKCk7XHJcbiAgICBoYW5kbGVBdXRvY29tcGxldGVJbnB1dChlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgYXV0b2NvbXBsZXRlSW5wdXQsIGZpbmRCdG4gfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/autocomplete.js\n");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete */ \"./src/js/autocomplete.js\");\n\r\n\r\nconst nextBtn = document.querySelector('.arrow-right');\r\nconst prevBtn = document.querySelector('.arrow-left');\r\nconst dayElements = document.querySelectorAll('.day-wrapper');\r\nconst scrollBehaviour = {\r\n  behavior: 'smooth',\r\n  block: 'start',\r\n  inline: 'center',\r\n};\r\n\r\nconst getActiveElement = () => {\r\n  const activeELement = document.querySelector(\r\n    '.next-5days__inner-wrapper > .active',\r\n  );\r\n  const activeElementIndex = Number(\r\n    activeELement.getAttribute('data-position'),\r\n  );\r\n\r\n  return [activeELement, activeElementIndex];\r\n};\r\n\r\nconst isCarouselEnded = (activeElIndex, position) =>\r\n  (activeElIndex === dayElements.length - 1 && position === 'right') ||\r\n  (activeElIndex === 0 && position === 'left');\r\n\r\nconst scrollEl = ([activeEl, activeElIndex], position) => {\r\n  if (isCarouselEnded(activeElIndex, position)) return;\r\n  if (position === 'right') {\r\n    // eslint-disable-next-line no-unused-expressions\r\n    dayElements[activeElIndex + 1].scrollIntoView(scrollBehaviour);\r\n\r\n    dayElements[activeElIndex + 1].classList.add('active');\r\n  } else if (position === 'left') {\r\n    dayElements[activeElIndex - 1].scrollIntoView(scrollBehaviour);\r\n\r\n    dayElements[activeElIndex - 1].classList.add('active');\r\n  }\r\n  activeEl.classList.remove('active');\r\n};\r\n\r\nconst setUpStartPosition = () => {\r\n  console.log(window.innerWidth);\r\n  if (window.innerWidth <= 768) {\r\n    document\r\n      .querySelector('.next-5days__inner-wrapper > .active')\r\n      .classList.remove('active');\r\n    dayElements[0].classList.add('active');\r\n  }\r\n};\r\n\r\nconst debouncedStart = (0,_autocomplete__WEBPACK_IMPORTED_MODULE_0__.debounce)(setUpStartPosition, 500);\r\n\r\nnextBtn.addEventListener('click', () => {\r\n  scrollEl(getActiveElement(), 'right');\r\n});\r\nprevBtn.addEventListener('click', () => {\r\n  scrollEl(getActiveElement(), 'left');\r\n});\r\n\r\nwindow.addEventListener('resize', () => {\r\n  debouncedStart();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9jYXJvdXNlbC5qcz8yYjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9hdXRvY29tcGxldGUnO1xyXG5cclxuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpO1xyXG5jb25zdCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcclxuY29uc3QgZGF5RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LXdyYXBwZXInKTtcclxuY29uc3Qgc2Nyb2xsQmVoYXZpb3VyID0ge1xyXG4gIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICBibG9jazogJ3N0YXJ0JyxcclxuICBpbmxpbmU6ICdjZW50ZXInLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0QWN0aXZlRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVFTGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICcubmV4dC01ZGF5c19faW5uZXItd3JhcHBlciA+IC5hY3RpdmUnLFxyXG4gICk7XHJcbiAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gTnVtYmVyKFxyXG4gICAgYWN0aXZlRUxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSxcclxuICApO1xyXG5cclxuICByZXR1cm4gW2FjdGl2ZUVMZW1lbnQsIGFjdGl2ZUVsZW1lbnRJbmRleF07XHJcbn07XHJcblxyXG5jb25zdCBpc0Nhcm91c2VsRW5kZWQgPSAoYWN0aXZlRWxJbmRleCwgcG9zaXRpb24pID0+XHJcbiAgKGFjdGl2ZUVsSW5kZXggPT09IGRheUVsZW1lbnRzLmxlbmd0aCAtIDEgJiYgcG9zaXRpb24gPT09ICdyaWdodCcpIHx8XHJcbiAgKGFjdGl2ZUVsSW5kZXggPT09IDAgJiYgcG9zaXRpb24gPT09ICdsZWZ0Jyk7XHJcblxyXG5jb25zdCBzY3JvbGxFbCA9IChbYWN0aXZlRWwsIGFjdGl2ZUVsSW5kZXhdLCBwb3NpdGlvbikgPT4ge1xyXG4gIGlmIChpc0Nhcm91c2VsRW5kZWQoYWN0aXZlRWxJbmRleCwgcG9zaXRpb24pKSByZXR1cm47XHJcbiAgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICBkYXlFbGVtZW50c1thY3RpdmVFbEluZGV4ICsgMV0uc2Nyb2xsSW50b1ZpZXcoc2Nyb2xsQmVoYXZpb3VyKTtcclxuXHJcbiAgICBkYXlFbGVtZW50c1thY3RpdmVFbEluZGV4ICsgMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICBkYXlFbGVtZW50c1thY3RpdmVFbEluZGV4IC0gMV0uc2Nyb2xsSW50b1ZpZXcoc2Nyb2xsQmVoYXZpb3VyKTtcclxuXHJcbiAgICBkYXlFbGVtZW50c1thY3RpdmVFbEluZGV4IC0gMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG4gIGFjdGl2ZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0VXBTdGFydFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLm5leHQtNWRheXNfX2lubmVyLXdyYXBwZXIgPiAuYWN0aXZlJylcclxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgZGF5RWxlbWVudHNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZGVib3VuY2VkU3RhcnQgPSBkZWJvdW5jZShzZXRVcFN0YXJ0UG9zaXRpb24sIDUwMCk7XHJcblxyXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNjcm9sbEVsKGdldEFjdGl2ZUVsZW1lbnQoKSwgJ3JpZ2h0Jyk7XHJcbn0pO1xyXG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNjcm9sbEVsKGdldEFjdGl2ZUVsZW1lbnQoKSwgJ2xlZnQnKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gIGRlYm91bmNlZFN0YXJ0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/carousel.js\n");

/***/ }),

/***/ "./src/js/handleDOM.js":
/*!*****************************!*\
  !*** ./src/js/handleDOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/js/weather.js\");\n/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete */ \"./src/js/autocomplete.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./src/js/utils/utils.js\");\n\r\n\r\n\r\n\r\nconst location = document.querySelector('.location');\r\nconst form = document.querySelector('form');\r\nconst circle = document.querySelector('.circle');\r\nconst everyTempValue = [\r\n  document.querySelector('.temperature'),\r\n  ...document.querySelectorAll('.small-temperature'),\r\n  ...document.querySelectorAll('.hourly__temperature'),\r\n];\r\n\r\nconst toggleMode = () => circle.classList.toggle('fahrenheit');\r\n\r\nconst getMode = () =>\r\n  circle.classList.contains('fahrenheit') ? 'us' : 'metric';\r\n\r\nfunction displayToday(data, unitGroup) {\r\n  const today = data.currentConditions;\r\n\r\n  const temperature = document.querySelector('.temperature');\r\n  const description = document.querySelector('.state-description');\r\n  const weatherImage = document.querySelector('.weather-image');\r\n  const [\r\n    humidity,\r\n    windSpeed,\r\n    sunrise,\r\n    sunset,\r\n    cloudCoverage,\r\n    precipitationChance,\r\n    visibility,\r\n  ] = document.querySelectorAll('.small-wrapper > .value');\r\n\r\n  temperature.textContent =\r\n    unitGroup === 'metric'\r\n      ? `${today.temp}°`\r\n      : `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertCelsiusToFahrenheit)(today.temp)}°`;\r\n  temperature.setAttribute('data-metric', today.temp);\r\n  temperature.setAttribute(\r\n    'data-imperial',\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertCelsiusToFahrenheit)(today.temp),\r\n  );\r\n\r\n  windSpeed.textContent =\r\n    unitGroup === 'metric'\r\n      ? `${today.windspeed} m/s`\r\n      : `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertWindSpeed)(today.windspeed)} mph`;\r\n  windSpeed.setAttribute('data-metric', `${today.windspeed} m/s`);\r\n  windSpeed.setAttribute(\r\n    'data-imperial',\r\n    `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertWindSpeed)(today.windspeed)} mph`,\r\n  );\r\n\r\n  visibility.textContent =\r\n    unitGroup === 'metric'\r\n      ? `${today.visibility} km`\r\n      : `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertVisibility)(today.visibility)} mi`;\r\n  visibility.setAttribute('data-metric', `${today.visibility} km`);\r\n  visibility.setAttribute(\r\n    'data-imperial',\r\n    `${(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertVisibility)(today.visibility)} mi`,\r\n  );\r\n\r\n  description.textContent = today.conditions;\r\n  humidity.textContent = `${today.humidity}%`;\r\n  sunrise.textContent = today.sunrise;\r\n  sunset.textContent = today.sunset;\r\n  cloudCoverage.textContent = `${today.cloudcover}%`;\r\n  precipitationChance.textContent = `${today.precipprob}%`;\r\n  weatherImage.src = `./assets/weather-svgs/${today.icon}.svg`;\r\n}\r\n\r\nfunction displayFiveDays(data, unitGroup) {\r\n  const [...dayWrapper] = document.querySelectorAll('.day-wrapper');\r\n\r\n  dayWrapper.forEach((day, index) => {\r\n    const days = data.days[index + 1];\r\n\r\n    const smallImg = day.querySelector(\r\n      '.weekday-img-wrapper > .small-weather-image',\r\n    );\r\n    const dayTemp = day.querySelector(\r\n      '.weekday-information > .small-temperature',\r\n    );\r\n    const dayDescription = day.querySelector(\r\n      '.weekday-information > .small-description',\r\n    );\r\n    const date = day.querySelector('.weekday-information > .date');\r\n\r\n    smallImg.src = `./assets/weather-svgs/${days.icon}.svg`;\r\n    dayTemp.textContent = `${unitGroup === 'metric' ? days.temp : (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertCelsiusToFahrenheit)(days.temp)}°`;\r\n    dayTemp.setAttribute('data-metric', days.temp);\r\n    dayTemp.setAttribute(\r\n      'data-imperial',\r\n      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertCelsiusToFahrenheit)(days.temp),\r\n    );\r\n    dayDescription.textContent = days.conditions;\r\n    date.textContent = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertDate)(days.datetime);\r\n  });\r\n}\r\n\r\nfunction displayHourly(data, unitGroup) {\r\n  const [...next8HoursRows] = document.querySelectorAll('.inner-wrapper-row');\r\n  const next8Hours = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.findNext8Hours)(data);\r\n\r\n  next8HoursRows.forEach((row, index) => {\r\n    const rowTime = row.querySelector('.hourly__time');\r\n    const rowTemp = row.querySelector('.hourly__temperature');\r\n    const rowRainChance = row.querySelector('.hourly__rain-probability');\r\n\r\n    rowTime.textContent = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertTime)(next8Hours[index].datetime);\r\n    rowTemp.textContent = `${unitGroup === 'metric' ? next8Hours[index].temp : (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertCelsiusToFahrenheit)(next8Hours[index].temp)}°`;\r\n    rowTemp.setAttribute('data-metric', next8Hours[index].temp);\r\n    rowTemp.setAttribute(\r\n      'data-imperial',\r\n      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.convertCelsiusToFahrenheit)(next8Hours[index].temp),\r\n    );\r\n    rowRainChance.textContent = `${next8Hours[index].precipprob}%`;\r\n  });\r\n}\r\n\r\nfunction applyDataToDOM(cityName, data) {\r\n  location.textContent = cityName;\r\n  const unitGroup = getMode();\r\n  displayToday(data, unitGroup);\r\n  displayFiveDays(data, unitGroup);\r\n  displayHourly(data, unitGroup);\r\n}\r\n\r\nfunction displayValuesConversion(valueName) {\r\n  const windSpeedEl = document.querySelector('.wind-speed > .value');\r\n  const visbilityEl = document.querySelector('.visibility > .value');\r\n\r\n  everyTempValue.forEach((tempValue) => {\r\n    tempValue.textContent = `${tempValue.dataset[valueName]}°`;\r\n  });\r\n\r\n  windSpeedEl.textContent = `${windSpeedEl.dataset[valueName]}`;\r\n  visbilityEl.textContent = `${visbilityEl.dataset[valueName]}`;\r\n}\r\n\r\nform.addEventListener('submit', async (e) => {\r\n  e.preventDefault();\r\n  const selectedCity = document.querySelector('[data-selected = \"selected\"]');\r\n  const weatherData = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(\r\n    selectedCity.dataset.lan,\r\n    selectedCity.dataset.lon,\r\n  );\r\n\r\n  applyDataToDOM(_autocomplete__WEBPACK_IMPORTED_MODULE_1__.autocompleteInput.value, weatherData);\r\n\r\n  _autocomplete__WEBPACK_IMPORTED_MODULE_1__.autocompleteInput.value = '';\r\n  _autocomplete__WEBPACK_IMPORTED_MODULE_1__.findBtn.classList.add('hide');\r\n});\r\n\r\nform.addEventListener('keydown', async (e) => {\r\n  if (e.code === 'Enter') e.preventDefault();\r\n});\r\n\r\ncircle.addEventListener('click', () => {\r\n  toggleMode();\r\n\r\n  if (getMode() === 'us') {\r\n    displayValuesConversion('imperial');\r\n  } else {\r\n    displayValuesConversion('metric');\r\n  }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ applyDataToDOM });\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGFuZGxlRE9NLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFDcUI7QUFRckM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsd0VBQTBCLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RUFBMEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLDhEQUFnQixtQkFBbUI7QUFDOUMsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBO0FBQ0EsT0FBTyw4REFBZ0IsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVywrREFBaUIsb0JBQW9CO0FBQ2hELDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQTtBQUNBLE9BQU8sK0RBQWlCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZUFBZTtBQUMzQztBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRCx1Q0FBdUMsaUJBQWlCO0FBQ3hELDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQsNkJBQTZCLHFDQUFxQyx3RUFBMEIsWUFBWTtBQUN4RztBQUNBO0FBQ0E7QUFDQSxNQUFNLHdFQUEwQjtBQUNoQztBQUNBO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseURBQVc7QUFDckMsNkJBQTZCLGtEQUFrRCx3RUFBMEIseUJBQXlCO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0VBQTBCO0FBQ2hDO0FBQ0EsbUNBQW1DLDZCQUE2QjtBQUNoRSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZCQUE2QjtBQUM1RCxHQUFHO0FBQ0g7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlELCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0REFBaUI7QUFDbEM7QUFDQSxFQUFFLDREQUFpQjtBQUNuQixFQUFFLGtEQUFPO0FBQ1QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9oYW5kbGVET00uanM/MWY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHsgYXV0b2NvbXBsZXRlSW5wdXQsIGZpbmRCdG4gfSBmcm9tICcuL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7XHJcbiAgY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQsXHJcbiAgY29udmVydERhdGUsXHJcbiAgZmluZE5leHQ4SG91cnMsXHJcbiAgY29udmVydFRpbWUsXHJcbiAgY29udmVydFZpc2liaWxpdHksXHJcbiAgY29udmVydFdpbmRTcGVlZCxcclxufSBmcm9tICcuL3V0aWxzL3V0aWxzJztcclxuXHJcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbmNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUnKTtcclxuY29uc3QgZXZlcnlUZW1wVmFsdWUgPSBbXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyksXHJcbiAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYWxsLXRlbXBlcmF0dXJlJyksXHJcbiAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseV9fdGVtcGVyYXR1cmUnKSxcclxuXTtcclxuXHJcbmNvbnN0IHRvZ2dsZU1vZGUgPSAoKSA9PiBjaXJjbGUuY2xhc3NMaXN0LnRvZ2dsZSgnZmFocmVuaGVpdCcpO1xyXG5cclxuY29uc3QgZ2V0TW9kZSA9ICgpID0+XHJcbiAgY2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnZmFocmVuaGVpdCcpID8gJ3VzJyA6ICdtZXRyaWMnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KGRhdGEsIHVuaXRHcm91cCkge1xyXG4gIGNvbnN0IHRvZGF5ID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucztcclxuXHJcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZS1kZXNjcmlwdGlvbicpO1xyXG4gIGNvbnN0IHdlYXRoZXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWltYWdlJyk7XHJcbiAgY29uc3QgW1xyXG4gICAgaHVtaWRpdHksXHJcbiAgICB3aW5kU3BlZWQsXHJcbiAgICBzdW5yaXNlLFxyXG4gICAgc3Vuc2V0LFxyXG4gICAgY2xvdWRDb3ZlcmFnZSxcclxuICAgIHByZWNpcGl0YXRpb25DaGFuY2UsXHJcbiAgICB2aXNpYmlsaXR5LFxyXG4gIF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21hbGwtd3JhcHBlciA+IC52YWx1ZScpO1xyXG5cclxuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9XHJcbiAgICB1bml0R3JvdXAgPT09ICdtZXRyaWMnXHJcbiAgICAgID8gYCR7dG9kYXkudGVtcH3CsGBcclxuICAgICAgOiBgJHtjb252ZXJ0Q2Vsc2l1c1RvRmFocmVuaGVpdCh0b2RheS50ZW1wKX3CsGA7XHJcbiAgdGVtcGVyYXR1cmUuc2V0QXR0cmlidXRlKCdkYXRhLW1ldHJpYycsIHRvZGF5LnRlbXApO1xyXG4gIHRlbXBlcmF0dXJlLnNldEF0dHJpYnV0ZShcclxuICAgICdkYXRhLWltcGVyaWFsJyxcclxuICAgIGNvbnZlcnRDZWxzaXVzVG9GYWhyZW5oZWl0KHRvZGF5LnRlbXApLFxyXG4gICk7XHJcblxyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9XHJcbiAgICB1bml0R3JvdXAgPT09ICdtZXRyaWMnXHJcbiAgICAgID8gYCR7dG9kYXkud2luZHNwZWVkfSBtL3NgXHJcbiAgICAgIDogYCR7Y29udmVydFdpbmRTcGVlZCh0b2RheS53aW5kc3BlZWQpfSBtcGhgO1xyXG4gIHdpbmRTcGVlZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0cmljJywgYCR7dG9kYXkud2luZHNwZWVkfSBtL3NgKTtcclxuICB3aW5kU3BlZWQuc2V0QXR0cmlidXRlKFxyXG4gICAgJ2RhdGEtaW1wZXJpYWwnLFxyXG4gICAgYCR7Y29udmVydFdpbmRTcGVlZCh0b2RheS53aW5kc3BlZWQpfSBtcGhgLFxyXG4gICk7XHJcblxyXG4gIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPVxyXG4gICAgdW5pdEdyb3VwID09PSAnbWV0cmljJ1xyXG4gICAgICA/IGAke3RvZGF5LnZpc2liaWxpdHl9IGttYFxyXG4gICAgICA6IGAke2NvbnZlcnRWaXNpYmlsaXR5KHRvZGF5LnZpc2liaWxpdHkpfSBtaWA7XHJcbiAgdmlzaWJpbGl0eS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0cmljJywgYCR7dG9kYXkudmlzaWJpbGl0eX0ga21gKTtcclxuICB2aXNpYmlsaXR5LnNldEF0dHJpYnV0ZShcclxuICAgICdkYXRhLWltcGVyaWFsJyxcclxuICAgIGAke2NvbnZlcnRWaXNpYmlsaXR5KHRvZGF5LnZpc2liaWxpdHkpfSBtaWAsXHJcbiAgKTtcclxuXHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RheS5jb25kaXRpb25zO1xyXG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7dG9kYXkuaHVtaWRpdHl9JWA7XHJcbiAgc3VucmlzZS50ZXh0Q29udGVudCA9IHRvZGF5LnN1bnJpc2U7XHJcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gdG9kYXkuc3Vuc2V0O1xyXG4gIGNsb3VkQ292ZXJhZ2UudGV4dENvbnRlbnQgPSBgJHt0b2RheS5jbG91ZGNvdmVyfSVgO1xyXG4gIHByZWNpcGl0YXRpb25DaGFuY2UudGV4dENvbnRlbnQgPSBgJHt0b2RheS5wcmVjaXBwcm9ifSVgO1xyXG4gIHdlYXRoZXJJbWFnZS5zcmMgPSBgLi9hc3NldHMvd2VhdGhlci1zdmdzLyR7dG9kYXkuaWNvbn0uc3ZnYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZpdmVEYXlzKGRhdGEsIHVuaXRHcm91cCkge1xyXG4gIGNvbnN0IFsuLi5kYXlXcmFwcGVyXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktd3JhcHBlcicpO1xyXG5cclxuICBkYXlXcmFwcGVyLmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGRheXMgPSBkYXRhLmRheXNbaW5kZXggKyAxXTtcclxuXHJcbiAgICBjb25zdCBzbWFsbEltZyA9IGRheS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLndlZWtkYXktaW1nLXdyYXBwZXIgPiAuc21hbGwtd2VhdGhlci1pbWFnZScsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF5VGVtcCA9IGRheS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLndlZWtkYXktaW5mb3JtYXRpb24gPiAuc21hbGwtdGVtcGVyYXR1cmUnLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRheURlc2NyaXB0aW9uID0gZGF5LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcud2Vla2RheS1pbmZvcm1hdGlvbiA+IC5zbWFsbC1kZXNjcmlwdGlvbicsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0ZSA9IGRheS5xdWVyeVNlbGVjdG9yKCcud2Vla2RheS1pbmZvcm1hdGlvbiA+IC5kYXRlJyk7XHJcblxyXG4gICAgc21hbGxJbWcuc3JjID0gYC4vYXNzZXRzL3dlYXRoZXItc3Zncy8ke2RheXMuaWNvbn0uc3ZnYDtcclxuICAgIGRheVRlbXAudGV4dENvbnRlbnQgPSBgJHt1bml0R3JvdXAgPT09ICdtZXRyaWMnID8gZGF5cy50ZW1wIDogY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQoZGF5cy50ZW1wKX3CsGA7XHJcbiAgICBkYXlUZW1wLnNldEF0dHJpYnV0ZSgnZGF0YS1tZXRyaWMnLCBkYXlzLnRlbXApO1xyXG4gICAgZGF5VGVtcC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdkYXRhLWltcGVyaWFsJyxcclxuICAgICAgY29udmVydENlbHNpdXNUb0ZhaHJlbmhlaXQoZGF5cy50ZW1wKSxcclxuICAgICk7XHJcbiAgICBkYXlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRheXMuY29uZGl0aW9ucztcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBjb252ZXJ0RGF0ZShkYXlzLmRhdGV0aW1lKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJseShkYXRhLCB1bml0R3JvdXApIHtcclxuICBjb25zdCBbLi4ubmV4dDhIb3Vyc1Jvd3NdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlubmVyLXdyYXBwZXItcm93Jyk7XHJcbiAgY29uc3QgbmV4dDhIb3VycyA9IGZpbmROZXh0OEhvdXJzKGRhdGEpO1xyXG5cclxuICBuZXh0OEhvdXJzUm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCByb3dUaW1lID0gcm93LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHlfX3RpbWUnKTtcclxuICAgIGNvbnN0IHJvd1RlbXAgPSByb3cucXVlcnlTZWxlY3RvcignLmhvdXJseV9fdGVtcGVyYXR1cmUnKTtcclxuICAgIGNvbnN0IHJvd1JhaW5DaGFuY2UgPSByb3cucXVlcnlTZWxlY3RvcignLmhvdXJseV9fcmFpbi1wcm9iYWJpbGl0eScpO1xyXG5cclxuICAgIHJvd1RpbWUudGV4dENvbnRlbnQgPSBjb252ZXJ0VGltZShuZXh0OEhvdXJzW2luZGV4XS5kYXRldGltZSk7XHJcbiAgICByb3dUZW1wLnRleHRDb250ZW50ID0gYCR7dW5pdEdyb3VwID09PSAnbWV0cmljJyA/IG5leHQ4SG91cnNbaW5kZXhdLnRlbXAgOiBjb252ZXJ0Q2Vsc2l1c1RvRmFocmVuaGVpdChuZXh0OEhvdXJzW2luZGV4XS50ZW1wKX3CsGA7XHJcbiAgICByb3dUZW1wLnNldEF0dHJpYnV0ZSgnZGF0YS1tZXRyaWMnLCBuZXh0OEhvdXJzW2luZGV4XS50ZW1wKTtcclxuICAgIHJvd1RlbXAuc2V0QXR0cmlidXRlKFxyXG4gICAgICAnZGF0YS1pbXBlcmlhbCcsXHJcbiAgICAgIGNvbnZlcnRDZWxzaXVzVG9GYWhyZW5oZWl0KG5leHQ4SG91cnNbaW5kZXhdLnRlbXApLFxyXG4gICAgKTtcclxuICAgIHJvd1JhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgJHtuZXh0OEhvdXJzW2luZGV4XS5wcmVjaXBwcm9ifSVgO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseURhdGFUb0RPTShjaXR5TmFtZSwgZGF0YSkge1xyXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gY2l0eU5hbWU7XHJcbiAgY29uc3QgdW5pdEdyb3VwID0gZ2V0TW9kZSgpO1xyXG4gIGRpc3BsYXlUb2RheShkYXRhLCB1bml0R3JvdXApO1xyXG4gIGRpc3BsYXlGaXZlRGF5cyhkYXRhLCB1bml0R3JvdXApO1xyXG4gIGRpc3BsYXlIb3VybHkoZGF0YSwgdW5pdEdyb3VwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVZhbHVlc0NvbnZlcnNpb24odmFsdWVOYW1lKSB7XHJcbiAgY29uc3Qgd2luZFNwZWVkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZCA+IC52YWx1ZScpO1xyXG4gIGNvbnN0IHZpc2JpbGl0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHkgPiAudmFsdWUnKTtcclxuXHJcbiAgZXZlcnlUZW1wVmFsdWUuZm9yRWFjaCgodGVtcFZhbHVlKSA9PiB7XHJcbiAgICB0ZW1wVmFsdWUudGV4dENvbnRlbnQgPSBgJHt0ZW1wVmFsdWUuZGF0YXNldFt2YWx1ZU5hbWVdfcKwYDtcclxuICB9KTtcclxuXHJcbiAgd2luZFNwZWVkRWwudGV4dENvbnRlbnQgPSBgJHt3aW5kU3BlZWRFbC5kYXRhc2V0W3ZhbHVlTmFtZV19YDtcclxuICB2aXNiaWxpdHlFbC50ZXh0Q29udGVudCA9IGAke3Zpc2JpbGl0eUVsLmRhdGFzZXRbdmFsdWVOYW1lXX1gO1xyXG59XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdGVkID0gXCJzZWxlY3RlZFwiXScpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihcclxuICAgIHNlbGVjdGVkQ2l0eS5kYXRhc2V0LmxhbixcclxuICAgIHNlbGVjdGVkQ2l0eS5kYXRhc2V0LmxvbixcclxuICApO1xyXG5cclxuICBhcHBseURhdGFUb0RPTShhdXRvY29tcGxldGVJbnB1dC52YWx1ZSwgd2VhdGhlckRhdGEpO1xyXG5cclxuICBhdXRvY29tcGxldGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGZpbmRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59KTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGFzeW5jIChlKSA9PiB7XHJcbiAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB0b2dnbGVNb2RlKCk7XHJcblxyXG4gIGlmIChnZXRNb2RlKCkgPT09ICd1cycpIHtcclxuICAgIGRpc3BsYXlWYWx1ZXNDb252ZXJzaW9uKCdpbXBlcmlhbCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXNwbGF5VmFsdWVzQ29udmVyc2lvbignbWV0cmljJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgYXBwbHlEYXRhVG9ET00gfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/handleDOM.js\n");

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertCelsiusToFahrenheit: () => (/* binding */ convertCelsiusToFahrenheit),\n/* harmony export */   convertDate: () => (/* binding */ convertDate),\n/* harmony export */   convertTime: () => (/* binding */ convertTime),\n/* harmony export */   convertVisibility: () => (/* binding */ convertVisibility),\n/* harmony export */   convertWindSpeed: () => (/* binding */ convertWindSpeed),\n/* harmony export */   findNext8Hours: () => (/* binding */ findNext8Hours)\n/* harmony export */ });\nfunction convertDate(date) {\r\n  const arr = date.split('-');\r\n  const [year, month, day] = arr;\r\n  return `${day}.${month}`;\r\n}\r\n\r\nfunction convertTime(date) {\r\n  return date.slice(0, 5);\r\n}\r\n\r\nfunction findNextHoursStart(data) {\r\n  const currenTimeInCity = data.currentConditions.datetime;\r\n  const currentHourInCity = currenTimeInCity.split(':')[0];\r\n  return Number(currentHourInCity);\r\n}\r\n\r\nfunction findNext8Hours(data) {\r\n  const allDayHours = data.days[0].hours;\r\n  // Basically, if now it's 11:00 we are getting next hour from which to start displaying forecast, so it will be 12:00\r\n  const startHour = findNextHoursStart(data);\r\n  const nextAvailableHours = allDayHours.filter(\r\n    (hours, index) => index > startHour,\r\n  );\r\n  // App displaying only next 8 hours forecast\r\n  if (nextAvailableHours.length < 8) {\r\n    const secondDayHours = data.days[1].hours;\r\n    const difference = 8 - nextAvailableHours.length;\r\n\r\n    const missingHours = secondDayHours.slice(0, difference);\r\n\r\n    return [...nextAvailableHours, ...missingHours];\r\n  }\r\n\r\n  return nextAvailableHours.splice(0, 8);\r\n}\r\n\r\n// visibility km to miles\r\nfunction convertVisibility(value) {\r\n  const VISIBILITY_DIFFERENCE = 0.621371;\r\n  return (value * VISIBILITY_DIFFERENCE).toFixed(1);\r\n}\r\n\r\n// m/s to mph\r\nfunction convertWindSpeed(value) {\r\n  const WINDSPEED_DIFFERENCE = 2.23694;\r\n  return (value * WINDSPEED_DIFFERENCE).toFixed(1);\r\n}\r\n\r\nfunction convertCelsiusToFahrenheit(value) {\r\n  return `${(value * 1.8 + 32).toFixed(1)}`;\r\n}\r\n// Как экспортировать весь файл? Скорее всего сделать модулем или IIEF\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxJQUFJLEdBQUcsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQztBQUNBO0FBUUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy91dGlscy91dGlscy5qcz82MDk1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGUpIHtcclxuICBjb25zdCBhcnIgPSBkYXRlLnNwbGl0KCctJyk7XHJcbiAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gYXJyO1xyXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRpbWUoZGF0ZSkge1xyXG4gIHJldHVybiBkYXRlLnNsaWNlKDAsIDUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kTmV4dEhvdXJzU3RhcnQoZGF0YSkge1xyXG4gIGNvbnN0IGN1cnJlblRpbWVJbkNpdHkgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lO1xyXG4gIGNvbnN0IGN1cnJlbnRIb3VySW5DaXR5ID0gY3VycmVuVGltZUluQ2l0eS5zcGxpdCgnOicpWzBdO1xyXG4gIHJldHVybiBOdW1iZXIoY3VycmVudEhvdXJJbkNpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kTmV4dDhIb3VycyhkYXRhKSB7XHJcbiAgY29uc3QgYWxsRGF5SG91cnMgPSBkYXRhLmRheXNbMF0uaG91cnM7XHJcbiAgLy8gQmFzaWNhbGx5LCBpZiBub3cgaXQncyAxMTowMCB3ZSBhcmUgZ2V0dGluZyBuZXh0IGhvdXIgZnJvbSB3aGljaCB0byBzdGFydCBkaXNwbGF5aW5nIGZvcmVjYXN0LCBzbyBpdCB3aWxsIGJlIDEyOjAwXHJcbiAgY29uc3Qgc3RhcnRIb3VyID0gZmluZE5leHRIb3Vyc1N0YXJ0KGRhdGEpO1xyXG4gIGNvbnN0IG5leHRBdmFpbGFibGVIb3VycyA9IGFsbERheUhvdXJzLmZpbHRlcihcclxuICAgIChob3VycywgaW5kZXgpID0+IGluZGV4ID4gc3RhcnRIb3VyLFxyXG4gICk7XHJcbiAgLy8gQXBwIGRpc3BsYXlpbmcgb25seSBuZXh0IDggaG91cnMgZm9yZWNhc3RcclxuICBpZiAobmV4dEF2YWlsYWJsZUhvdXJzLmxlbmd0aCA8IDgpIHtcclxuICAgIGNvbnN0IHNlY29uZERheUhvdXJzID0gZGF0YS5kYXlzWzFdLmhvdXJzO1xyXG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IDggLSBuZXh0QXZhaWxhYmxlSG91cnMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IG1pc3NpbmdIb3VycyA9IHNlY29uZERheUhvdXJzLnNsaWNlKDAsIGRpZmZlcmVuY2UpO1xyXG5cclxuICAgIHJldHVybiBbLi4ubmV4dEF2YWlsYWJsZUhvdXJzLCAuLi5taXNzaW5nSG91cnNdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5leHRBdmFpbGFibGVIb3Vycy5zcGxpY2UoMCwgOCk7XHJcbn1cclxuXHJcbi8vIHZpc2liaWxpdHkga20gdG8gbWlsZXNcclxuZnVuY3Rpb24gY29udmVydFZpc2liaWxpdHkodmFsdWUpIHtcclxuICBjb25zdCBWSVNJQklMSVRZX0RJRkZFUkVOQ0UgPSAwLjYyMTM3MTtcclxuICByZXR1cm4gKHZhbHVlICogVklTSUJJTElUWV9ESUZGRVJFTkNFKS50b0ZpeGVkKDEpO1xyXG59XHJcblxyXG4vLyBtL3MgdG8gbXBoXHJcbmZ1bmN0aW9uIGNvbnZlcnRXaW5kU3BlZWQodmFsdWUpIHtcclxuICBjb25zdCBXSU5EU1BFRURfRElGRkVSRU5DRSA9IDIuMjM2OTQ7XHJcbiAgcmV0dXJuICh2YWx1ZSAqIFdJTkRTUEVFRF9ESUZGRVJFTkNFKS50b0ZpeGVkKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0Q2Vsc2l1c1RvRmFocmVuaGVpdCh2YWx1ZSkge1xyXG4gIHJldHVybiBgJHsodmFsdWUgKiAxLjggKyAzMikudG9GaXhlZCgxKX1gO1xyXG59XHJcbi8vINCa0LDQuiDRjdC60YHQv9C+0YDRgtC40YDQvtCy0LDRgtGMINCy0LXRgdGMINGE0LDQudC7PyDQodC60L7RgNC10LUg0LLRgdC10LPQviDRgdC00LXQu9Cw0YLRjCDQvNC+0LTRg9C70LXQvCDQuNC70LggSUlFRlxyXG5leHBvcnQge1xyXG4gIGNvbnZlcnREYXRlLFxyXG4gIGNvbnZlcnRUaW1lLFxyXG4gIGZpbmROZXh0OEhvdXJzLFxyXG4gIGNvbnZlcnRDZWxzaXVzVG9GYWhyZW5oZWl0LFxyXG4gIGNvbnZlcnRXaW5kU3BlZWQsXHJcbiAgY29udmVydFZpc2liaWxpdHksXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils/utils.js\n");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nconst getWeather = async (lan, lon) => {\r\n  try {\r\n    const weatherData = await fetch(\r\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lan}, ${lon}?key=6NTV9U8V6WYRPTLLUZNQC3DRN&unitGroup=metric`,\r\n      { mode: 'cors' },\r\n    );\r\n    return weatherData.json();\r\n  } catch (e) {\r\n    return 'City not found';\r\n  }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvd2VhdGhlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0EsNkZBQTZGLElBQUksSUFBSSxJQUFJO0FBQ3pHLFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3dlYXRoZXIuanM/YTQxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsYW4sIGxvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsYW59LCAke2xvbn0/a2V5PTZOVFY5VThWNldZUlBUTExVWk5RQzNEUk4mdW5pdEdyb3VwPW1ldHJpY2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhLmpzb24oKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gJ0NpdHkgbm90IGZvdW5kJztcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/weather.js\n");

/***/ }),

/***/ "./src/assets/weather-svgs/clear-day.svg":
/*!***********************************************!*\
  !*** ./src/assets/weather-svgs/clear-day.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/clear-day.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/clear-night.svg":
/*!*************************************************!*\
  !*** ./src/assets/weather-svgs/clear-night.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/clear-night.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/cloudy.svg":
/*!********************************************!*\
  !*** ./src/assets/weather-svgs/cloudy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/cloudy.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/fog.svg":
/*!*****************************************!*\
  !*** ./src/assets/weather-svgs/fog.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/fog.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/hail.svg":
/*!******************************************!*\
  !*** ./src/assets/weather-svgs/hail.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/hail.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/partly-cloudy-day.svg":
/*!*******************************************************!*\
  !*** ./src/assets/weather-svgs/partly-cloudy-day.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/partly-cloudy-day.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/partly-cloudy-night.svg":
/*!*********************************************************!*\
  !*** ./src/assets/weather-svgs/partly-cloudy-night.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/partly-cloudy-night.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/rain-snow-showers-day.svg":
/*!***********************************************************!*\
  !*** ./src/assets/weather-svgs/rain-snow-showers-day.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/rain-snow-showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/rain-snow-showers-night.svg":
/*!*************************************************************!*\
  !*** ./src/assets/weather-svgs/rain-snow-showers-night.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/rain-snow-showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/rain-snow.svg":
/*!***********************************************!*\
  !*** ./src/assets/weather-svgs/rain-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/rain-snow.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/rain.svg":
/*!******************************************!*\
  !*** ./src/assets/weather-svgs/rain.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/rain.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/showers-day.svg":
/*!*************************************************!*\
  !*** ./src/assets/weather-svgs/showers-day.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/showers-night.svg":
/*!***************************************************!*\
  !*** ./src/assets/weather-svgs/showers-night.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/sleet.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-svgs/sleet.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/sleet.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/snow-showers-day.svg":
/*!******************************************************!*\
  !*** ./src/assets/weather-svgs/snow-showers-day.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/snow-showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/snow-showers-night.svg":
/*!********************************************************!*\
  !*** ./src/assets/weather-svgs/snow-showers-night.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/snow-showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/snow.svg":
/*!******************************************!*\
  !*** ./src/assets/weather-svgs/snow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/snow.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/thunder-rain.svg":
/*!**************************************************!*\
  !*** ./src/assets/weather-svgs/thunder-rain.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/thunder-rain.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/thunder-showers-day.svg":
/*!*********************************************************!*\
  !*** ./src/assets/weather-svgs/thunder-showers-day.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/thunder-showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/thunder-showers-night.svg":
/*!***********************************************************!*\
  !*** ./src/assets/weather-svgs/thunder-showers-night.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/thunder-showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/thunder.svg":
/*!*********************************************!*\
  !*** ./src/assets/weather-svgs/thunder.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/thunder.svg";

/***/ }),

/***/ "./src/assets/weather-svgs/wind.svg":
/*!******************************************!*\
  !*** ./src/assets/weather-svgs/wind.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/weather-svgs/wind.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;