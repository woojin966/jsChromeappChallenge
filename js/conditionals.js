//parseInt
//const age = prompt('how old are you?');
//prompt는 값을 받을때까지 js를 멈춰주지만  css로도 스타일을 잡을 수 없어서 잘 안씀

//console.log(age); //입력한 숫자
//console.log(typeof(age)); //근데 숫자가 아니라 스트링이라고 함
//console.log(age, parseInt(age)); //그래서 숫자화해서 콘솔찍음 : parseInt
//parseInt 스트링을 숫자화
//parseInt('4'); // 4
//console.log('hello', parseInt('hello')); // hello, NaN 아무리 그래도 진짜 문자를 숫자로는 변환 못함 그래서 NaN : not a number

//so age를 숫자데이터로 저장하고 싶어.
const age = parseInt(prompt('how old are yoy????'));
console.log(age, typeof(age));

//if 조건문
console.log(isNaN(age)); //숫자가 인지 아닌지 true or false : 숫자 감별 isNaN은 불린으로 트루와 폴스를 뱉음 true - 숫자냐아니냐?응(스트링) , false - 숫자아니냐? 아님(숫자)

if(isNaN(age) == true){ //숫자아님
    alert('please type a number');
}else{ //숫자임
    alert('ok your age is ' + age + ' years old');
}