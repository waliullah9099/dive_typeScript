"use strict";
{
    // nullable types
    var searchName = function (value) {
        if (value) {
            console.log('searching........');
        }
        else {
            console.log('There is no search');
        }
    };
    // searchName('')
    // unknown types
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === 'number') {
            var converted = (value * 1000) / 3600;
            console.log("The speed is ".concat(converted, " ms^1"));
        }
        else if (typeof value === 'string') {
            var _a = value.split(' '), val = _a[0], unit = _a[1];
            var converted = (parseFloat(val) * 1000) / 3600;
            console.log("The speed is ".concat(converted, " ms^1"));
        }
        else {
            console.log('worng input');
        }
    };
    getSpeedInMeterPerSecond(null);
    // never 
    var throughErr = function (msg) {
        throw new Error(msg);
    };
    throughErr('miss this days');
}
