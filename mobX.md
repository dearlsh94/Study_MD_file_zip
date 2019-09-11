# MobX

- state 관리 라이브러리
- react state 관리를 위해 개발되어졌다.
- react에 종속적이진 않다.

## 주요 4개념

1. Observable State (관찰 받고 있는 상태)
   - MobX를 사용 중인 앱은 관찰 가능한 상태로 내부 상태의 변화를 알 수 있다.
2. Computed Value (연산된 값)
   - 성능 최적화를 위해 주로 사용
   - 다른 연산 값에 기반하여 연산 실행
3. Reactions (반응)
   - 값이 바뀜에 따라 처리해야 될 로직 반응 정의
4. Actions (액션)
   - 상태에 변화를 일으키는 행동
   - 객체 형태로 생성하여 사용하지는 않음. (리덕스와 달리)

## 기본 예제

```
// import mobx library
import { observable, reaction, computed } from 'mobx';
/*
 * observable(object state)
 * reaction(callback function)
 * comptuted(callback function)
*/

// create observable state
const person = observable({
  name: 'shlee',
  age: 26
});

// reaction when changed state
reaction( () => person.name, (value, reaction) => {
  console.log(`person name is ${value}`);
});
reaction( () => preson.age, (value, reaction) => {
  console.log(`person age is ${value});
});

// 특정 값 캐싱
const writer = computed( () => {
  console.log('Searching...');
  return `[wirter] name : ${person.name} / age : ${person.age}`;
})

writer.observe( () => person.name );  // name 값 주시
writer.observe( () => person.age );  // age 값 주시

// changed state
person.name = 'seunghwan lee';
person.age = 27;

console.log(writer.value);
console.log(writer.value);

person.age = 28;

console.log(writer.value);


```

## autorun

- reaction이나 computed의 observe 대신 사용
- autorun의 콜백함수에서 사용하는 값을 자동으로 주시하여 해당 값이 변경 될 때 마다 함수가 주시되도록 한다.
- computed의 .get() 함수 호출 할 경우 일일이 observe 하지 않아도 된다.

```
import { autorun } from 'mobx';
// autorun(callback function)

