# React Native

- 모바일 APP 프레임워크
- javascript로 모바일 APP 개발 가능
- react의 생태계를 모바일로 확장
- react jsx 문법의 형태를 Android, IOS Native 로 변환
- Virtual DOM으로 화면 Rendering

# expo

- 소스 변경 시 자동 업로드
- 서버의 소스를 변경하는 것이 아니라 앱스토어의 빠른 업데이트 가능

- object-c, java 코드 작성 불가
- -> 외부 라이브러리 사용에 제한이 있다.
  - java, object-c, swift 가 존재할 경우 사용 불가.

## 설치

```
$ npm i expo-cli --global
```

## Project 생성

```
$ expo init [projectName]
$ cd [projectName]
$ expo start
```

- 템플릿
  - blank
    - 빈 상태 페이지 1개 존재
  - tabs
    - react-navigation을 통한 여러 페이지 존재

## 시뮬레이터

- laptop (MAC OS)
  - iPhone
    - xCode 설치
  - Android
    - android studio 설치 
- SmartPhone
  - expo APP 설치
  - Scan QR Code 로 실행된 페이지의 QR코드 스캔



# 참고

- react-native 개발 환경 설정하기 (expo)
  - https://hoony-gunputer.tistory.com/174