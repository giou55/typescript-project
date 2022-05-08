var text = "world";
function hello(t) {
    if (t === void 0) { t = text; }
    return "Hello ".concat(t, "! ");
}
console.log(hello("George"));
