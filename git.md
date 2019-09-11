# git

- 버전 관리 시스템

- 버전 / 이력 관리
- 개발협업의 도구
- 오픈소스 정책

- [git 설치](https://git-scm.com/downloads)



## Git CLI

- git configuration 설정 (최초 1회)
- 한 번 commit한 후에는 정보 변경 불가

```
# 환경설정
$git config (--global) user.name [username]
$git config (--global) user.email [usermail]

# 설정 조회
$git config (--global) --list

#option 설명
#--global : 전역으로 설정
```

- Repository 관리

```
# git으로 관리 할 폴더 경로 이동
$cd [project path]

# git 저장소 초기화 생성
$git init

# 저장소 clone
$git clone [url]

# 신규 원격 저장소 추가
$git remote add [remoteRepository] [url]
```

- branch 관리

```
# 지역 브랜치 목록
$git branch

# 원격 브랜치 목록
$git branch -r

# 지역+원격 브랜치 목록
$git branch -a
```



- 버전 및 이력 관리

```
# 특정 파일 추가
$git add [file]

# 전체 파일 추가
$git add *

# commit
$git commit -m "[commitMessage]"

# push
$git push origin master

```

