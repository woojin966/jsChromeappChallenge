//object 계산기
const calculator = {
    plus: function(a,b){
        //a + b;
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    times: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        a / b;
    },
    power: function(a,b){
        a ** b;
    }
}//return과 console.log랑은 다르다. return은 함수의 안에서 실행의 결과를... 화면에 출력... 어쨋든 함수의 동작이 구현? console.log는 콘솔에 찍히는 행위로 화면이 아니라 콘솔에서 이루어짐 함수 밖 행동

const plusVal = calculator.plus(42,18);
console.log(plusVal); //undefined 뜸 : 함수 실행 코드를 return해줘야 그 값이 변수에 돌아와? 비로소 정의되어 콘솔에 결과값이 나온다 (a + b만 있었을때는 값이 저장되지 않아? undefined. return a + b는 실행값을 돌려서 변수에 담겨서 콘솔ㅇ 찍힘)
// -> return! To get a value from a function : 함수 실행 값을 받기 위해 return을 사용한다 : function 실행 값 내지 결과를 받았기 때문에 되부에서도 소통할수 있따. : 함수내에서 콘솔찍기가 아니고, 함수값 리턴해서 함수 밖에서 콘솔찍음
const plusRslt = calculator.plus(2,3);
const minusRslt = calculator.minus(plusRslt,60);
const timesRslt = calculator.times(plusRslt,minusRslt);
console.log(plusRslt);
console.log(minusRslt);
console.log(timesRslt);
//리턴 전에는 함수에 보낸 인수는 함수 밖에서는 작동할 수 없었는데, 함수에서 값일 리턴하므로 인수끼리 상호의존족으로 외부에서도 ? 작동할수 있다? 그런거 같음

// 계산의 결과 값이든 계산의 결과값이 아닌, 함수 행위에서 내보내고 싶은 값을 return하면 된다
function weirdCal(num){
    num + 3;
    return 'hello';
}
const calCorrectIs7But = weirdCal(4);
console.log(calCorrectIs7But);
//계산 결과는 7인데 'hello'를 리턴해서 콘솔에는 hello