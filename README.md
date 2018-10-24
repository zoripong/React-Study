# REACT js Study [![author](https://img.shields.io/badge/author-devuri-4c80f1.svg?style=flat-square)](https://github.com/zoripong)

## 기존 방식
기존에는 MVC, MVVM(View Model), MVW(Whatever) 패턴은 양방향 바인딩을 통하여
Model에서의 변화를 View에 적용하고, View에서의 변화를 Model에 변화하는 방식을 이용하였다.

DOM을 변화 시키는 것은 상당히 복잡한 작업이었다.

특정 이벤트가 발생하였을 때, 모델에 변화를 일으키고, 변화를 일으킴에 따라 어떤 DOM을 가져와서 어떠한 방식으로 뷰를 업데이트 할지 로직을 정해주어야 했다.

## Virtual Dom

그래서 React에서는 변화의 과정을 제거하는 발상을 하였다.

> "변화 시키는 것이 아닌 변화하여야 할 부분을 제거하고 새로 그려주는 방식을 사용하자."

변화가 일어났을 경우, 실제 브라우저의 DOM을 변화시키는 것이 아닌, 자바스크립트로 이뤄진 가상 DOM으로 만들어진 Virtual DOM 과 비교한 후 비교가 필요한 부분만 업데이트를 해준다.

이 Virtual DOM 을 사용함으로서, 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지 고려하는 것이 아닌, 그냥 일단 바뀐 데이터로 일단 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔준다.

