// destructuring
const wait = {
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
}

const {
    id,
    name: { lastName: lName } // alias
} = wait;


// aray destructuring

const myFriends = ['sei', 'nai', 'koi', 'hoy', 'nah', 'bah'];
const [,, bestFriend, ...rest] = myFriends;

