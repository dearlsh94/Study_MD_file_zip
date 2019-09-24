///////////////////////////////////////////// Test Code 작성 시작
var body = document.getElementsByTagName("body");

// 버튼 생성 테스트
var n1 = createButton("button", "btnCreate", "btnCreate", "btn-03", "CREATE", false, document.getElementById("div01"));
var n2 = createButton("button", "btnDelete", "btnDelete", "btn-03", "DELETE", false, document.getElementById("div02"));
var n3 = createButton("button", "btnNewInput", "btnNewInput", "btn-03", "CREATE INPUT", false, document.getElementById("div03"));
var n4 = createButton("button", "btnNewCheckBox", "btnNewCheckBox", "btn-03", "CREATE CHECKBOX", false, document.getElementById("div04"));
var n5 = createButton("button", "btnNewRadio", "btnNewRadio", "btn-03", "CREATE RADIO", false, document.getElementById("div05"));

// 버튼 생성 이벤트 주입
document.getElementById("btnCreate").addEventListener("click", (e) => {
	e.preventDefault();
	var text = document.getElementById("buttonName").value;
	createButton("button", text, text, "button-01", text, false, document.body);
});

// 버튼 삭제 이벤트 주입
document.getElementById("btnDelete").addEventListener("click", (e) => {
	e.preventDefault();
	var text = document.getElementById("buttonName").value;
	
	if ( deleteElement( "id", text, 0, 0 ) ) 
		console.log("DELETE SUCCESS");
	else
		console.log("DELETE FAILED");
});

// TextBox 생성 이벤트 주입
document.getElementById("btnNewInput").addEventListener("click", (e) => {
  e.preventDefault();
  createTextBox( "text", "txt01", "txt01", "textbox-01", "ID", "id", 0 );
  createTextBox( "password", "txt02", "txt02", "textbox-01", "PASSWORD", "", 0 );
});

// CheckBox 생성 이벤트 주입
document.getElementById("btnNewCheckbox").addEventListener("click", (e) => {
  e.preventDefault();
  createCheckBox("chk01", "check", "check-01", "A", true, n4);
  createCheckBox("chk02", "check", "check-01", "A", false, n4);
})

// RadioButton 생성 이벤트 주입
n5.addEventListener("click", (e) => {
  e.preventDefault();
  createRadio("rd01", "radio1", "radio-01", "A", "A", true, 0);
  createRadio("rd02", "radio1", "radio-01", "B", "B", true, 0);
});

///////////////////////////////////////////// Test Code 작성 끝
//
//
//
///////////////////////////////////////////// 기능 함수 작성 시작

/**
 * DOM Radio 생성
 * @param {string} id_ 
 * @param {string} name_ 
 * @param {string} class_ 
 * @param {string} value_ 
 * @param {string} text_
 * @param {string} checked_ 
 * @param {string} parentNode_ : 생성 될 위치의 부모 노드 요소, 미지정 시 body의 자식으로 생성.
 * @return 생성 된 Radio 요소
 * @code
 */
function createRadio ( id_, name_, class_, value_, text_, checked_, parentNode_ ) {
	var rd = document.createElement("input");
	rd.setAttribute("type", "radio");

	if ( id_ )
		rd.setAttribute("id", id_);
	if ( name_ )
		rd.setAttribute("name", name_);
	if ( class_ )
		rd.setAttribute("class", class_);
	if ( value_ )
		rd.setAttribute("value", value_);
	if ( checked_ )
		rd.setAttribute("checked", checked_);
	
	if ( !parentNode_ )
		parentNode_ = document.getElementsByTagName("body")[0];

	parentNode_.appendChild(rd);
	parentNode_.appendChild(document.createTextNode(text_));

	return rd;
}

/**
 * DOM CheckBox 생성
 * 
 * @author : shlee
 * @param {string} id_
 * @param {string} name_
 * @param {string} class_
 * @param {string} value_
 * @param {string} text_
 * @param {boolean} checked_
 * @param {element} parentNode_ : 생성 될 위치의 부모 노드 요소, 미지정 시 body의 자식으로 생성.
 * @return 생성 된 CheckBox 요소
 * @code
 * createCheckBox("chk01", "check", "check-01", "A", true, 0);
 * createCheckBox("chk02", "check", "check-01", "B", false, 0);
 */
function createCheckBox ( id_, name_, class_, value_, text_, checked_, parentNode_ ) {
	var cb = document.createElement("input");
	cb.setAttribute("type", "checkbox");

	if ( id_ )
		cb.setAttribute("id", id_);
	if ( name_ )
		cb.setAttribute("name", name_);
	if ( class_ )
		cb.setAttribute("class", class_);
	if ( value_ )
		cb.setAttribute("value", value_);
	if ( checked_ )
		cb.setAttribute("checked", checked_);
	
	if ( !parentNode_ )
  		parentNode_ = document.getElementsByTagName("body")[0];

	parentNode_.appendChild(cb);
	parentNode_.appendChild(document.createTextNode(text_));

	return cb;
}

