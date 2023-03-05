const imgList = ['0.jpeg', '1.jpeg', '2.jpeg']; //array

const selectImg = imgList[Math.floor(Math.random() * imgList.length)]; //Math.random은 0과 1사이의 무작위성 랜덤숫자. 정수를 얻으려면 어레이의 개수만큼 곱해주는 이유이다
console.log(selectImg);

const bgImg = document.createElement('img');
bgImg.src = `img/${selectImg}`;
document.body.appendChild(bgImg);
