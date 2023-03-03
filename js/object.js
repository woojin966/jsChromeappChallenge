const playerName = 'nico'; //string
const playerPoints = 121212; //num
const playerHandsome = false; //boolena
const plyerFat = 'little bit'; //string

//위으 q변수를 어레이를 활용하여 정리해보자
let player = ['nico', 121212, false, 'little bit']; //이 어레이로는 각 데이터가 뭘 의미하는지 알 수가 없다 : 변수에 지정한 특징 없이 값만 나열됨

//object : array 명 = { 특징 : 값, 특징 : 값, 특징: 값 ...... }; 
player =  {
    name: "nico",
    points: 121212,
    hansome: false,
    fat: 'little bit'
}
console.log(player);
//object array에서 추출 하는 두가지 방법
console.log(player.hansome); //false
console.log(player['name']); //nico
//object 데이터 항목의 값 바꾸기 : object.property = value;
//있지 않은 항목에 값을 작성하면, 수정이 되는게 아니고 추가 : 아래 내용
player.hansome = true;
console.log(player.hansome);
player.points = player.points + 15;
console.log(player.points); //121212 + 15 = 121227
//object 추가 : object.newProperty = value;
player.lastname = 'kim';
console.log(player); // object에 lastname: kim 추가됨