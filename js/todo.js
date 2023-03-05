const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");
let toDos = []; //array가 덮어써지지 않고 쌓여야함 바꿀수 있는 변수 let으로 변경
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); //toDo array를 텍스트화(스트링) - 로컬스트리지는 스트링만 저장이 가능ㅇ하기 때문에 어레이를 스트링화 해야한다
//array 스트링화 - JSON.stringfy(어레이명); js object, array 뭐든 스트링화함
//스트링 arrayghk = JSON.parse("[sring,string,string,...]")
}

// todilist li삭제, 삭제 기능의 대한 정보를 event에 담는다
function deleteToDo(event){
    // 클릭된 버튼ㅇ 무엇인지 : active button 찾기
    const delTodoLi = event.target.parentElement; //클릭된 버튼의 부모  li를 변수
    delTodoLi.remove();
    toDos = toDos.filter(todos => todos.id !== parseInt(delTodoLi.id)); //arr toDos를 toDos.filter() 적용한 arr로 재선언 : 클릭한 li 해당 아이디를 가진 li들만 뱉 : 삭제한다는 뜻
    //parseInt(delTodoLi.id) : string인 delTodoLi.id를 숫자화
    saveToDos(); //toDos를 재정의했으니 꼭 마지막은 saveToDos를 실행
}

//todolist 생성, newtodo받아서 paintToDo 함수 정보를 담음
function paintToDo(newTodoObj){
    console.log("I will paint", newTodoObj);
    const TodoLi = document.createElement("li");
    const SpanIntodoLi = document.createElement("span");
    const delBtnIntodoLi = document.createElement("button");
    TodoLi.id = newTodoObj.id; //li에 아이디 생성
    SpanIntodoLi.innerText = newTodoObj.text; //span에 텍스트 할당
    delBtnIntodoLi.innerText = "❌";
    TodoLi.appendChild(SpanIntodoLi);
    TodoLi.appendChild(delBtnIntodoLi);
    //생성된 버튼에 삭제기능 심기 : 삭제기능은 위에 함수로 정의
    delBtnIntodoLi.addEventListener("click", deleteToDo);
    toDoList.appendChild(TodoLi); 
    //append도 동알한 방식으로 ul안에 li생성
    //append()가 추가할 수 있는 종류가 더 많아요. append()로는 문자열도 추가가 가능한데, appendChild()로는 객체만 추가할 수 있어요. :)
    // li.append("추가해주세요") → (가능)
    // li.appendChild("추가해주세요") → (불가능 - typeError)

    // 그리고 console.log로 두 개를 찍어보면 append()하고 appendChild()가 다르게 나와요!
}

//suvmit 새로고침되는 기본기능 막고, 내용 전송
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input 입력값을 저장한다음
    toDoInput.value = ""; //인풋을 비움 저장과 비움ㅇㄹ 반복
    const newTodoObj = {
        text : newTodo,
        id : Date.now(), //랜덤한 숫자(아마 초)를 id로 생성
    } //newTodo를 id가 있는? 묶음으로 newTodoObj 새로 선언 : id 넣는 이유는 삭제하기 위해
    toDos.push(newTodoObj); //id가 생긴 newTodoObj들을 toDos에 넣어서 array생성
    paintToDo(newTodoObj); //newTodo를 보내서 리스트생헝 함수 ㅂㄹ동
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
//string으로 localstrage에 저장된 toDos를 array화 하여 활용 : 스트링은 스크리브에허 활용 못... 텍스트라서.... 그렇다고 하자 아마 일러스트에서 깨진글자 같은건가봐

const saveToDosArr = localStorage.getItem("todos"); //로컬스트리지에 저장된 toDos 키의 값들을 가죠옴: 로컬스트리지에 심거나 가져오거나 지울때는 키명만 적기
console.log(saveToDosArr); //스트링 todos키값들이 보입 [ "a","b","c"]
if(saveToDosArr !== null){
    //lacalstrage에 toDos 값들이 있으면
    const parsedTodos = JSON.parse(saveToDosArr); //스트링 saveTodo들을 array로 만듬
    console.log(parsedTodos); //todos 스트링 키값들을 array화한게 보임 (3) ['a','b,'c'] : 스크립트에서 객체? 로서 활용가능해짐 각각
    
    //parsedTodos.forEach((e) => console.log("this is turn of ", e)); //parsedTodos array 항목 각각을 실어 sayHello 실행 : his is the turn of뒤에 각 항목들이 붙는다 array 항목만큼 '=>' : arrow 함수, 함수를 먼저 선언하고 함수명만 적던지 - forEach(sayHello), 선언 없ㅇ 바로 실행할거면 =>
    
    //로컬스토리지에 저장된 todos의 값들을 새로고침해도 리스트가 사라지지 않도록:paintToDo
    toDos = parsedTodos; //처음 []으로 선언한 toDos array를 입력해서 추가할때마다 쌓이는 parsedTodos를 반영? 변경? 암튼 toDos 재선언
    parsedTodos.forEach(paintToDo); //array된 todos 각각 개체들을 리스트화 : 새로고침후 리스트 안없어짐, 근데 새로고침후 다시 리스트 작성하고 새로고침하면 새로 입력한것만 리스트 이전것은 지워짐 -> toDos[]가 항상 비어져 있기 때문에!비어있게 선언하고 추가되는 게 쌓이는건 선언하지 않음 -> 위에 toDos array = parsedTodos array로 선언함에 따라 입력추가 할때마다 쌓이는 리스트로 성공
}else{
    //없으면
}

