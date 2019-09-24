# Yarn

- javascript package manager
- npm 과 유사한 기능
- 

> [install](https://yarnpkg.com/en/docs/install#windows-stable)



## CLI 명령

- project 시작 (초기화)

```
$ yarn init
```

- `package.json` 의존 모듈 설치

```
$ yarn
```

```
$ yarn install
```

- 의존 모듈 설치

```
$ yarn add [package]
$ yarn add [package]@[version]
$ yarn add [package]@[tag]
$ yarn add [package] --dev  #devDependencies 의존 모듈 설치
$ yarn add [package] --peer  #peerDependencies 의존 모듈 설치
$ yarn add [package] --optional #optionalDependencies 의존 모듈 설치
```

- 의존 모듈 업그레이드

```
$ yarn upgrade [package]
$ yarn upgrade [package]@[version]
$ yarn upgrade [package]@[tag]
```

- 의존 모듈 제거

```
$ yarn remove [package]
```

## yarn lock

- `yarn.lock`
- yarn install 시 생성
- 설치된 모듈의 버전 저장
- -> 어디서든 같은 버전, 구조의 라이브러리 설치 가능
- `package-lock.json`파일과 유사한 기능

# 참고

- yarn 공식 문서
  - https://yarnpkg.com/en/docs/install#windows-stable

- yarn 설치 및 사용법
  - https://heropy.blog/2017/11/25/yarn/