//const a = 5; //const는 변하지 않는 변수
let a = 5; //let은 갑이 변하는 변수
const b = 2; //만약 '2'라고 쓰면 숫자 2가 아니라 텍스트가 된다
const myName = 'nico'; //text는 따옴표나 쌍따옴표 안에. 변수는 띄어쓰기가 안된다 낙타나 _나 -로 구분해서 붙여쓰기

console.log(a + b);
console.log(a * b);
console.log(a / b); // 변수로 숫자를 여러번 바꾸지 않아도 된다. 숫자를 바꾸려면 변수 값만 바꾸면 ㄷ됨
console.log("hello" + myName); //스트링과 변수를 같이 쓰는 법\

 a = 8; //변수 a는 8로 바뀜. let은 처음에 변수 생성할때만 선언

 //const와 let이전에 var을 사용했는데, var은 변하지 않는 값이 정해지지 않아서 어디서 값이 수정되었는지 알 수없는 문제가 있어서 변수에 대한 정보를 보호할 수가 없다
 //Alwats const, Sometiomes let, Never var