/**
* DOM TextBox 생성
*
* @author : shlee
* @param {string} type_  e.g. "text", "password" ...
* @param {string} id_
* @param {string} name_
* @param {string} class_
* @param {string} placeHolder_
* @param {string} value_
* @param {boolean} disabled_
* @param {element} parentNode_ : 생성 될 위치의 부모 노드 요소, 미지정 시 body의 자식으로 생성.
* @return 생성 된 TextBox 요소
* @code
* var tb = createTextBox( "text", "txt01", "txt01", "textbox-01", "ID", "id", false, 0 );
* var tb = createTextBox( "password", "txt02", "txt02", "textbox-01", "PASSWORD", "", false, 0 );
*/
function createTextBox( type_, id_, name_, class_, placeHolder_, value_, disabled_, parentNode_ ) {
	var tb = document.createElement("input");
	
	if ( type_ )
		tb.setAttribute("type", type_);
	if ( id_ )
		tb.setAttribute("id", id_);
	if ( name_ )
		tb.setAttribute("name", name_);
	if ( class_ )
		tb.setAttribute("class", class_);
	if ( placeHolder_ )
		tb.setAttribute("placeholder", placeHolder_);
	if ( value_ )
		tb.setAttribute("defaultValue", value_);
	if ( disabled_ )
		tb.setAttribute("disabled", disabled_);
	if ( !parentNode_ )
  		parentNode_ = document.getElementsByTagName("body")[0];

	parentNode_.appendChild(tb);

	return tb;
}


/**
* DOM Button 생성
* 
* @author : shlee
* @param {string} type_ : e.g. "button", "submit" ...
* @param {string} id_
* @param {string} name_
* @param {string} class_
* @param {string} innerHTML_
* @param {boolean} disabled_
* @param {element} parentNode_ : 생성 될 위치의 부모 노드 요소, 미지정 시 body의 자식으로 생성.
* @return 생성 된 button 요소
* @code
* var b1 = createButton("button", "newButton", "newButton", "btn-03", "BUTTON1", false, 0);			// body 최하단에 button 추가
* var b2 = createButton("submit", "newButton", "newButton", "btn-03", "BUTTON2", true, document.getElementById("div01"));		// div01 최하단에 submit button 추가
*/
function createButton( type_, id_, name_, class_, innerHTML_, disabled_, parentNode_ ) {
	var btn = document.createElement("button");
	
	if ( type_ )
		btn.setAttribute("type", type_);
	if ( id_ )
		btn.setAttribute("id", id_);
	if ( name_ )
		btn.setAttribute("name", name_);
	if ( class_ )
		btn.setAttribute("class", class_);
	if ( disabled_ )
		btn.setAttribute("disabled", disabled_);
	if ( innerHTML_ )
		btn.innerHTML = innerHTML_;
	if ( !parentNode_ )
  		parentNode_ = document.getElementsByTagName("body")[0];
		
	parentNode_.appendChild(btn);

	return btn;
}

/**
* DOM Element 제거
*
* @author : shlee
* @param {string} type_ only {"id", "name", "class", "tag" }
* @param {string} value_
* @param {string} op1_ 조회 된 element가 배열일 경우 삭제 옵션 지정, 미지정 시 영향 없음. {"first", "last"}
* @param {element} node_ : 특정 노드 전달, 사용안할 시 0, null, undefined로 지정.
* @return 1 is successed, 0 is failed.
* @code
* deleteElement( "id", "newButton1", 0, 0 );			// id가 newButton1인 요소 제거
* deleteElement( "class", "btn-03", 0, 0 );			// class가 btn-03인 요소들 제거
* deleteElement( "tag", "button", "first", 0 );		// tag가 button 요소들 중 처음 요소만 제거
* deleteElement( 0, 0, 0, n1 );						// n1 노드 제거
*/
function deleteElement( type_, value_, op1_, node_ ) {
	if ( node_ ) {
		node_.parentNode.removeChild(node_);
		return true;
	}
	
	var b;
	
	if ( !type_ || !value_ )
		return false;
	
	switch ( type_ ) {
		case "id":
			b = document.getElementById(value_);
			break;
		case "name":
			b = document.getElementsByName(value_);
			break;
		case "class":
			b = document.getElementsByClassName(value_);
			break;
		case "tag":
			b = document.getElementsByTagName(value_);
			break;
		default:
			return false;
	}
	
	if ( !b )
		return false;
	
	if ( type_ == "id" ) {
		b.parentNode.removeChild(b);
	}
	else {
		var size = b.length;
		
		switch ( op1_ ) {
			case "first":
				b[0].parentNode.removeChild(b[0]);
				break;
			case "last":
				b[b.length-1].parentNode.removeChild(b[b.length-1]);
				break;
			default:
				for ( i=0; i<size; i++ ) {
					b[0].parentNode.removeChild(b[0]);
				}
		}
	}
	
	return true;
}
	
/**
* 브라우저 버전 별 class Attribute Name 확인 함수
*
* @author : shlee
* @return "class" or "className"
*/
function getClassFieldName() {
	// explorer
	if ( navigator.appName.indexOf("Microsoft") > -1 ) {
		// more than IE 8
		if ( document.documentMode >= 8 ) {
			return "class";
		}
		
		// lower than IE 8
		return "className";
	}
	
	// non explorer
	return "class";
}