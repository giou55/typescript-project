"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const text = "world";
function hello(t = text) {
    return `Hello ${t}! `;
}
exports.hello = hello;
console.log(hello("George"));
