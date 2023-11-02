{
    // alias types

    type Student = {
        isMarried?: boolean;
        name: string;
        age: number;
        conact?: string;
        adress: string
    }
    const student1: Student = {
        name: 'Sei',
        age: 13,
        adress: 'Tala'
    }

    const student2: Student = {
        name: 'Neai',
        age: 13,
        conact: '0183434343',
        adress: 'Khustia',
        isMarried: true
    }

    const student3: Student = {
        name: 'nah',
        age: 12,
        conact: '3924394',
        adress: 'Bari',
        isMarried: false
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = 'bah';
    const admin: IsAdmin = true;

    type Add = (a: number, b: number) => number;
    const add = (a: number, b: number): number => a + b;
    const add2: Add = (a, b) => a + b;













}