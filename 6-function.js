let a = 5;
let b = 3;
let c;

c = a+b;
console.log(c);
//.. some other code

a = 5;
b = 3;
c;

c = a+b;
console.log(c);

//--

function sum(a, b) {
    let c = a+b; 
    console.log(c);
}

sum(3,10);
sum(3,20);

let a1 = 11;
let b1 = 12;

sum(a1,b1);

function myFun(a, b) {
    let c = a + b;
    return c;

    c = b + a; // never start this code becose of return above
}

// function (a, b) { // cannot be asked beacouse has no Name
//     let c = a + b;
//     return c;
// }

const anonimFunc = function (a, b) {
    let c = a + b;
    
    return c;

}
let a3 = '1';
let b3 = 2;
console.log(anonimFunc(a3, b3));
//--
console.log(anonimFunc(a3, function (a, b) { // doesn't work normally
    let c = a + b;
    return c;
}));

function (a6, b6) { // anonimus function
    let c6 = a6 + b6;
    return c6;
}

// narrow function
//() => {}
    // it ('Describe of your test', ()=> {

    // })

    (a, b) => {
        let c = a + b;
        console.log(c);
    }
//---
const arrowFunc = (a, b) => {
    let c = a + b;
    console.log(c);
}
arrowFunc(1, 2)

const funcwithDefaultParams = (a, b = 3) => {
    return (a * b);
}
console.log(funcwithDefaultParams(2, 5));

const playWithReturn = () => {
    for (let i = 0; i<10; i++) {
        console.log(i);
        if (i == 6) {
            break;
        }
        console.log(';;;;')
    }
}

playWithReturn();

console.log(Date());

const myRequestWithDate = (field1, addedAt = Date()) => {

    // Body of our Request

    let myRequestBody = { // this is Object of Json
        someData: 1,
        someData2: 2,
        timeStamp: ''
    };
    myRequestBody.someData = field1;
    myRequestBody.timeStamp = addedAt;

    return myRequestBody;
}

console.log(myRequestWithDate('qw qw'));
console.log(myRequestWithDate('qw qw', '17:55'))

// callback

// function first(){
//     console.log('some text');
// }

// setTimeout(first, 5000); //first - function above, 5000 time in милисек

// console.log('123');

function first() {
    setTimeout(function(){
        console.log('First Function with delay 5s')
    }, 5000)
}

function second() {
        console.log('Second Function with no delay')
}

first();
second();

function someFuncWithCallback(param1, someCallBackFunc) {
    console.log(`Here is my param: ${param1}`);
    someCallBackFunc();
}

someFuncWithCallback('wqwqwqwqwqwq', function() {
    console.log('Here is TEXT from someFuncWithCallback')
})

function it (testDescription, testAction) {
    console.log(`Test: ${testDescription}`)
    testAction();
};

it ('Auth', () => {
    console.log('Some tests')
})