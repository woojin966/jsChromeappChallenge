const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input'); //c첫번째 인품 텍스트 인풋이 잡힘. 쿼리 셀렉터로 잡을때 동일 요소 여러가지면 첫번째것만 잡힘
//const loginButton = loginForm.querySelector('.loginBtn'); loginForm submit 이벤트로 대체할거라 폐기
const a = document.querySelector('a');

function onLoginSubmit(e) {
    const username = loginInput.value;
    // if(username == ''){
    //     alert('please write your name')
    // }else if (username.length >= 12){ //username 글자수 12자 이상일시
    //     alert('your name is wrong');
    // } //input required -> if문 안써도 됨, maxlength = 15 -> else if문 안써도 됨

    e.preventDefault(); //submit 후 브라우저 새로고침 현상 막음 : 이벤트 동작시 브라우저의 기본 동작 막음 argument 강의 작성한거 다시 볼것 : 인풋 정보 입력 섭밋후 새로고침 안하고 그 페이지에서 다른 동작을 더 하기 위함이다
}

function handleLink(event){
    console.log(event); //함수의 정보를 담은 argumnet event에 대한 모든 정보가 콘솔에 찍힌다
    event.preventDefault(); //클릭 이벤트 진행시 실행되는 브라우저의 기본동작을 막을 것이다 : preventDefault전에는 아래 알러트가 실행되고 확인을 누르면 링크에 연결된 페이지로 이동된다. 하지만 브라우저의 동작을 막으니 알러트 확인 후 이동되지 않는다. : 콘솔에 찍힌 event 정보중 defaultPrevented : true;로 되어있다. 브라우저 기본동작 막았다는 뜻(false는 안막음. 브라우저가 이벤트에 대한 기본동작 실행함)
    alert('click');
}

//loginButton.addEventListener('click', loginBtnClick); 클릭시 브라우저 새로고침 되서 폐기
loginForm.addEventListener('submit', onLoginSubmit); //addEventListener로 이벤트 실행시킬땐 함수뒤에() 안붙임. 함수()하면 브라우저가 자동으로 시켜버림. 우린 섭밋 이벤트 발동시 함수를 실행시키기 때문에 브라우저 맘대로 실행시키면 안됨. 그러니까 브라우저 실행시 함수 실행시킬때만 함수()

a.addEventListener('click', handleLink);