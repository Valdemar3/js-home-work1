/* Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/


/**
 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
 */
    const randomN = (min, max) => {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }

    const hWf2 = (price2) => {
    if ((1000 <= price2) && (price2 <= 1900) ) {
        console.log('Price',`${price2}`,`is between 1000 and 1900`)
    } else {
        console.log ('Price',`${price2}`,`is NOT between 1000 and 1900`)
    }
}
   hWf2(randomN(1,2000));

// let num1 = window.prompt("Enter the first number:");
// let num2 = window.prompt("Enter the second number:");
        
// console.log("The first number you entered is: " + num1);
// console.log("The second number you entered is: " + num2);

/* 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться 
    між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, 
    а інший без цього оператора.
    Результат виводити в консоль.
*/

function randomN (min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

const hWf3 = (price3) => {
    if ( !(1001 > price3) && !(price3 > 1900)) {
        console.log('Price',`${price3}`,`is between 1001 and 1900`)
    } else {
        console.log ('Price',`${price3}`,`is NOT between 1001 and 1900`)
    }
}
hWf3(randomN(900,1901));

/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/
const seasons = (time) => {
    if (time=='sum') {
        console.log('Time',`${time}`,'is Summer')
} else if (time =='aut') {
    console.log('Time',`${time}`,'is Autom')
} else if (time == 'spr') {
    console.log('Time',`${time}`,'is Spring')
} else if (time == 'win') {
    console.log('Time',`${time}`,'is Winter')
} else console.log('Not a Time')
}

/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/
const whichMore = (a,b,c) => {
    let max=0;
    if (a>b){
        max = a;
    } else max = b;
    if (c>max) {
        max = c;
    }
    console.log(max);
}

whichMore(2,3,4)

/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

const tellMeDay = (dayNumber) => {
    switch(dayNumber) {
        case 1:
            console.log('Day number is',`${dayNumber}`,'is means today is Monday')
        break;
        case 2:
            console.log('Day number is',`${dayNumber}`,'is means today is Tuesday')
        break;
        case 3:
            console.log('Day number is',`${dayNumber}`,'is means today is Wednesday')
        break;
        case 4:
            console.log('Day number is',`${dayNumber}`,'is means today is Thursday')
        break;
        case 5:
            console.log('Day number is',`${dayNumber}`,'is means today is Friday')
        break;
        case 6:
            console.log('Day number is',`${dayNumber}`,'is means today is Saturday')
        break;
        case 7:
            console.log('Day number is',`${dayNumber}`,'is means today is Sunday')
        break;
    }
}

tellMeDay(5);

/**
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, 
    символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
 */
let val='+';
    switch (val) {
        case '+':
        console.log(3+2);
        break;
        case '-':
        console.log(3-2);
        break;
        case '/':
        console.log(3/2);
        break;
        case '*':
        console.log(3*2);
        break;
    }

/**
8.*  Використовуючи властивості рядків (тип string), 
    та регулярний вираз (regular expression) видалити голосні букви зі слова.
 */
const replaceV  = (value1) => {
    console.log(value1.replace( /[euaio]/g, ":"))
}
replaceV('regular expression')

/* 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
