/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  const activeClass = 'ativo';\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    function activeAccordion() {\n      this.classList.toggle(activeClass);\n      this.nextElementSibling.classList.toggle(activeClass);\n    }\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n//# sourceURL=webpack://sites/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros(){ \r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n    \r\n    numeros.forEach((numero)=>{\r\n    const total = +numero.innerText\r\n    const incremento = Math.floor(total / 100);\r\n    let start =0;\r\n    const timer = setInterval(()=>{\r\n      start = start + incremento;\r\n    numero.innerText = start\r\n    if(start > total){\r\n      clearInterval(timer)\r\n      numero.innerText = total;\r\n    }\r\n    },25 * Math.random());\r\n    \r\n    console.log(total)\r\n    });\r\n    }\r\n    \r\n    function handelMutantion(mutation){\r\n    if (mutation[0].target.classList.contains('ativo')){\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n    }\r\n    const observerTarget = document.querySelector('.numeros');\r\n    const observer = new MutationObserver(handelMutantion);\r\n    observer.observe(observerTarget,{attributes: true});\r\n}\r\n\n\n//# sourceURL=webpack://sites/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animacaoScroll.js":
/*!**************************************!*\
  !*** ./js/modules/animacaoScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  if (sections.length) {\r\n    const windowMetade = window.innerHeight * 0.6;\r\n\r\n    function animaScroll() {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top;\r\n        const isSectionVisible = sectionTop - windowMetade < 0;\r\n        if (isSectionVisible) section.classList.add(\"ativo\");\r\n        else if(section.classList.contains(\"ativo\")){\r\n          section.classList.remove(\"ativo\");\r\n        }\r\n      });\r\n    }\r\n\r\n    animaScroll();\r\n\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sites/./js/modules/animacaoScroll.js?");

/***/ }),

/***/ "./js/modules/dropdownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropdownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropDownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach(menu => {\n    ['touchstart', 'click'].forEach(userEvent => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  };\n}\n\n//# sourceURL=webpack://sites/./js/modules/dropdownMenu.js?");

/***/ }),

/***/ "./js/modules/fecth-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fecth-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initanimaisNumeros)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initanimaisNumeros(){\r\n  async function fecthAnimais(url){\r\n    try{\r\n    const animaisResponse = await fetch(url);\r\n    const animaisJSON = await animaisResponse.json();\r\n    const numerosGrid = document.querySelector('.numeros-grid');\r\n    \r\n    animaisJSON.forEach(animal => {\r\n      const divAnimal = creatAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n    });\r\n    (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  } catch(erro){\r\n    console.log(Error(erro));\r\n  }\r\n    }\r\n    \r\n    function creatAnimal(animal){\r\n    const div = document.createElement('div');\r\n    div.classList.add('numero-animal');\r\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n    }\r\n    \r\n    fecthAnimais('./animais.json');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sites/./js/modules/fecth-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFecthBitcoin)\n/* harmony export */ });\nfunction initFecthBitcoin(){\r\n\r\n  fetch('https://blockchain.info/ticker')\r\n  .then(response => response.json())\r\n  .then(json =>{\r\n    const btcPreco = document.querySelector('.btc-preco');\r\n    btcPreco.innerText = (100 / json.BRL.sell).toFixed(4)\r\n    console.log(btcPreco)\r\n  }) .catch(erro => {\r\nconsole.log(Error(erro));\r\n  })  \r\n}\r\n\r\n//https://blockchoin.info/ticker\n\n//# sourceURL=webpack://sites/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(){\r\n  const funcionamento =document.querySelector('[data-semana]');\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\r\n  const horario = document.querySelector('[data-horario]');\r\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\r\n  \r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n  \r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\r\n  \r\n  if(semanaAberto && horarioAberto){\r\n  funcionamento.classList.add('aberto');\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://sites/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/initScroll.js":
/*!**********************************!*\
  !*** ./js/modules/initScroll.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroll)\n/* harmony export */ });\nfunction initScroll() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]'\r\n  );\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  }\r\n\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", scrollToSection);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://sites/./js/modules/initScroll.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = [\"click\", \"touchstart\"];\n\n  if (menuButton) {\n    function openMenu(event) {\n      menuList.classList.add(\"active\");\n      menuButton.classList.add(\"active\");\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n        menuList.classList.remove(\"active\");\n        menuButton.classList.remove(\"active\");\n      });\n    }\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://sites/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n  \n  if(botaoAbrir && botaoFechar && containerModal) {\n    \n    function toggleModal(event) {\n      event.preventDefault();\n      containerModal.classList.toggle('ativo');\n    }\n    function cliqueForaModal(event) {\n      if(event.target === this) {\n        toggleModal(event);\n      }\n    }\n  \n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n\n//# sourceURL=webpack://sites/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n      element.setAttribute(outside, \"\");\n    });\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://sites/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  if(tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n\n    function activeTab(index) {\n      tabContent.forEach((section) => {\n        section.classList.remove('ativo');\n      });\n      const direcao = tabContent[index].dataset.anime;\n      tabContent[index].classList.add('ativo', direcao);\n    }\n\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://sites/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  })\n  \n  function onMouseOver(event) {\n    const tooltipBox = criarTooltipBox(this);\n    \n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n  \n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n  \n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    }\n  }\n  \n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\n      this.tooltipBox.style.left = event.pageX + 20 + 'px';\n    }\n  }\n  \n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n}\n\n\n\n//# sourceURL=webpack://sites/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_initScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initScroll.js */ \"./js/modules/initScroll.js\");\n/* harmony import */ var _modules_animacaoScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animacaoScroll.js */ \"./js/modules/animacaoScroll.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./js/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fecth-animais.js */ \"./js/modules/fecth-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_initScroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_animacaoScroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://sites/./js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;