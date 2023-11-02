{

    // umion (thats means or opearator)

    type Froentend = 'Fakibazi Developer' | 'Junior Developer';
    type fullStack = 'froentEnd Developer' | 'Expert Developer';
    type Developer = Froentend | fullStack;

    const newDeveloper1: Developer = 'Expert Developer';
    const newDeveloper2: Developer = 'Junior Developer';
    // const newDeveloper3: Developer = 'valoi Developer';


    type User = {
        name: string;
        age: number;
        email: string;
        gender: 'Male' | 'Female' | 'Other'; // literal
        blood?: '0+' | 'A+' | 'AB+';
    }

    const user1: User = {
        name: 'koi',
        email: 'eaad@gmail.com',
        age: 14,
        gender: 'Male',
    }



    // intersection (means and)

    type frontendDeveloper = {
        skils: string[],
        designation1: 'Frontend Developer'
    }
    type backendDeveloper = {
        skils: string[],
        designation2: 'Backend Developer'
    }
    type fullstackDeveloper = frontendDeveloper & backendDeveloper;

    const developer: fullstackDeveloper = {
        skils: ['HTML', 'CSS', 'NODE'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }


















}