var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,f=/^0o[0-7]+$/i,r=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,i="object"==typeof self&&self&&self.Object===Object&&self,u=c||i||Function("return this")(),l=Object.prototype.toString,s=Math.max,a=Math.min,b=function(){return u.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(y(e)){var c="function"==typeof e.valueOf?e.valueOf():e;e=y(c)?c+"":c}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var i=n.test(e);return i||f.test(e)?r(e.slice(2),i?2:8):o.test(e)?NaN:+e}document.querySelector(".country-info"),document.querySelector("#search-box");console.log(void fetch("https://restcountries.com/v3.1/name/usa").then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>console.log(e))));
//# sourceMappingURL=index.97146f05.js.map
