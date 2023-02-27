let obj = {};

let person = {
    name: "Vova",
    age: 36,
    isMale: true
};
console.log(`Age is: ${person.age}`);
console.log(person.isMale);
console.log(person.name);

let endpoint = '/help',
    baseUrl = 'someUrl';
console.log(`http://${baseUrl}/${endpoint}`);

let person1 = new Object();
person1.name = "Fedia";
person1.age = 33,
person1.isMale = true;
console.log(person1);

//array
let array = [];

let arr2 = ['text', 1, {}, []];
console.log(arr2);

let numObj = {a:1, b:2, v:3};
console.log(numObj.a);

let salary = {
    'Anna': 2000,
    'Vova': 5000
};

let sal3 = {
    a: 1,
    v: 5000,
    c: 3
}; 
console.log(sal2.a)

let sal2 = {
    a: 1,
    v: 5000,
    c: {
        name: "Dima",
        age: 33,
        isMarried: true
    },
    d: ['ana', 1000, 'gggg', 4000]
}; 
console.log(sal2.c.name)
console.log(sal2.d[3])

//methods and properties

let sT = " text of SOMEthings ";
// console.log(sT.length);
// console.log(sT.substring(0, 4)); //cut letters from Index1 to Index2
// console.log(sT.toUpperCase()); //
// console.log(sT.toLowerCase()); //
// console.log(sT.indexOf('x')); // return number(count from 0) of elemnts
// console.log(sT.slice(0,4)); // return letters from Index1 to Index2
//console.log(sT.trim()); //teakes of spaces from start and end of sentec
// console.log(sT.charAt(1)) // returns letter of index
// console.log(sT[1]) // same as previous 

let mA = [];
    mA.push("Hello");
    mA.push("");
    mA.push("Val");
// console.log(mA);;
// console.log(mA.length)
//console.log(mA.join(" ")); //add spaces between elements
// console.log(mA[mA.length-2]); //returs elements of array
console.log(mA.pop()); //???

 let someN = "12.6 px";
 let someN2 = "12.6 px";
 let someN3 = 12.6;
// console.log(Math.round(someN));
// console.log(parseInt(someN) + someN2 + someN3); 
console.log(parseInt(someN) + someN3); 
console.log(parseFloat(someN)); // conver string to number