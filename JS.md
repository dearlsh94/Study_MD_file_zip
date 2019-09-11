# Index

1. Node
   1. Add Node
   2. Create Node
   3. Delete Node
   4. Clone Node
   5. Control Node Data
   6. Replace Node
2. BOM
   1. Window
   2. Location
   3. History
   4. Screen
   5. Navigator
   6. Dialog box
   7. Timer
3. Event

# Node

## Add Node

### appendChild()

- 새로운 노드를 해당 노드의 자식 노드 리스트(child node list)의 맨 마지막에 추가

```
function appendNode() {
    var parent = document.getElementById("list");  // 아이디가 "list"인 요소를 선택함.
    var newItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.

    parent.appendChild(newItem);                   // 해당 요소의 맨 마지막 자식 노드로 추가함.
}
```

### insertBefore()

- 새로운 노드를 특정 자식 노드 바로 앞에 추가
- 부모.insertBefore(신규, 자식);

```
function appendNode() {

    var parent = document.getElementById("list");           // 아이디가 "list"인 요소를 선택함.

    var criteriaItem = document.getElementById("criteria"); // 아이디가 "criteria"인 요소를 선택함.

    var newItem = document.getElementById("item");          // 아이디가 "item"인 요소를 선택함.

    parent.insertBefore(newItem, criteriaItem); // 해당 노드를 기준이 되는 자식 노드의 바로 앞에 추가함.

}
```

### insertData()

- 텍스트 노드의 텍스트 데이터에 새로운 텍스트를 추가
- 텍스트노드.insertData(오프셋, 새로운데이터);

```
var text = document.getElementById("text").firstChild; // 아이디가 "text"인 요소의 텍스트 노드를 선택함.

function appendText() {

    text.insertData(6, " 나른한 "); // 텍스트 노드의 6번째 문자부터 " 나른한 "이란 텍스트를 추가함.

}
```



## Create Node

### createElement()

```
function createNode() {

    var criteriaNode = document.getElementById("text"); // 기준이 되는 요소로 아이디가 "text"인 요소를 선택함.

    var newNode = document.createElement("p");          // 새로운 <p> 요소를 생성함.

    newNode.innerHTML = "새로운 단락입니다.";

    document.body.insertBefore(newNode, criteriaNode);  // 새로운 요소를 기준이 되는 요소 바로 앞에 추가함.

}
```

### createAttribute()

```
function createNode() {
	// 아이디가 "text"인 요소를 선택함.
    var text = document.getElementById("text");
    
	// 새로운 style 속성 노드를 생성함.
    var newAttribute = document.createAttribute("style");
    newAttribute.value = "color:red";
    
	// 해당 요소의 속성 노드로 추가함.
    text.setAttributeNode(newAttribute);
}
```

### createTextNode()

```
function createNode() {
	// 아이디가 "text"인 요소를 선택함.
    var elementNode = document.getElementById("text");
	// 새로운 텍스트 노드를 생성함.
    var newText = document.createTextNode("새로운 텍스트에요!");
	 // 해당 요소의 자식 노드로 추가함.
    elementNode.appendChild(newText);
}
```

## Delete Node

### removeChild()

```
var parent = document.getElementById("list");      // 아이디가 "list"인 요소를 선택함.
var removedItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.

parent.removeChild(removedItem);                   // 지정된 요소를 삭제함.
```

### removeAttribute()

```
var text = document.getElementById("text"); // 아이디가 "text"인 요소를 선택함.

text.removeAttribute("style");              // 해당 요소의 "style" 속성을 제거함.
```



## Clone Node

### cloneNode()

```
function cloneElement() {

    var parent = document.getElementById("list");     // 아이디가 "list"인 요소를 선택함.
    var originItem = document.getElementById("item"); // 아이디가 "item"인 요소를 선택함.
    
	// 해당 노드를 복제하여 리스트의 맨 마지막에 추가함.
    parent.appendChild(originItem.cloneNode(true));   
    // true -> 속성 노드 복제, 자식 노드 복제
    // false -> 속성 노드 복제

}		
```



## Control Node Data

	### setAttribute()

- element.setAttribute( 'attributeName', 'attributeValue' )

```
var para;

function changeAttribute() {
    // 모든 <p> 요소중에서 첫 번째 요소에 클래스 속성값으로 "para"를 설정함.
    document.getElementsByTagName("p")[0].setAttribute("class", "para");

    // 클래스가 설정되면 해당 클래스에 설정되어 있던 스타일이 자동으로 적용됨.
}
```

