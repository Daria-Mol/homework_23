"use strict"

console.log('35' + -"22");

console.log('35' - +'22');

console.log('35' * "22");

//console.log('558' > 22++);

console.log('558' > 22);

let usersCounter = 0;
let newUsers= usersCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');

console.log(!false && 11);
console.log(false && 11);
console.log(!false && 0);

console.log(18 && !'');
console.log(11 || true);
console.log(0 || true);

let name = 0 ;
console.log(name ?? "Без імя");



/////////////////////////////////////////////////////////////////////////

if (1 === '1'){
	console.log("True")
}else{
	console.log("false");
}

if (1 =='1'){
	console.log("True")
}else{
	console.log("false");
}

let message = (92 > '11' && 58 < 100) ? 'True' : 'False';
console.log(message);

if (0) {
	console.log('false');
}else if ( " " ) {
	console.log('true');
}
else{
	console.log('noll');
}

console.log('Цикли FOR та  WHILE. Домашнє завдання');
console.log('Завдання 1---------------------');
console.log("Цикл For");
for (let i=1; i < 6; i++){
	console.log(i);
}
console.log('Цикл WHILE');
let n=1;
while (n < 6){
	console.log(n);
	n++;
}
console.log('Цикл WHILE');
n=1;
do{
	console.log(n);
	n++;
}while (n < 6);

console.log('Завдання 2-----------------------');
let num=8;
 while (num){
	console.log(num);
	num--;
 }

 console.log('Завдання 3-----------------------');
 console.log("Цикл For");
 for (let i=0; i < 3; i++){
	console.log(`Число: ${i}`);
}
console.log("Цикл While");
let num2 = 0; 
 while(num2 !== 3){
	console.log(`Число: ${num2}`);
	num2++;
 }
 console.log("Цикл  DO While");
let num3 = 0; 
 do{
	console.log(`Число: ${num3}`);
	num3++;
 }while (num3 !== 3)

 console.log('Завдання 4-----------------------');
 for (let i=0; i < 2; i++){
	for (let j=0; j < 3; j++){
	if (j==1){break}
	console.log(j);
	}
}

console.log('Числа у JS');
console.log('----------------------------------------------------------------------');
console.log('Завдання 1---------------------');

let numOne=Math.round((1.005 + Number.EPSILON)*100) / 100;
console.log(numOne);

console.log('Завдання 2---------------------');
let value = "135.58px";
console.log(parseFloat(value));

console.log('Завдання 3---------------------');
let value2 = 58 + "Frilancer";
if(isNaN(value2)){
	console.log('Результат виразу NaN');
}

console.log('Завдання 4---------------------');
console.log(Math.max(10, 58, 39, -150, 0));

console.log('Завдання 5---------------------');
console.log(Math.floor(58.858));


console.log('Рядки у JS');
console.log('----------------------------------------------------------------------');
console.log('Завдання 1---------------------');

let fls = "фрілансер";
let text = 'Привіт! я ${fls}';
console.log(text);
text = `Привіт! я ${fls}`;
console.log(text);

console.log('Завдання 2---------------------');

let str = "фрілансер";
let pos = str.indexOf('н');
console.log(`Позиція букви "н" у слові \'${str}\': ${pos}`);
console.log(str.slice(pos,pos+1));

console.log('Завдання 3---------------------');
let text2 = 123 + "456";
console.log(text2);

console.log('Завдання 4---------------------');
let text3 = "фрілансер";
console.log(text3.toUpperCase());


console.log('Завдання 5---------------------');
let str2 = "фрілансер";
let a = "лан";
let pos2 = str2.toLowerCase().indexOf(a.toLowerCase());

// console.log(a.length);
console.log(str2.slice(pos2,pos2+a.length));

console.log('Завдання 6---------------------');
let text4 = "фрілансер";
 console.log(text4.includes('лан', 4));







