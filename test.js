function addChar(val) {
    var inx = document.getElementById('input');
    inx.value += val;
}
function result(val) {
    var inx = document.getElementById('input');
    var answer = eval(inx.value);
    inx.value = answer;
}
function pi() {
    var inx = document.getElementById('input');
    inx.value = Math.PI;
}
function e() {
    var inx = document.getElementById('input');
    inx.value = "2.7182818284590452353602874713527";
}
function cl() {
    var inx = document.getElementById('input');
    inx.value = "";
}
function sq() {
    var inx = document.getElementById('input');
    inx.value = Math.pow(2, inx.value);
}
function x2() {
    var inx = document.getElementById('input');
    inx.value = eval(inx.value) * eval(inx.value);
}
function del() {
    var inx = document.getElementById('input');
    inx.value = inx.value.slice(0, -1);
}
function log() {
    var inx = document.getElementById('input');
    inx.value = Math.log(inx.value);
}
function plms() {
    var inx = document.getElementById('input');
    if (inx.value.substring(0, 1) == "-")
        inx.value = inx.value.substring(1, inx.value.length);
    else
        inx.value = "-" + inx.value;
}
function EXP() {
    var inx = document.getElementById('input');
    inx.value = Math.exp(inx.value);
}
function In() {
    var inx = document.getElementById('input');
    inx.value = Math.log(inx.value);
}
function n() {
    var inx = document.getElementById('input');
    var i, num, f;
    f = 1;
    num = inx.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    inx.value = f;
}
function xy() {
    var inx = document.getElementById('input');
    inx.value = "Math.pow(,)";
}
function fraction() {
    var inx = document.getElementById('input');
    inx.value = Math.pow(10 ^ (0), inx.value);
}
