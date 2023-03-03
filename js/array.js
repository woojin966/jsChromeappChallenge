//array : const ArrayName = [ 요소, 요소, 요소, 요소 ];
//데이터로 이루어진 리스트
const daysofWeek = ['월', '화', '수', '목', '금', '토', '일'];
const nonsense = [1,2,"hi",4,5,'bye',true,false,undefined,null];
console.log(nonsense);

//array안에 데이터 뽑아쓰기 : 인덱스 번호 활용하기
console.log(daysofWeek[5]); //daysofweek 어레이에서 5번째 항목 콘솔찍기 : 토 [숫자]는 인덱스 번호로 인덱스 번호는 0부터 시작 그러므로 인덱스 5번은 토
//화요일을 콘솔로 찍어줘
console.log(daysofWeek[1]);
console.log(daysofWeek[1280]); //undefined 1280번째 데이터 없음, 정의됮 않음

//array안에 데이터 추가하기 : array.push(data or num or 'string);
daysofWeek.push('nothingDoingDay'); //funcstion
console.log(daysofWeek);


