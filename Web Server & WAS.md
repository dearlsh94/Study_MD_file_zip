# Web Server & WAS

## Web Server

- HTTP 기반
- 클라이언트 요청 수신
- 클라이언트에 정적(static) 컨텐츠  제공
  - 서버 부담 감소
- WAS에 동적(dynamic) 컨텐츠 요청 전달

## WAS

- Web Application Server = Web Server + Web Container
- DB 및 프로세스 로직 처리가 필요한 동적(dynamic) 컨텐츠 제공
- 사용자의 요청 값에 맞는 컨텐츠 제공
- HTTP를 통해 Application 수행하는 미들웨어
- 웹 컨테이너 (Web Container) 또는 서블릿 컨테이터 (Servlet Container) 라고도 함.
  - JSP, Servlet 구동 환경 제공

## Web Server와 WAS가 분리 된 이유

- 정적 컨텐츠와 동적 컨텐츠 처리 기능을 분리하여 서버 부하 감소
- 물리적 분리로 보안 강화
- Web Server Load Balancing 및 여러 WAS를 연결하여 무중단 운영 가능 (fail over, fail back 처리)
- 하나의 서버에 여러 Web Application 서비스 가능
- **자원 이용의 효율성 및 장애 극복, 배포 및 유지보수의 편의성을 위해 둘을 분리하여 사용**

# 출처

https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html

