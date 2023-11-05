"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    // const age: number = 18;
    // if (age > 18) {
    //     console.log('Adalt age');
    // } else {
    //     console.log('Non Adult Age');
    // }
    var age = 18;
    var isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    // console.log({isAdult});
    // nulish coalesing operators 
    // when making decision with --- null , undefiend
    var authentic = '';
    var man = authentic !== null && authentic !== void 0 ? authentic : 'Guest';
    var man2 = authentic ? authentic : 'Guest';
    var user1 = {
        name: 'sei',
        adress: {
            city: 'Tala',
            presentAdress: 'Khesra'
        }
    };
    var loca = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.adress) === null || _a === void 0 ? void 0 : _a.permanenetAdress) !== null && _b !== void 0 ? _b : 'no permanenet adress';
    console.log({ loca: loca });
}
