 // + конкатинация
 console.log('qwe'+ '123');
 console.log(123+ 321);
 console.log(2+ '123');
 console.log(2 + '123');

 // инкремент и декремент
// префиксная и постфиксная форма

let incr = 10,
    decr = 10;

incr++;
decr--;
console.log(incr,'!!',decr)

// I would like to buy fries potatos and hamburger if they are in stock

let hamburger = 0,
    fries = 9; // 0, null, undefined, "", Nan always=false, 1 or more = true. 0

    // if  (hamburger && fries) {
    //     console.log('Im full')
    // }
console.log(hamburger && fries)

//**---- */ */

let hamburgers2 = 2,
    cola2 = 2,
    nuggets2 = 2,
    fries3 = 2;

    if ((hamburgers2 > 2 && cola2 > 0) || (nuggets2 >1 && fries3 >1) ){
        console.log("everyone'r full")
    } 