autorun( () => {
  console.log(`person name is ${writer.name}`);
})
autorun( () => {
  console.log(`person age is ${write.age});
})

autorun( () => writer.get() ); // 다 observe 해준다!
```

## Class와 decorate

- 각 값에 MobX 함수를 적용시킬  때 사용한다.

>- `get`
>  - ES6 문법의 getter
>  - 클래스 필드의 값 조작이 필요할 때 사용
>  - 메소드 이름은 클래스 필드처럼 사용된다 -> 변수처럼 사용한다.
>  - 반드시 리턴 값이 있어야 한다.

```
import { decorate, observable, computed, autorun } from 'mobx';

class ShoppingCart {
  item = [];
  
  //getter
  get total() {
    console.log('Calculate....');
    return this.item.reduce( (prev, curr) => prev + curr.price, 0);
  }
  
  select( name, price ) {
    this.item.push( { name, price } );
  }
}

decorate( shoppingCart, {
  item: observable,
  total: computed,
});

const myShop = new ShoppingCarh();
autorun( () => myShop.total() );

myShop.select( 'keyboard', 20000 );
console.log(myShop.total);
myShop.select( 'mouse', 10000 );
console.log(myShop.total);
```

## action과 transaction

- action : 상태에 변화를 일으키는 행동
- transaction : 액션을 한번에 실행

```
import { decorate, observable, computed, autorun } from 'mobx';
import { action, transaction } from 'mobx';

class ShoppingCart {
  item = [];
  
  get total() {
    console.log('Calculate....');
    return this.item.reduce( (prev, curr) => prev + curr.price, 0);
  }
  
  select( name, price ) {
    this.item.push( { name, price } );
  }
}

// action 추가
decorate( shoppingCart, {
  item: observable,
  total: computed,
  select: action
});

const myShop = new ShoppingCarh();
autorun( () => myShop.total() );
autorun( () => {
  if ( myShop.item.length > 0 ) {
    console.log('current item is ' + myShop.item[myShop.item.length -1]);
  }
});

// transaction 사용안 할 경우
// myShop.select( 'keyboard', 20000 );
// myShop.select( 'mouse', 10000 );

// transaction 사용 할 경우
transaction( () => {
  myShop.select( 'keyboard', 20000 );
  myShop.select( 'mouse', 10000 );
});
```

## decorator

### decorator 문법

- 정규 문법은 아니나 babel 플로그인을 통하여 사용할 수 있다.
- 직관적으로 decorate 함수를 대체할 수 있다.

```
import { observable, computed, autorun, action, transaction } from 'mobx';

class ShoppingCart {
  @observable item = [];
  
  @computed
  get total() {
    console.log('Calculate....');
    return this.item.reduce( (prev, curr) => prev + curr.price, 
  }
  
  @action
  select( name, price ) {
    this.item.push( { name, price } );
  }
}

const myShop = new ShoppingCart();
autorun( () => myShop.total );
autorun( () => {
  if ( myShop.item.length > 0 ) {
    console.log('current item is ' + myShop.item[myShop.item.length -1]);
  }
});

transaction( () => {
  myShop.select( 'keyboard', 20000 );
  myShop.select( 'mouse', 10000 );
});

console.log(myShop.total);
```

### decorator 적용 방법

- TypeScript

  - `tsconfig.json` 내부 아래 옵션 설정

  ```
  "experimentalDecorators": true
  ```

- Babel 6

  - `babel-preset-mobx` 설치

  ```
  $ npm i --save-dev babel-preset-mobx
  ```

  - `.babelrc`내부 아래 옵션 설정

  ```
  {
    "presets": ["mobx"]
  }
  ```

- Babel 6 : 수동 설정

  - `babel-plugin-transform-decorators-legacy` 설치

  ```
  $ npm i --save-dev babel-plugin-transform-decorators-legacy
  ```

  - `.babelrc` 내부 아래 옵션 설정

  ```
  {
    "presets": ["es2015", "stage-1"],
    "plugins": ["transform-decorators-legacy"]
  }
  ```

  - `transform-decorators-legacy` 플러그인이 최상단에 설정되어야 한다.
  - 오류 발생 시 [issue](https://github.com/mobxjs/mobx/issues/105) 참조

- Babel 7

  - 패키지 설치

  ```
  $ npm i --save-dev @babel/plugin-proposal-class-properties
  $ npm i --save-dev @babel/plugin-proposal-decorators
  ```

  - `.babelrc` 내부 아래 옵션 설정 **`legacy` 모드로 설정 ** 

  ```
  {
      "plugins": [
          ["@babel/plugin-proposal-decorators", { "legacy": true}],
          ["@babel/plugin-proposal-class-properties", { "loose": true}]
      ]
  }
  ```

- react project에 설치하기

  - babel 설정

  ```
  $ yarn eject #git commit 되어 있어야 eject 가능
  
  $ yarn add @babel/plugin-proposal-class-properties
  $ yarn add @babel/plugin-proposal-decorators
  
  #에러로 아래 모듈 설치 요구 할 수도 있음
  $ yarn add @babel/plugin-transform-react-jsx
  ```

  - `package.json` 수정

  ```
  "babel": {
      "presets": [
        "react-app"
      ],
      "plugins": [
          ["@babel/plugin-proposal-decorators", { "legacy": true}],
          ["@babel/plugin-proposal-class-properties", { "loose": true}]
      ]
    }
  ```
  - 서버 재시작

## React와 함께

### React에 MobX 적용하기

- react project 패키지에 MobX 설치

```
$ npm i mobx
$ npm i mobx-react
```

- import library

```
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';
```

**Counter Example**

```
import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends Component {
  number = 0;

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

decorate(Counter, {
  number: observable,
  increase: action,
  decrease: action
})

// observable 값 변경 시 컴포넌트의 forceUpdate 호출 -> 자동 렌더링
// 최적화가 많이 되어 있어 성능 문제가 크지 않다.
export default observer(Counter);
```

### React에 decorator 적용하기

- react project decorator 플러그인 설치 (decorator 설치 방법 부분 참조)

**Counter Example**

```
import React, { Component } from 'react';
import { observable, acction } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
  @observable number = 0;
  
  @action
  increase = () => {
  	this.number++;
  }
  
  @action
  decrease = () => {
  	this.number--;
  }
  
  render() {
  	return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
  	)
  }
}

export default Counter;
```

## MobX 스토어 구조 사용하기

- `/stores` 경로에 파일 생성 (`CounterStore.js`)

```
import { observable, action } from 'MobX';

export default class CounterStore {
  @observable number = 0;
  
  @action
  increase = () => {
  	this.number++;
  }
  
  @action
  decrease = () => {
  	this.number--;
  }
}
```

- `Provider`로 프로젝트에 스토어 적용

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobX-react'; // mobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.

const counter = new CounterStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider counter={counter}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
```

- `inject` 함수로 스토어 값을 react 컴포넌트의 props로 주입

  - `@inject('StoreName')`

  ```
  import React, { Component } from 'react';
  import { observer, inject } from 'mobx-react';
  
  @inject('counter')
  @observer
  class Counter extends Component {
    render() {
      const { counter } = this.props;
      return (
        <div>
          <h1>{counter.number}</h1>
          <button onClick={counter.increase}>+1</button>
          <button onClick={counter.decrease}>-1</button>
        </div>
      );
    }
  }
  
  export default Counter;
  ```

  - 스토어의 특정 값이나 함수만 전달하려고 할 경우

  ```
  import React, { Component } from 'react';
  import { observer, inject } from 'mobx-react';
  
  // **** 함수형태로 파라미터를 전달해주면 특정 값만 받아올 수 있음.
  @inject(stores => ({
    number: stores.counter.number,
    increase: stores.counter.increase,
    decrease: stores.counter.decrease,
  }))
  @observer
  class Counter extends Component {
    render() {
      const { number, increase, decrease } = this.props;
      return (
        <div>
          <h1>{number}</h1>
          <button onClick={increase}>+1</button>
          <button onClick={decrease}>-1</button>
        </div>
      );
    }
  }
  
  export default Counter;
  ```



> **inject, observer 적용의 또 다른 예시**
>
> ```
> const item = (num) => {
>   console.log(num);
>   return <div>{data1}</div>;
> }
> 
> export default inject( ({counter}) => ({
>   num: counter.number,
> }))(observer(item));
> ```



## MobX React 개발 도구 설치

- state 변경 시 영향 받는 컴포넌트, 업데이트 시간, 변화 내용에 대한 세부 내용 파악 가능

```
$ yarn add mobx-react-devtools
```

- 적용하기

```
import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <div>
        <DevTools />
      </div>
    )
  }
}
```



# Ref

- MobX (1) 시작하기 velopert
  - [https://velog.io/@velopert/MobX-1-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-9sjltans3p](https://velog.io/@velopert/MobX-1-시작하기-9sjltans3p)

- MobX (2) 리액트 프로젝트에서 mobX 사용하기 velopert
  - [https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z](https://velog.io/@velopert/MobX-2-리액트-프로젝트에서-MobX-사용하기-oejltas52z)
- MobX (3) 심화적인 사용 및 최적화 방법
  - [https://velog.io/@velopert/MobX-3-%EC%8B%AC%ED%99%94%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-tnjltay61n#market-%EC%8A%A4%ED%86%A0%EC%96%B4-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0](https://velog.io/@velopert/MobX-3-심화적인-사용-및-최적화-방법-tnjltay61n#market-스토어-작성하기)
- How to (not) use decorators (decorator 공식 문서)
  - https://mobx.js.org/best/decorators.html