!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");function c(e,n){return new Promise((function(o,t){setTimeout((function(){var i=Math.random()>.3,r={position:e,delay:n};i?o(r):t(r)}),n)}))}i("h6c0i"),i("fivgP"),i("3xhau"),i("7rQOT"),i("gqlUR"),document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.currentTarget.elements,t=o.delay,i=o.step,a=o.amount,l=Number(t.value),u=Number(i.value),f=Number(a.value),s=1,d=l;s<=f;)c(s,d).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),s++,d+=u}))}();
//# sourceMappingURL=03-promises.5c616edc.js.map
