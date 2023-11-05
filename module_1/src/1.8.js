"use strict";
// destructuring
var wait = {
    id: 12,
    name: {
        firstName: 'sei',
        lastName: 'valo'
    },
    contctNo: '01800000000',
    address: {
        dist: 'Satkhira',
        upa: 'Tapa',
        Uni: 'khesra'
    }
};
var id = wait.id, lName = wait.name.lastName;
// aray destructuring
var myFriends = ['sei', 'nai', 'koi', 'hoy', 'nah', 'bah'];
var bestFriend = myFriends[2], rest = myFriends.slice(3);
