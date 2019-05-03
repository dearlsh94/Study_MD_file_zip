# Lombok
---
    <2019-04-30>
## Lombok 

- JAVA 라이브러리
- 코드 생산성 향상을 위해 사용
- DTO, VO 등의 프로퍼티에 대한 기본 함수 생성
  - Getter / Setter
  - Equals
  - hashCode
  - ToString

## 설치 방법

### 직접 설치

1. Lombok.jar 파일 다운로드<br>
   - URL : https://projectlombok.org/download 
2. Lombok.jar 실행
3. Specify location 버튼 클릭
4. eclipse.exe 경로 섲렁
5. Install / Update 버튼 클릭

### Maven Dependency 추가

1. pom.xml dependency 추가
```
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.16.20</version>
      <scope>provided</scope>
    </dependency>
```
1. Maven Repository 폴더 이동
1. Lombok.jar 실행
1. Specify location 버튼 클릭
1. eclipse.exe 경로 설정
1. Install / Update 버튼 클릭

## Maven 설정

- pom.xml dependency 추가

```
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.20</version>
    <scope>provided</scope>
  </dependency>
```

## 사용 방법

- DTO 또는 VO class의 어노테이션 설정
- 전체 적용 어노테이션
  - @Data
- 개별 설정 어노테이션
  - @Getter
  - @Setter
  - @ToString
  - @EqualsAndHashCode
  - @RequiredArgsConstructor

## 기능

- @Data
  - @Getter / @Setter / @ToString / @RequiredArgsConstructor / @EqualsAndHashCode 적용
- @Getter @Setter
  - get~ / set~ 메서드 생성
  - 변수형이 boolean 일 경우, is~ 메서드 생성
  - static 제외한 변수에 대해 생성
  - AccessLevel 지정 가능
       -> @Getter(AccessLevel.접근권한자)
- ToString
  - toString 메서드 생성
  - 특정 변수 ToString에서 제외 가능
        -> @ToString(exclude = {"변수명", "변수명2"})
- @NoArgsConstructor
  - 파라미터가 없는 생성자 생성
  - 초기 값이 필요한 final 변수가 있을 경우 컴파일 에러 발생
        -> @NoArgsConstructor(force=true) 설정
            - 에러 대신 0 / false / null 로 대체
                    - (@(NonNull 제약조건 무시)
   - @RequiredArgsConstructor
           - 특정 파라미터를 요구하는 생성자 생성
                   - final 변수
                - @NonNull 변수
- @AllArgsConstructor
  -  모든 필드를 파라미터로 요구하는 생성자 생성
  - @RequireArgsConstructor 적용 해제
- @EqualsAndHashCode
  - haseCode, equals 메서드 생성
  - 필드 명시하여 생성 (권장 방법)
        -> @EqualsAndHashCode(of={"변수명", "변수명"})
  - 제외 필드 명시하여 생성
        -> @EqualsAndHashCode(exclude={"변수명", "변수명"})
  - Super Class 존재 시
        -> @EqualsAndHashCode(callSuper=true)
- @Cleanup
  - 해당 변수의 스코프 종료 전 리소스 반환 보장
        - @Cleanup InputStream in = new FileInputStream(args[0]);
- @Builder
  - : 빌더 패턴을 적용한 생성자 생성
        -> @Builder
           private className(String a) {
                this.a = a;
           }
  - 변수 기본값 설정
        -> @Builder.Default private int age = 26;
  - Collection 타입일 경우, 변수에 값을 추가하는 메서드 생성
        -> @Singular private List<String> values;
- @Log
  - 해당 Class 명의 로거 객체 생성

    ## Config 관리

- 특정 어노테이션 사용 금지 설정
    -> lombok.{AnnotationName}.flagUsage=error