### nodeValue()

```
var para = document.getElementById("text"); // 아이디가 "text"인 요소를 선택함.

function changeText() {
    para.firstChild.nodeValue = "텍스트 변경 완료!";
}
```



## Replace Node

### replaceChild()

- 기존의 요소 노드를 새로운 요소 노드로 교체
- 교체할노드 = 부모노드.replaceChild(새로운자식노드, 기존자식노드);

```
var parent = document.getElementById("parent"); // 부모 노드를 선택함.
var first = document.getElementById("first");
var third = document.getElementById("third");

function changeNode() {
	// first 요소를 삭제하고, 그 대신 third 요소를 삽입함.
    parent.replaceChild(third, first);
}
```

### replaceData()

- 텍스트 노드의 텍스트 데이터 교체	
- 텍스트노드.replaceData(오프셋, 교체할문자수, 새로운데이터);

```
var text = document.getElementById("text").firstChild; // 아이디가 "text"인 요소의 텍스트 노드를 선택함.

function changeText() {

    text.replaceData(7, 4, "저녁 7"); // 텍스트 노드의 7번째 문자부터 4개의 문자를 "저녁 7"로 교체함.

}
```

## Find Node Relation

```
var demodiv = document.getElementById("demodiv");				// 대상 노드 선택

var parent = demodiv.parentNode;								// 부모 노드 속성 확인
var children = demodiv.childNodes;								// 자식 노드 속성 확인
```

# BOM

- Browser Object Model

## Window

- Web Browser의 창 (Window)를 나타내는 객체
- 전역 객체로 사용 가능
- javascript의 모든 객체, 전역 함수, 전역 변수, DOM 요소 들은 모두 Window 객체의 프로퍼티

- window. 접두사 생략하여 사용 가능
  - window.innerWidth -> innerWidth
- document 객체를 프로퍼티로 소유

### Window 크기 구하기

```
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

document.write("웹 브라우저의 너비는 " + windowWidth + "픽셀이고, 높이는 " + windowHeight + "픽셀입니다.");

```

### Window 열기

```
var newWindowObj;

// 변수 strWindowFeatures를 통해 새롭게 여는 브라우저 창의 옵션들을 일일이 설정할 수 있음.

var strWindowFeatures = "menubar = yes,location = yes,resizable = yes,scrollbars = yes,status = yes";

function openWindow() {

    newWindowObj = window.open("/html/intro", "HTML 개요", strWindowFeatures);

}
```

### Window 닫기

```
function openWindow() {

    newWindowObj = window.open("/html/intro", "HTML 개요", strWindowFeatures);

}

function closeNewWindow() { // 새롭게 연 브라우저 창을 window 객체를 이용하여 다시 닫을 수 있음.

    newWindowObj.close();

}
```

### Document

- 태그 검색 방법

```
document.getElementById(아이디);				// id로 검색
document.getElementsByname(name속성값);		// name으로 검색 배열 반환
document.getElementsByTagName(태그이름);	   // tag로 검색 e.g. button, input ... 배열 반환
document.getElementsByClassName(클래스이름);	  // class로 검색 배열 반환
```

- 요소 생성

```
document.createElement(HTML요소);
document.write(텍스트);
```

- 이벤트 추가

```
document.getElementById(아이디).onclick = function(){ 실행할 코드 }
```

## Location

- 현재 브라우저에 표시된 HTML 문서의 주소 확인
- 브라우저에 새 문서 로드

- URL과 URI의 차이
  - URL : Uniform Resource Locator
    * 파일의 위치를 나타내는 주소
    * 호스트 이름(host name) + 파일 경로명(path name)
    * ex ) domain + /images/img01.gif
  - URI : Uniform Resource Identifier
    * rewrite 주소 또는 RESTful 주소 등과 같이 경로를 나타내는 주소
    * ex ) /main/login

```
// URL 주소 확인
location.href

// 호스트 이름 확인
location.hostname
// 파일 경로 확인
location.pathname

// 새 문서 로드
location.assign("/index.php");

// 현재 문서 히스토리에서 제거 후 새 문서 로드
location.replace("/index.php");

// 현재 문서 재 로드
location.reload();
```

## History

- 브라우저의 히스토리 정보를 문서와 문서 상태 목록으로 저장하는 객체

```
// 히스토리 목록 개수
history.length

// 히스토리 이동
history.back();
history.go(-1);
history.forward();
```

## Screen

- 사용자의 디스플레이 화면에 대한 다양한 정보를 저장하는 객체

