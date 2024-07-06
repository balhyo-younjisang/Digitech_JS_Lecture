# 자바스크립트 DOM

## 문서객체 모델(DOM: Document Object Model)

- 웹브라우저가 HTML 페이지를 인식하는 방법
- doucment 객체와 관련된 객체들의 집합
- DOM을 이용하면 HTML페이지에 동적으로 태그를 추가, 수정, 삭제할 수 있음

### 1.id로 접근
> getElement

### 2. class로 접근
> getElementsByClassName()
> document.getElementByClassName(클래스명)

### 3. name으로 접근

> getElementByName()
> document.getElementByName(이름)

### 4. tag 이름으로 접근

> getElementBytagName()
> document.getElementByTagName(태그명)

### 5. css 기법으로 접근

> (1) querySelector(): 첫번째 노드 선택  
- 아이디: document.querySelector(#아이디명);
- 클래스: document.querySelector(.클래스명);
- 태그명: document.querySelector(태그명);
> (2) querySelectorAll(): 전체 노드 선택
- 아이디: document.querySelectorAll(#아이디명);
- 클래스: document.querySelectorAll(.클래스명);
- 태그명: document.querySelectorAll(태그명);

## DOM요소 컬렉션
HTMLCollection과 NodeList는 문서내에 노드들을 가지고 있는 유사배열

1. HTMLCollection
동적 리스트(Live)으로서 DOM의 변경사항을 실시간으로 반영함.
즉, 요소를 제거하거나 DOM에 추가하면 목록이 자동으로 업데이트 됨

> getElementByTagName()
> getElementByClassName()

2. NodeList
정적 리스ㅡ(Non-live)로 노드 객체의 상태 병화를 실시간으로 반영하지 못함.

> getElementsByName()
> querySelectorAll()

3.classList
항상 현재를 반영하는 class 이름 관리를 위한 컬렉션 유형

>(1) 추가: classList.add("className");
>(2) 제거: classList.remove("className");
>(3) 있으면 추가, 없으면 제거: classList.toggle("className");
>(4) 점검: classList.contains("className");
>(5) 교체: classList.replace("oldClass", "newClass");

## 노드(Node) 속성값 조작

노드 (Node)란 DOM 트리를 구성하는 최소한 단위이며, 기본요소이다.

- 노드(Node)의 종류 : 문서 노드, 요소 노드, 속성 노드, 텍스트노드
- 노드(Node) 속성값 조작 종류: 획득, 설정, 제거, 점검

  1. 노드 속성 획득
  > element.getAttribute(AttributeName);

  2. 노드 속성 설정
  >element.setAttribute(AttributeName, AttributeValue):

  3. 노드 속성 제거

  >element.removeAttribute(AttributeName);

  4. 노드 속성 점검

  > element.hasAttribute(AttributeName);
  > => 해당 속성은 boolean 값을 반환

## 자식 Node

1. childNodes 프로퍼티
&nbsp; - NodeList 설정, 노드 설정

2. children 프로퍼티
&nbsp; - HTMLCollection 설정, 엘리먼트 설정

  ## Node(노드) 탐색

1.상위 접근  
&nbsp;1.1 상위 노드 접근  
&nbsp;&nbsp;지정된 노드의 부모노드를 Node 객체로 반환

> node.parentNode

&nbsp;1.2 상위 HTML 노드 접근  
&nbsp;&nbsp;지정된 요소의 부모요소를 Element 객체로 반환

> node.parentElement

</br>2.하위 접근  
&nbsp;2.1 하위 노드 접근  
&nbsp;&nbsp;지정된 노드의 부모노드를 Node 객체로 반환(text, 주석 포함)

> childNodes

&nbsp;2.1.1 하위 처음 노드 접근  
&nbsp;&nbsp;지정된 요소의 첫 번째 자식노드를 Node 객체로 반환

> firstChild

&nbsp;2.1.2 하위 마지막 노드 접근  
&nbsp;&nbsp;지정된 요소의 마지막 자식노드를 Node 객체로 반환

> lastChild

&nbsp;</br>2.2 하위 HTML 노드 접근  
&nbsp;&nbsp;지정된 요소의 자식 요소들을 Element 객체로 반환

> children

&nbsp;2.2 하위 마지막 HTML 노드 접근  
&nbsp;&nbsp;지정된 요소의 마지막 자식 요소들을 Element 객체로 반환

> lastElementChild

</br>3.이전 접근  
&nbsp;3.1 이전 노드 접근  
&nbsp;&nbsp;동일한 트리 수준에서 지정된 노드의 이전 노드를 반환

> previousSibling

&nbsp;3.2 이전 노드 HTML 접근  
&nbsp;&nbsp;동일한 트리 수준에서 지정된 요소의 이전 요소를 반환

> previousElementSibling

</br>4.다음 접근  
&nbsp;4.1 다음 노드 접근  
&nbsp;&nbsp;동일한 트리 수준에서 지정된 노드 바로 다음 노드를 반환

> nextSibling

&nbsp;4.2 이전 노드 HTML 접근  
&nbsp;&nbsp;지정된 요소 바로 다음의 요소를 같은 트리 수준에서 반환

> nextElementSibling

