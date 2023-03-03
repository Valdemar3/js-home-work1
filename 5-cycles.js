let num = 80;

// while
while (num < 85) {
    console.log(num);
    num++;
}

//do - while

let num2 = 80;
do {
    console.log(num2);
    num2++;
} while (num2 < 85);

// for

let num3 = 80;
for (let i=0; i<8; i++) {
    console.log(num3);
    num3++;
}

let num5 = 80;
for (let i=0; i<8; i++) {
  if(num5 === 85) {
    break;
  }
  console.log(num5);
  num5++;
}

//--
for (let i=0; i<8; i++) {
  if(i == 5) {
    continue;
  }
  console.log(i);
 
}

for (let i = 0; i<3; i++) {
    console.log(i + 'i');
    for (let j=0; j<3; j++) {
        console.log(j + 'j')
    }
}

