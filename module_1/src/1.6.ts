// normal & arrow function
function add(a: number, b: number = 10): number {
    return a + b;
}
// add(3, "3");
add(3, 3);

const arrowFunc = (a: number, b: number): number => a + b;

// in object --> call --> method 
const about = {
    name: "sei",
    balace: 12,
    addBalace(balace: number): string {
        return `tatal balance: ${this.balace + balace}`;
    },
    subtractBalance(balace: number): number {
        return this.balace + balace;
    }
}

const nums = [1, 32, 12, 9];
const newNums: number[] = nums.map((num: number): number => num * num);