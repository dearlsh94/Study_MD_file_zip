# Create .dll using C#

1. Visual Studio 새 프로젝트 생성 - Visual C# - 클래스 라이브러리
2. [참조] 우클릭 - 참조 추가
   1. 어셈블리 - 프레임워크 - System.EnterpriseServices 체크 후 적용
3. AssemblyInfo.cs 설정 변경

```
Comvisible(true)
```

4. class.cs 코딩

```
using System.EnterpriseServices;

[assembly: ApplicationName("AppName")]
[assembly: Description("App Description")]
[assembly: ApplicationActivation(ActivationOption.Server)]
[assembly: ApplicationAccessControl(false)]

namespace test
{
	public class testController : SErvicedComponent
	{
		public testController() { }
		
		public String methodName(String input1)
		{
			return input1;
		}
	}
}
```

5. 빌드 Release로 변경
6. 빌드하여 .dll 생성

# Call .dll in Classic ASP (with IIS)

1. 관리자 권한 cmd 실행
2. 경로 이동 
   - cd C:\Windows\Microsoft.NET\Framework\{version} 
3. 어셈블리 형식 등록
   - regasm.exe "{.dll path}"
4. 어셈블리 설치
   - regsvcs.exe "{.dll path}"
5. [구성 요소 서비스] 실행
6. COM+ 응용프로그램 등록 확인
7. ASP 코딩

```
Set ComDll = server.createobject("namespace.classname")

ComDll.methodName()
```