- [React and the Virtual DOM](https://www.youtube.com/watch?v=muc2ZF0QIO4)

## Webpack & Babel
- Webpack
여러 파일로 분리된 컴포넌트 파일들을 하나로 결합할 때 사용
- Babel
[새로운 자바스크립트 문법](#JSX)들을 사용하기 위한 도구

## JSX
### Component Example (Class)
```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```
- React Import 필수
- 클래스를 통해 컴포넌트를 만드는 방법
- render 함수 필수

### Rules
- 태그는 꼭 닫혀야한다.
    * `<input>`태그 역시 `<input/>`으로
    * 두 개 이상의 태그를 무조건 하나로 묶어 쓸모없는 태그가 생기는 것이 싫다면, Fragment 태그를 이용 (Import 후!)
    * JSX 사이에서 자바스크립트 변수를 사용하기 위해선 {} 안에 변수명
- 조건부 랜더링을 하기 위해선?
    * 삼항연산자
    * && 연산자
    * function 선언 후 바로 실행
``` javascript
(function(){
    return <div></div>
    } )()
```
    * 람다로 대체 가능!
``` javascript
(()=>{
    return <div></div>
    } )()
```
- Style 적용
    * inline style 적용 시 
    ```javascript
    import React, { Component } from 'react';
    class App extends Component {
        render() {
            const style = {
                backgroundColor : 'black',
                fontSize : 1 + 15 +'px',
                color : 'red'
            }
            return (
                <div>
                    <h1 style={style}>안녕하세요 리액트</h1>
                </div>
            );
        }
    }
    ```
    * class 이용시 (**class가 아닌 className**)

    ```javascript
        import React, { Component } from 'react';
        import './App.css'

        class App extends Component {
        render() {
            return (
            <div>
                <h1 className='App'>안녕하세요 리액트</h1>
            </div>
            );
        }
        }

        export default App;

    ```
- 주석
    * `{/*주석*/}`
    


#### var VS const VS let
> var
var는 변수의 scope가 함수 단위이다. ES6 에서는 이제 사용하지 않는다.


> const
const는 변수의 scope가 block 단위이다. 변하지 않는 상수 값을 넣을 때 사용한다.


> let
let 역시 변수의 scope가 block 단위이다. 유동값을 저장할 때 사용한다.

## Props
부모가 자식에게 넘겨주는 값
읽기 전용

> child

```javascript
import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '기본이름'
    }
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

export default MyName;
```
- props의 default 값은 static defaultProps를 통해서 설정합니다.
- 아래의 구문과 동일합니다.

```javascript
Class{
    ...
}
MyName.defaultProps = {
    name: '기본이름'
};
```

> parent

```javascript
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
    render() {
        return (
          <MyName name="리액트" />
        );
    }
}

export default App;
```
## State
컴포넌트 내부에서 변경할 수 있는 값
- 변경 가능
- state는 객체여야한다. 
```javascript
state = {
    number: 0
}
```

- state를 업데이트 할 때에는 setState를 써야한다.
```javascript
handleIncrease = () => {
    this.setState({
        number: this.state.number + 1
    })
}
```

- 함수 선언시 일반 함수로 선언하기 위해서는 constructor를 만들어야한다.
```javascript
constructor(props){
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
}
handleIncrease() {
    console.log(this)
    // Something to Do..!
}
```

- event 달아주기
```javascript
<button onClick={this.handleIncrease}>+</button>
```

## 함수형 컴포넌트

```javascript
import React from 'react';

const MyName = ({ name }) => {
    return (
        <div>
            안녕하세요! 제 이름은 {name} 입니다.
        </div>
    );
};

export default MyName;
```

- 속도면에서 미세하게 더 빠르다.
- state와 LifeCycle이 빠진 형태

## [LifeCycle API](https://twitter.com/dan_abramov/status/981712092611989509)
### Mounting
화면에 나타날 때의 생명주기입니다.
#### constructor

```javascript
constructor(props) {
  super(props);
}
```

- 새로 만들어질 때마다 호출

#### componentDidMount

```javascript
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```

- 화면에 나타나게 될 때

### Updating
Props나 State가 변화할 때의 생명주기입니다.

#### static getDerivedStateFromProps()

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    /*
    if (nextProps.value !== prevState.value) {
        return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
}
```

- props 로 받아온 값을 state로 동기화 할 때 

#### shouldComponentUpdate

```javascript
shouldComponentUpdate(nextProps, nextState) {
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked
    return true;
}
```

- Virtual DOM에도 그릴 때 정말 필요한 부분만 렌더링하여 컴포넌트를 최적화 시킴
- default는 true이며 false 반환시 render함수를 호출하지 않는다.

#### getSnapshotBeforeUpdate()

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점입니다.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데, 
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    if (prevState.array !== this.state.array) {
        const {
            scrollTop, scrollHeight
        } = this.list;

        // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있습니다.
        return {
            scrollTop, scrollHeight
        };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
        const { scrollTop } = this.list;
        if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
        const diff = this.list.scrollHeight - snapshot.scrollHeight;
        this.list.scrollTop += diff;
    }
  }
```

- DOM에 변화가 일어나기 직전의 상태
- 리턴 값을 componentDidUpdate 의 세번째 파라미터로 쓸 수 있음

#### componentDidUpdate

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {

}
```

- render() 호출 후 발생
- props와 state가 변화해있음

### Unmounting
브라우저에서 사라질 때의 생명주기입니다.

#### componentWillUnmount
```javascript
componentWillUnmount() {
    // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
}
```

-  등록했던 이벤트 제거
-  외부 라이브러리 dispose

### Exception
#### componentDidCatch

```javascript
state = {
    number: 0,
    error: false
}
componentDidCatch(error, info) {
    this.setState({
      error: true
    });
}
render() {
    if (this.state.error) return (<h1>에러발생!</h1>);
}
```

- 에러 발생 경우
    * 존재하지 않는 함수 호출
    * 객체 또는 배열이 존재하지 않을 때
- 다른 대안은?
    > 
    ```javascript
    render() {
        if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
        // object 나 array 를 사용하는 코드
    }
    ```
    >
    ```javascript
    class Sample extends Component {
        static defaultProps = {
            onIncrement: () => console.warn('onIncrement is not defined'),
            object: {},
            array: []
        }
    }
    ```

## 프로젝트 시작하기
### Environment

```
node js v8.11.4
yarn 1.10.1
```

- node 8.0 이상

### Create React App

```
cd workspace
npx create-react-app tutorial-app

cd tutorial-app
yarn start
```

- 자동으로 브라우저 실행
![yarn start](https://scontent-icn1-1.xx.fbcdn.net/v/t1.15752-9/44821344_1870712213049715_3419273998930804736_n.png?_nc_cat=100&_nc_ht=scontent-icn1-1.xx&oh=05fd01fdf054184a6c733b30557f4110&oe=5C3E8CC9)

- [create-react-app](https://github.com/facebook/create-react-app)
    * 페이스북에서 제공해주는 리액트 프로젝트 초기 세팅 커맨드

## Directory Structure

- [React 프로젝트의 디렉토리 구조](https://medium.com/@FourwingsY/react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-bb183c0a426e)

## Array in React
- 리액트에서는 **불변성 유지**
    * state 내부의 값을 직접적으로 수정하면 절대로 안된다.
- *push, splice, unshift, pop*
    * 배열자체를 직접 수정하게 되므로 적합하지 않음
- **concat, slice, map, filter**
    * 기존의 배열을 기반으로 하여 새로운 배열을 생성하는 함수 생성

```javascript
handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
        information: information.concat({ id: this.id++, ...data })
    })
}
...
<PhoneForm
    onCreate={this.handleCreate}
/>
{JSON.stringify(information)}
```


## Fetching API Data with React.JS
- [axios](https://github.com/axios/axios)
    *

- redux

## references
- React 기초
    * [Velopert 블로그](https://velopert.com/3613)
    * [Velopert Youtube](https://www.youtube.com/watch?v=fT9iFFAt60E&t=0s&index=2&list=PL9FpF_z-xR_E4rxYMMZx5cOpwaiwCzWUH)

- Flask X React
    * [GitHub](https://github.com/hidekuma/Flask-React-Webpack3)
    * [Real Python](https://realpython.com/the-ultimate-flask-front-end/)

