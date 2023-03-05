//weathermap API
const API = "ed99b98001e7cb16e76c6ecd9afedf5f";


function onGeoOk(position){
    const lat = position.coords.latitude; //latitude 위도
    const lon = position.coords.longitude; //longitude 경도
    console.log("You live in", lat, lon);
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric` //&units=metric : 화씨 -> 섭씨
    console.log(weatherURL);
    fetch(weatherURL).then((response) => response.json()).then((data) => {
        console.log(data.name, data.weather[0].main) //fetch는 promise, promise란 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어남 -> 외부? url에서 정보를 받아와야 하니까: 서버에 요청했는데 응답까지 5분정도 걸린다면(예시임) 즉각 반응할 수 있도록 해야함:then(), response로 받아서 바로 함수실행, response를 json -> json화 된 것 들중 원하는것 뽑기 data.name, data.weather, data.weather[0].main => kwangmyenog cloud
        const cityContainer = document.querySelector("#weather span:first-child"); //도시이름 담을 스판 정의
        const weatherContainer = document.querySelector("#weather span:last-child"); //날씨담을 스판정의 
        cityContainer.innerText = data.name; //data.name을 cityContainerdp
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;//data.weather[0].main, data.main.temp을 weatherContainer
    });
} //getCurrentPosition의 성공함수는 position(위치?)를 받는다
function onGeoErr(){
    alert("Can't find you, No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr); //위치 함수, ()들어갈 argument가 2개 필요하다. 하나는 성공, 하나는 실패 : 웹이 로드될때 위치 허용을 묻는 알림이 뜸 허영 -> 성공함수, 차단->실패함수