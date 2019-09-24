# Oracle

- Unable to find a Java Virtual Machine 에러
  
  - 32bit JAVA 로 변경
- The Network Adapter could not establish the connection
  
- 방화벽 포트 허용
  
- unable to launch the java virtual machine located at path

  - sqldeveloper.conf 파일의 SetJavaHome 값을 

    C:\app\shlee\product\11.2.0\client_1\jdk 경로로 설정

- ORA-28009 : connection as SYS should be as SYSDBA or SYSOPER
  - 역할 지정이 필요하다는 에러
  - 접속 사용자명을 sys as sysdba 로 변경
