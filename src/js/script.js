'use strict';
// alert(1);
// number
// string - "", '', ``
// true/false
//null
//undefined

let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
}

// Symbol

// alert(1243);
// console.log(number)
console.log(obj.name);
// let answer = confirm("Вам есть 18?");
// let answer = promt("Вам есть 18?");
// console.log(answer);

// console.log(4+4); это канкатенация
// let isChecked = true,
//     isClose = true;
//     console.log(isChecked && isClose) ;  //если выполнено оба равны true  &&- означает и
//     console.log(isChecked || isClose) ;  //если один из условий рано true  ||- означает или

// if (2*4 == 8*1){
//     console.log('верное выражение');
// } else{
//     console.log('Error');
// }
//  let answer = confirm("Вам есть 18?");
//  if(answer){

//      console.log("Проходите");
//  } else{
//      console.log("Уходи");
//  }

const num = 50;
if (num < 49) {
    console.log("Неправильно");
} else if (num > 100) {
    console.log("много");
} else {
    console.log("Верно");
}


for (let i = 1; i < 8; i++) {
    console.log(i);
}

function logging(a, b) {
    console.log(a + b);
}

logging(3, 5);
logging(4, 8)