```
document.write("현재 사용자의 디스플레이 화면의 너비는 " + screen.width + "픽셀입니다.<br>");
document.write("현재 사용자의 디스플레이 화면의 높이는 " + screen.height + "픽셀입니다.<br>");
 
document.write("현재 브라우저 창의 너비는 " + window.outerWidth + "픽셀입니다.<br>");
document.write("현재 브라우저 창의 높이는 " + window.outerHeight + "픽셀입니다.<br>");

document.write("실제 사용할 수 있는 화면의 너비는 " + screen.availWidth + "픽셀입니다.<br>");
document.write("실제 사용할 수 있는 화면의 높이는 " + screen.availHeight + "픽셀입니다.");
```

## Navigator

- 브라우저에 대한 다양한 정보를 저장하는 객체

```
// 실행 중인 OS
navigator.platform

// 현재 브라우저 기본 언어
navigator.language

// JAVA 애플릿 실행 여부
navigator.javaEnabled() // true OR false

// Cookie 사용 여부
navigator.cookieEnabled // true OR false
```

## Dialog box

### alert()

- 사용자에게 간단한 메시지를 보여주고, 그에 대한 사용자의 확인 대기

```
function alertDialogBox() {

    alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");

}
```

### confirm()

-  사용자에게 간단한 메시지를 보여주고, 사용자가 확인이나 취소를 누르면 그 결과를 불리언 값으로 반환

```
function confirmDialogBox() {

    var str;

    if (confirm("확인이나 취소를 눌러주세요!") == true) {

        str = "당신은 확인을 눌렀습니다!";

    } else {

        str = "당신은 취소을 눌렀습니다!";

    }

    document.getElementById("text").innerHTML = str;

}
```

### prompt()

- 사용자에게 간단한 메시지를 보여주고, 사용자가 입력한 문자열을 반환

```
function promptDialogBox() {

    var inputStr = prompt("당신의 이름을 입력해 주세요 : ", "홍길동");

    if (inputStr != null) {

        document.getElementById("text").innerHTML = "당신의 이름은 " + inputStr + "입니다.";

    }

}
```

## Timer

### setTimeout()

- 명시된 시간이 지난 뒤에 지정된 함수를 호출

```
function startTimeout() {

    setTimeout(printCurrentDate, 2000);

}

function printCurrentDate() {

    document.getElementById("date").innerHTML = new Date();

}
```

### setInerval()

- 지정된 시간 간격마다 지정된 함수를 반복적으로 호출

```
function startInterval() {

    setInterval(printCurrentDate, 2000);

}

function printCurrentDate() {

    document.getElementById("date").innerHTML += new Date() + "<br>";

}
```

### clearTimeout()

- setTimeout() 메소드의 반환값을 clearTimeout() 메소드의 인수로 전달하면, 계획된 함수의 호출을 취소

```
var timeoutId;

function startTimeout() {

    timeoutId = setTimeout(printCurrentDate, 2000);

}

function cancelTimeout() {

    clearTimeout(timeoutId);

}

function printCurrentDate() {

    document.getElementById("date").innerHTML += new Date() + "<br>";

}
```

### clearInterval()

- setInterval() 메소드의 반환값을 clearInterval() 메소드의 인수로 전달하면, 반복되는 함수의 호출을 취소

```
var timeoutId;

function startInterval() {

    timeoutId = setInterval(printCurrentDate, 2000);

}

function cancelInterval() {

    clearInterval(timeoutId);

}

function printCurrentDate() {

    document.getElementById("date").innerHTML += new Date() + "<br>";

}
```

# Event

## Event

- 웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생
- 이벤트에 반응하여 특정 동작을 수행
- 클라이언트 측 자바스크립트를 비동기식 이벤트 중심(event-driven)의 프로그래밍 모델

### 이벤트 명세

- event specification

- DOM Level 3 이벤트 명세
- HTML5 관련 이벤트 명세
- 모바일 장치를 위한 이벤트 명세

## Event Listener

-  = event handler

- 이벤트가 발생했을 때 그 처리를 담당하는 함수

### Listener 등록

- 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록

```
window.onload = function() {                    // 이 함수는 HTML 문서가 로드될 때 실행됨.

    var text = document.getElementById("text"); // 아이디가 "text"인 요소를 선택함.

    text.innerHTML = "HTML 문서가 로드되었습니다.";

}

<p onclick="alert('문자열을 클릭했어요!')">이 문자열을 클릭해 보세요!</p>
```

