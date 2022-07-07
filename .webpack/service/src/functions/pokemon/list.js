/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mssql");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/functions/pokemon/list.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handler": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mssql */ "mssql");
/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mssql__WEBPACK_IMPORTED_MODULE_0__);

const config = {
  user: process.env.sa,
  password: process.env.darede2022,
  server: 'localhost',
  database: process.env.desafio,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true // instanceName: 'SQLEXPRESS'

  },
  port: 1433
};
const handler = async (event, context) => {
  try {
    await mssql__WEBPACK_IMPORTED_MODULE_0___default().connect(config);
    const resultado = await (mssql__WEBPACK_IMPORTED_MODULE_0___default().query)`SELECT * FROM pokemon`;
    return resultado;
  } catch (error) {
    return error.message;
  }
}; // import sql from "mssql"
// const config = {
//   server: 'localhost',
//   port: 1433,
//   user:process.env.sa,
//   password:process.env.darede2022,
//   database:process.env.desafio,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
// }
// export const handler = async (event, context) => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     await sql.connect(config)
//     const result = await sql.query`select * from pokemon`
//     console.dir(result)
//    } catch (err) {
//     // ... error checks
//    }
// };
// // const config = {
// //   user: 'sa',
// //   password: 'darede@2022',
// //   server: 'DAREDE-001079',
// //   database: 'desafio',
// //   options: {
// //     trustedconnection: true,
// //     enableArithAbort: true,
// //     instancename: "",
// //   },
// //   port: 1433
// // };
// // async () => {
// //   try {
// //    // make sure that any items are correctly URL encoded in the connection string
// //    await sql.connect(config)
// //    const result = await sql.query`select * from pokemon`
// //    console.dir(result)
// //   } catch (err) {
// //    // ... error checks
// //   }
// // }
// // async function listPokemon() {
// //   try {
// //     let pool = await sql.connect(config)
// //     let resultado = await pool.request().query('select * from pokemon')
// //     console.log(resultado)
// //     sql.close();
// //   } catch (error) {
// //     console.log(err.message)
// //   }
// // }
// // module.exports ={
// //   getPokemons : getPokemons
// // }
// // export const handler = async (event, context) => {
// //   try {
// //     await sql.connect(config)
// //     return (resultado);
// //   } catch (error) {
// //     return error.message;
// //   }
// // };
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2Z1bmN0aW9ucy9wb2tlbW9uL2xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBREE7QUFJQTtBQWZBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNhZmlvMi9leHRlcm5hbCBjb21tb25qcyBcIm1zc3FsXCIiLCJ3ZWJwYWNrOi8vZGVzYWZpbzIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzYWZpbzIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVzYWZpbzIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2FmaW8yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzYWZpbzIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNhZmlvMi8uL3NyYy9mdW5jdGlvbnMvcG9rZW1vbi9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3FsIGZyb20gXCJtc3NxbFwiO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHVzZXI6IHByb2Nlc3MuZW52LnNhLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5kYXJlZGUyMDIyLFxyXG4gIHNlcnZlcjogJ2xvY2FsaG9zdCcsXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LmRlc2FmaW8sXHJcblxyXG4gIHBvb2w6IHtcclxuICAgIG1heDogMTAsXHJcbiAgICBtaW46IDAsXHJcbiAgICBpZGxlVGltZW91dE1pbGxpczogMzAwMDBcclxuICB9LFxyXG4gIG9wdGlvbnM6IHtcclxuICAgIGVuY3J5cHQ6IHRydWUsXHJcbiAgICAvLyBpbnN0YW5jZU5hbWU6ICdTUUxFWFBSRVNTJ1xyXG4gIH0sXHJcbiAgcG9ydDogMTQzM1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgc3FsLmNvbm5lY3QoY29uZmlnKVxyXG4gICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgc3FsLnF1ZXJ5YFNFTEVDVCAqIEZST00gcG9rZW1vbmBcclxuICAgIHJldHVybiByZXN1bHRhZG87XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGltcG9ydCBzcWwgZnJvbSBcIm1zc3FsXCJcclxuLy8gY29uc3QgY29uZmlnID0ge1xyXG4vLyAgIHNlcnZlcjogJ2xvY2FsaG9zdCcsXHJcbi8vICAgcG9ydDogMTQzMyxcclxuLy8gICB1c2VyOnByb2Nlc3MuZW52LnNhLFxyXG4vLyAgIHBhc3N3b3JkOnByb2Nlc3MuZW52LmRhcmVkZTIwMjIsXHJcbi8vICAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuZGVzYWZpbyxcclxuLy8gICBwb29sOiB7XHJcbi8vICAgICBtYXg6IDEwLFxyXG4vLyAgICAgbWluOiAwLFxyXG4vLyAgICAgaWRsZVRpbWVvdXRNaWxsaXM6IDMwMDAwXHJcbi8vICAgfSxcclxuLy8gfVxyXG4vLyBleHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudCwgY29udGV4dCkgPT4ge1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbnkgaXRlbXMgYXJlIGNvcnJlY3RseSBVUkwgZW5jb2RlZCBpbiB0aGUgY29ubmVjdGlvbiBzdHJpbmdcclxuLy8gICAgIGF3YWl0IHNxbC5jb25uZWN0KGNvbmZpZylcclxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNxbC5xdWVyeWBzZWxlY3QgKiBmcm9tIHBva2Vtb25gXHJcbi8vICAgICBjb25zb2xlLmRpcihyZXN1bHQpXHJcbi8vICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgLy8gLi4uIGVycm9yIGNoZWNrc1xyXG4vLyAgICB9XHJcbi8vIH07XHJcblxyXG4vLyAvLyBjb25zdCBjb25maWcgPSB7XHJcbi8vIC8vICAgdXNlcjogJ3NhJyxcclxuLy8gLy8gICBwYXNzd29yZDogJ2RhcmVkZUAyMDIyJyxcclxuLy8gLy8gICBzZXJ2ZXI6ICdEQVJFREUtMDAxMDc5JyxcclxuLy8gLy8gICBkYXRhYmFzZTogJ2Rlc2FmaW8nLFxyXG4vLyAvLyAgIG9wdGlvbnM6IHtcclxuLy8gLy8gICAgIHRydXN0ZWRjb25uZWN0aW9uOiB0cnVlLFxyXG4vLyAvLyAgICAgZW5hYmxlQXJpdGhBYm9ydDogdHJ1ZSxcclxuLy8gLy8gICAgIGluc3RhbmNlbmFtZTogXCJcIixcclxuLy8gLy8gICB9LFxyXG4vLyAvLyAgIHBvcnQ6IDE0MzNcclxuLy8gLy8gfTtcclxuXHJcbi8vIC8vIGFzeW5jICgpID0+IHtcclxuLy8gLy8gICB0cnkge1xyXG4vLyAvLyAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbnkgaXRlbXMgYXJlIGNvcnJlY3RseSBVUkwgZW5jb2RlZCBpbiB0aGUgY29ubmVjdGlvbiBzdHJpbmdcclxuLy8gLy8gICAgYXdhaXQgc3FsLmNvbm5lY3QoY29uZmlnKVxyXG4vLyAvLyAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnlgc2VsZWN0ICogZnJvbSBwb2tlbW9uYFxyXG4vLyAvLyAgICBjb25zb2xlLmRpcihyZXN1bHQpXHJcbi8vIC8vICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vIC8vICAgIC8vIC4uLiBlcnJvciBjaGVja3NcclxuLy8gLy8gICB9XHJcbi8vIC8vIH1cclxuXHJcblxyXG4vLyAvLyBhc3luYyBmdW5jdGlvbiBsaXN0UG9rZW1vbigpIHtcclxuLy8gLy8gICB0cnkge1xyXG4vLyAvLyAgICAgbGV0IHBvb2wgPSBhd2FpdCBzcWwuY29ubmVjdChjb25maWcpXHJcbi8vIC8vICAgICBsZXQgcmVzdWx0YWRvID0gYXdhaXQgcG9vbC5yZXF1ZXN0KCkucXVlcnkoJ3NlbGVjdCAqIGZyb20gcG9rZW1vbicpXHJcbi8vIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHRhZG8pXHJcbi8vIC8vICAgICBzcWwuY2xvc2UoKTtcclxuLy8gLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbi8vIC8vICAgfVxyXG4vLyAvLyB9XHJcbi8vIC8vIG1vZHVsZS5leHBvcnRzID17XHJcbi8vIC8vICAgZ2V0UG9rZW1vbnMgOiBnZXRQb2tlbW9uc1xyXG4vLyAvLyB9XHJcbi8vIC8vIGV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XHJcbi8vIC8vICAgdHJ5IHtcclxuLy8gLy8gICAgIGF3YWl0IHNxbC5jb25uZWN0KGNvbmZpZylcclxuXHJcbi8vIC8vICAgICByZXR1cm4gKHJlc3VsdGFkbyk7XHJcbi8vIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gLy8gICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9