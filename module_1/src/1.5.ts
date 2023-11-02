// reference type --> object
let tumi: {
    Country: "Bangladesh"; // type --> literal 
    readonly Capital: string;
    firstName: string;
    Age: number;
    Student: boolean;
    Job?: string; // optional
    isMArrid: boolean;
} = {
    Country: 'Bangladesh',
    Capital: "Dhaka",
    firstName: 'Waliullah',
    Age: 21,
    Student: true,
    isMArrid: false
}
// tumi.Capital = "SonarGoa"; 
// tumi.Country= "India" // cannot change