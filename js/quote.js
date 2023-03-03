const quotes = [
    {
        quote : "새드걸보단 배드걸이 낫다",
        author : "트위터선생"
    },
    {   
        quote : "늦을땐 정말 늦었다",
        author : "명수옹"},
    {
        quote : "꿈은 없고요 놀고싶습니다",
        author : "명수옹"
    },
    {
        quote : "또라이한테 또라이라고 불렀ㄷ가 광견병걸림",
        author : "김예찌"
    },
] //object array

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

//Math.random() : 랜덤한 숫자를 내보냄
//Math.round() : 소수점 아래 숫자 반올림 5보자 작으면 버림 5보다 크면 올림 , Math.ceil() : 소수점 아래 0보다크면 올림, Math.floor() : 소수점 아래 버림
console.log(quotes[Math.floor(Math.random() * quotes.length)]);
//array quotes[인덱스 번호를 Math.random 숫자로 quotes개수 만큼 곱한 랜덤 숫자를 뽑아서, 소수점 아래를 버린 숫자로 할당함]; : array 개수만큼 랜덤하게 명언이 뽑힘
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote; //랜덤 명언array 항목에서 quote부분 추출
author.innerText = todayQuote.author; //랜덤 명언array 항목에서 author부분 추출 