- 객체나 요소의 메소드에 이벤트 리스너를 전달

```
// Single Event 등록
var showBtn = document.getElementById("btn"); // 아이디가 "btn"인 요소를 선택함.
showBtn.addEventListener("click", showText);  // 선택한 요소에 click 이벤트 리스너를 등록함.

function showText() {
    document.getElementById("text").innerHTML = "짜잔~!! 텍스트가 나타났어요!!";
}

// Multi Event 등록
var btn = document.getElementById("btn");        // 아이디가 "btn"인 요소를 선택함.
btn.addEventListener("click", clickBtn);         // 선택한 요소에 click 이벤트 리스너를 등록함.
btn.addEventListener("mouseover", mouseoverBtn); // 선택한 요소에 mouseover 이벤트 리스너를 등록함.
btn.addEventListener("mouseout", mouseoutBtn);   // 선택한 요소에 mouseout 이벤트 리스너를 등록함.

function clickBtn() {
    document.getElementById("text").innerHTML = "버튼이 클릭됐어요!";
}

function mouseoverBtn() {
    document.getElementById("text").innerHTML = "버튼 위에 마우스가 있네요!";
}

function mouseoutBtn() {
    document.getElementById("text").innerHTML = "버튼 밖으로 마우스가 나갔어요!";
}
```

- Parameter Event 등록

```
var btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener("click", addButton);

function addButton() {
	var value = document.getElementById("buttonName").value;
  
	var newBtn = document.createElement("button");
    newBtn.setAttribute("id", value);
    newBtn.setAttribute("class", "button-01");
    newBtn.innerHTML = value;
  
  // alert 버튼 생성할 경우 이벤트 추가
  if (newBtn.id == "alert") {
  	newBtn.addEventListener("click", (e) => {
  		e.stopPropagation();
  		alertButton(value);
    });
  }
  
  	body[0].appendChild(newBtn);
}

function alertButton(msg) {
	alert(msg);
}
```



### Listener 제거

```
function clickBtn() {
    btn.removeEventListener("mouseover", mouseoverBtn);
    btn.removeEventListener("mouseout", mouseoutBtn);
    document.getElementById("text").innerHTML = "이벤트 리스너가 삭제되었어요!";
}
```

## 이벤트 동작 방식

- 버블링(bubbling) 전파 방식
  - 이벤트가 발생한 요소부터 시작해서, DOM 트리를 따라 위쪽으로 올라가며 전파되는 방식
  - Window 객체까지 계속 전파

```
// 각 요소마다 버블링 방식으로 click 이벤트 리스너를 등록함.
document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("spanBox").addEventListener("click", clickSpan);

function clickDiv(event)  { document.getElementById("text").innerHTML += "div 요소를 click 하셨네요!<br>"; }
function clickPara(event) { document.getElementById("text").innerHTML += "p 요소를 click 하셨네요!<br>"; }
function clickSpan(event) { document.getElementById("text").innerHTML += "span 요소를 click 하셨네요!<br>"; }
```

- 캡쳐링(capturing) 전파 방식
  - 이벤트가 발생한 요소까지 DOM 트리의 최상위부터 아래쪽으로 내려가면 전파되는 방식
  - addEventListener() 메소드의 세 번째 인수에 true를 전달

```
// 각 요소마다 캡쳐링 방식으로 click 이벤트 리스너를 등록함.
document.getElementById("divBox").addEventListener("click", clickDiv, true);
document.getElementById("paraBox").addEventListener("click", clickPara, true);
document.getElementById("spanBox").addEventListener("click", clickSpan, true);
```

- 이벤트 전파 취소

```
function clickLink(event) {
    event.preventDefault();  // 링크의 기본 동작을 취소함.
    document.getElementById("text").innerHTML += "링크의 기본 동작을 막았어요!<br>";

    event.stopPropagation(); // 이벤트의 전파를 취소함.
    document.getElementById("text").innerHTML += "이벤트의 전파를 막았어요!<br>";
}
```

# 스코프 체인

- scope chain
- 유효한 scope가 LinkedList 형식으로 관리 되는 것.
- 오직 함수만이 유효한 scope의 단위 (if, for 등은 유효 범위가 없음.)

# 클로저

- 외부 함수의 변수에 접근할 수 있는 내부 함수

- 즉, 함수 내부에 작성된 함수

- 외부 함수의 변수 및 파라미터에 접근 가능
- javascript 함수는 일급객체로 간주된다.



# 출처

[tcpschool javascript](http://tcpschool.com/javascript/intro)

