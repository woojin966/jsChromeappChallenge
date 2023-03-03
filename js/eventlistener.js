const title = document.getElementById('title');
//queryselector는 똑같은 요소가 여러개 있을때, 첫번째 있는 요소만 잡는다. 같은 요소 다 가져오려면 querySelectorAll

//consolog.dir(); ()안 요소의 상세정보를 콘솔에서 볼 수 있다

//셀렉터.style.css = ''; js로 css 스타일을 바꿀 수 있따
title.style.color = 'blue';

function mouseoverTitleChg(){
    title.innerText = 'got you!';
}
function mouseOutTitleChg(){
    title.innerText = 'Grab you';
}
function mouseClickTitleChg() {
    title.innerText = 'Text!!';
}
function windowResize() {
    document.body.style.backgroundColor = 'tomato';
    //변수 지정 없이 body에 접근 document.body. body안에 요소들은 이렇게 안되고 queryselectors나 getelemnet~로 선택해야함 그냥 그렇게 알으셈
}
function windowCopy() {
   alert('copier!');  //우클릭 복사하기나 ctrl+c누르면 알러트
}
function windowOffline() {
    alert('wifi no!!');
}
function windowOnline() {
    alert('wifi on!!');
}

title.addEventListener('mouseover', mouseoverTitleChg);
// = title.onmouseover = mouseoverTitleChg;
title.addEventListener('mouseout', mouseOutTitleChg);
//javascript에 함수명을 넘기고 행위를 했을때 넘긴 함수명의 함수를 실행 : 함수명 뒤에 ()를 붙이지 않ㄴ느 ㄴ이유가 함수를 바로 실행하는게 아니고, 행이이벤트가 벌어지면 실행해야 하니까
//addEventlistner작성하면 나중에 removeEventlister를 실행시킬수 있어 새로운 함수를 발동하거나 확장?할 수 있따
title.addEventListener('click', mouseClickTitleChg);
//window는 변수 서정 없이 window라고 함수 설정해주거나 활용하면 됨
window.addEventListener('resize', windowResize);
//wifi 이벤트
//클립보드 이벤트?
window.addEventListener('copy', windowCopy);
//와이파이 연결됬는지 안됬는지
window.addEventListener('offline', windowOffline);
window.addEventListener('online', windowOnline);