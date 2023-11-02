{
    // ternary operator || optional chaining || nullish coalescing operator

    // const age: number = 18;
    // if (age > 18) {
    //     console.log('Adalt age');

    // } else {
    //     console.log('Non Adult Age');

    // }

    const age: number = 18;
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    // console.log({isAdult});

    // nulish coalesing operators 
    // when making decision with --- null , undefiend

    const authentic = '';
    const man = authentic ?? 'Guest';
    const man2 = authentic ? authentic : 'Guest'
    // console.log({ man }, { man2 });


    //optional chain
    type User = {
        name: string;
        adress: {
            city: string;
            presentAdress: string;
            permanenetAdress?: string;
        }
    }

    const user1: User = {
        name: 'sei',
        adress: {
            city: 'Tala',
            presentAdress: 'Khesra'
        }
    }
    const loca = user1?.adress?.permanenetAdress ?? 'no permanenet adress';
    console.log({ loca });








}