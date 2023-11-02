"use strict";
// normal & arrow function
function add(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
// add(3, "3");
add(3, 3);
var arrowFunc = function (a, b) { return a + b; };
// in object --> call --> method 
var about = {
    name: "sei",
    balace: 12,
    addBalace: function (balace) {
        return "tatal balance: ".concat(this.balace + balace);
    },
    subtractBalance: function (balace) {
        return this.balace + balace;
    }
};
var nums = [1, 32, 12, 9];
var newNums = nums.map(function (num) { return num * num; });
