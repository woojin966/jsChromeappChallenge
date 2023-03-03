const clock = document.querySelector('#clock');

// function sayHello() {
//     console.log('hello'); 5초마다 실행되게 하기 : 아래 setInterval
// }
// function sayBye() { 
//     console.log('bye'); //5초 후에 실행하게 하고 반복하지 않음: 아래 setTimeout
// }

// //정해진 시간마다 동작 : 2개의 argument를 받는다 - 첫번째 : 실행하고자 하는 function, 두번째 : 호출되는 function 간격을 몇초(ms)로 할건지(1초 = 1000, 4초 = 4000)
// setInterval(sayHello, 5000);

// //setInterval과 마찬가지로 동일한 2개의 argument를 받는다. 하지만 다른 점은 : setInterval은 지정한 간격 시간만큼 계속 반복 동작 하지만, setTimeout은 지정한 간격 시간후 한번만 동작하고 반복하지 않는다.
// setTimeout(sayBye, 5000);

//padStart : 스트링에 쓸 수 있는 기능, 숫자일경우 스ㅡ - padStart(최소글자숫자, 최소글자숫자아래일경우 앞에 채워넣을 "string") : 예시 2글자최소, 최소 아닐시 0을 추가 padStar(2, "0"); 
//글자 뒤에 추가할시는 padEnd(2,"0")
console.log('2'.padStart(2,"0")); //02

function getClock() {
    const date = new Date; //1초마다 새 date를 변수 date를 담을거임 : 1초마다 반복이니까 아래 setInterval
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); //date함수의 정보를 받기 위해 백틱`${변수명:정보}`

    const hour = String(date.getHours()).padStart(2,"0"); //padStart는 스트링에만 쓸 수 있어서 먼저 스트링시키고 패드스타트
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; //h2 clock에 date 중 시간,분,초만 넣기. 함수의 항목을 넣는거니까 마차가지로 백틱안에 작성. 넣기 1초마다
    clock.innerText = hour+':'+minutes+':'+seconds;
    // = clock.innerText = `${hour}:${minutes}:${seconds}`;
}
getClock(); //브라우저 시작후 바로 함수 동작 후, 아래 setInterval 동작
setInterval(getClock, 1000);

