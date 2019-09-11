# JSTL

## JSTL?

- JSP 표준 태그 라이브러리
- jsp에서 JAVA 로직 구현 가능

## Install JSTL

1. [Open apache site](https://tomcat.apache.org/taglibs/standard/)
2. Click [Standard Taglib] - [Standard 1.1] - download
3. Download [binaries] - [jakarta-taglibs-standard-1.1.1.zip]
4. import library
   1. /lib/jstl.jar, /lib/standard.jar to Web-INF/lib
5. include library

```
<!-- Core : 변수 지원, 흐름 제어, URL 처리 -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!-- Format : 지역, 메세지 형식, 숫자 및 날짜 형식 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- Functions : 콜렉션 처리, String 처리-->
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!-- XML : XML 코어, 흐름 제어, XML 변환 -->
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>

<!-- DB : SQL -->
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
```

## Core

- 변수 출력

```
<c:out value="출력할 값" default="기본값"/>

<c:out value="${text}" defualt="unread"
```

- 변수 설정

```
<c:set var="변수명" value="설정값" target="객체" property="값" scope="범위">
```

- 변수 제거

```
<c:remove var="변수명" scope="범위">
```

- if 
  - else if 구현 불가.
  - 비교기호
    - empty (null) : "${empty data}"
    - !empty (not null) : "${!empty data}"
    - eq (==) : "${data eq 'val'}"
    - ne (!=) : "${data ne 'val'}"

```
<c:if test="조건" var="조건 처리 변수명" scope="범위">

<c:if test="${data eq 'Y'}"
	this data is Y
</c:if>
```

- choose

```
<c:choose>
	<c:when test="조건"> 처리 내용 </c:when>
	<c:otherwise> 조건 외 처리 내용 </c:oterwise>
</c:choose>

<c:choose>
	<c:when test="${pageContext.request.scheme eq 'http'}">
		This is an insecure Web session
    </c:when>
    <c:when test="${pageContext.request.schema eq 'https'}">
    	This is a secure Web session
    </c:when>
    <c:otherwise>
    	What is your Web Protocol...?
    </c:otherwise>
</c:choose>
```

- forEach
  - varStatus 변수 종류
    - current : get item
    - index : get index from base 0
    - count : get index from base 1
    - first : get boolean it's first or not
    - last : get boolean it's last or not
    - begin : get begin value
    - end : get end value
    - step : get step value

```
<c:forEach items="객체명" begin="시작 인덱스" end="끝 인덱스" step="증감식"
	var="변수명" varStatus="상태변수">
	
<c:forEach items="${objList}" var="obj" varStatus="idx">
	<c:out value="${idx.index}"
	<c:out value="${obj.data1}"/>
	<c:out value="${obj.data2}"/>
</c:forEach>
```

- 페이지 이동 및 파라미터 전달

```
<c:redirect url="URL">
<c:param name="파라미터명" value="값">

<c:url value="/detail.jsp">
	<c:param name="seq" value="${seq}"/>
	<c:param name="name" value="name"/>
</c:url>
```

- 예외 처리

```
<c:catch var="변수명">

<c:catch var="exception">
	<c:import url="ftp://ftp.example.com/temp"/>
</c:catch>
<c:if test="!empty exception">
	Sorry,
</c:if>
```



## Format

- 숫자 포맷

```
<fmt:formatNumber value="123456789" type="number"/> 
<!--Print : 123,456,789 -->

<fmt:formatNumber value="1000" type="currency" currencySymbol="\"/> 
<!--Print : \1,000.00 -->

<fmt:formatNumber value="0.3" type="percent"/> 
<!--Print : 30% -->

<fmt:formatNumber value="12345.678" pattern=".00"/> 
<!--Print : 12345.67 -->
```

- 날짜 포맷

```
<fmt:formatDate value="${date}" pattern="yyyy-MM-dd"/>
```

