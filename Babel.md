# Babel

- ES6 (ECMAScript 2015) 이상의 문법을 지원하지 않는 구형 브라우저와의 호환을 위해 옛날 javascript 코드로 변경해주는 도구
- 즉, 모든 브라우저와 호환되기 위해 사용한다.

- babel 7 부터 모든 바벨 패키지는 @babel 네임스페이스에 속한다.

## Babel 설치

- babel 7 이상

```
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-stage-2
```

- babel 7 미만

```
npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-stage-2  
```

- 
- `.babelrc` : 바벨 설정 파일
  - "preset" 과 "plugin" 연결
- "preset" : 여러 플러그인의 모음

**example**

- react : jsx 환경을 위한 프리셋
- es2015 : ES2015 문법 환경을 위한 프리셋
- preset-env : 특정 타겟 브라우저 설정
  - 최신부터 두 개의 버전 까지 지원
  - 한국에서 점유율 5% 이상

```
{
  "presets" : [
    "es2015",
    "react",
    [
      "@babel/preset-env",
      {
        "targets" : {
          ["last 2 versions", ">= 5% in KR"]
        }
      }
    ],
    [
      "@babel/preset-stage-2",
      {
        "decoratorsLegacy": true
      }
    ]
  ],
}
```

## babel-cli

- CLI를 사용하여 코드를 변환할 수 있는 도구
- `--save`
  - `/node_modules` 설치 및 `package.json`의 `"dependencies"`까지 업데이트
- `--save-dev`
  - `/node_modules` 설치 및 `package.json`의 `"devDependencies"` 에 업데이트
- `npm i` 명령 시 `--production` 옵션 지정 시 `"devDependencies"`는 설치 되지 않음.

```
$npm i --save-dev babel-cli
$yarn add -D babel-cli
```

## babel-cli 명령

- 파일 변환
  - `babel`
    - 바벨 호출
  - `example.js`
    - 변환 할 ES6++ javascript 파일
  - `--out-file`
    - 바벨 전달 옵션 설정 내용
    - 파일로 output 하겠다는 옵션
  - `compiled.js`
    - 변환 된 파일의 이름 설정 

```
$ babel example.js --out-file compiled.js
```

- npm scripts를 사용한 자동화
  - `./src`
    - 해당 디렉토리 내부의 모든 파일 변환
  - `-d`
    - 특정 디렉토리로 output 하겠다는 옵션
  - `./lib`
    - 변환 파일이 저장 될 디렉토리 이름
  - `-w`
    - `/src` 내부 파일 변경 시 자동으로 변환 하겠다는 옵션

```
"scripts" : {
  "build" : "babel ./src -d ./lib -w"
}
```

## babel 설정

- `.babelrc` 파일에 babel 설정 정보 저장

```
{
  "preset" : [
  
  ],
  "plugins" : [
  
  ]
}
```

# 참고

- babel 공식 문서 plugin
  - https://babeljs.io/docs/en/plugins/
- BabelJS(바벨)
  - https://www.zerocho.com/category/ECMAScript/post/57a830cfa1d6971500059d5a
- [Tool] (번역) Everything you need to know about BabelJS

https://jaeyeophan.github.io/2017/05/16/Everything-about-babel/