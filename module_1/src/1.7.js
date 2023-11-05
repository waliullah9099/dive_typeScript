"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    // rest operator
    // destructuring
    var friends1 = ['Hussain', 'Arafat', 'Yeasin'];
    var friends2 = ['MAzhar', 'Emon'];
    friends1.push.apply(friends1, friends2);
    var teachers1 = {
        typeScript: "Mezbah",
        redux: "Mir Hossain",
        dbms: "Mizan"
    };
    var teachers2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    };
    var teachersList = __assign(__assign({}, teachers1), teachers2);
    // rest 
    var greatFriends = function () {
        var fnds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fnds[_i] = arguments[_i];
        }
        // return (`Hi ${fnd1} ${fnd2} ${fnd3}`)
        fnds.forEach(function (fnd) {
            console.log("Hi ".concat(fnd));
        });
    };
    greatFriends('Sei', 'Nei', 'Tai', 'Hoy', 'Akai');
}
