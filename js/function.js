//function : function 함수명(){실행코드; ...} //실행코드 캡슐화해서 여러번 실행 가능
//인수:argument 함수가 실행하는 동안 어떤 정보를 함수에게 보낼수 있는 방법
function sayHello(nameOfperson){
    console.log(nameOfperson);
}

//함수 실행시 : 함수명(); 이렇게 선언
//인수 nameOfperson을 함수에 보내서 함수 sayHello실행 : console에 인수 namOfperson이 뜸, 인수는 2개까지
sayHello('nico'); //콘솔에 nico
sayHello('dal'); //콘솔에 dal
sayHello('lynn'); //콘솔에 lynnn

function personInfo(name, age){
    console.log('hi my name is ' + name + ', and ' + age + ' years old');
} //함수 personInfo 실행시 인수 name과 age를 받아, console.log를 실행
personInfo('ji','34');
personInfo('pj','36');

function plus(firseNum, SecondNum){
    console.log(firseNum + SecondNum);
}
plus(40,60);
plus(-4, 7);
//console(firseNum); //funution에서 받는 인수를 해당 함수 밖에서 선언하면 에러생김 해당 함수 내에서만 동작하는 법

function divide(a, b){
    console.log(a / b);
}
divide(60, 4);
divide(7060, 964);

//object와 함수
const player = {
    name : 'nico',
    sayHello : function(){
        console.log('hello');
    },
    getArgumentSayHello : function(yourName){
        console.log('hi, ' + yourName);
    }
}
player.sayHello(); //pbject 안에 있는 함수 실행하는 방법 : objecta명.특징(함수)();
player.getArgumentSayHello('ed');



