# git

- 버전 관리 시스템 (VCS : Version Control System)

- 버전 / 이력 관리
- 개발협업의 도구
- 오픈소스 정책

- [git 설치](https://git-scm.com/downloads)

## 용어

- **repository**
  - 저장소
  - local repository와 remote repository가 있다.
    - local -> 본인 PC / remote -> Github 또는 Gitlab 서버
- **branch**
  - 독립된 코드 저장소
- **head**
  - branch의 최신 커밋 지정
- **forward**
  - branch head의 이동방향
- **working tree**
  - branch들간의 연결 구조
- **current branch** (= checkout branch)
  - 현재 사용중인 branch (가장 최근 체크아웃 한 branch)
- **checkout**
  - 현재 작업 중인 branch를 업데이트 하는 것
  - remote repository의 내용으로 local repository를 업데이트한다.
- **clone**
  - remote repository의 파일들을 local repository에 복사
  - clone -> .git 폴더도 생성 / zip download -> 파일만 생성
- **commit**
  - 변경 내용 등록
- **push**
  - local repository 내용을 remote repository에 반영
  - local에 remote의 내용이 없을 경우 error 발생
    - pull 작업 후 push 하여 실행
- **merge**
  - 서로 다른 내용을 하나로 합치는 것.
- **fetch**
  - 최신 코드를 확인
- **pull**
  - fetch 후 merge
- **conflict**
  - 코드 충돌

## Git CLI

- git configuration 설정 (최초 1회)
- 한 번 commit한 후에는 정보 변경 불가
- `--global` 옵션 지정 시 전역으로 설정 ( 미지정 시 repository 단위로 설정 )

```
# 환경설정
$ git config (--global) user.name [username]
$ git config (--global) user.email [usermail]

# 설정 조회
$ git config (--global) --list
```

- Repository 관리
  - 이전에는 `git://` 프로토콜을 사용하였으나 현재는 `https://`또는 `user@server:/path.git`과 같은 SSH 프로토콜도 사용한다.

```
# git으로 관리 할 폴더 경로 이동
$ cd [directoryPath]

# git 저장소 초기화 생성
$ git init

# 저장소 clone
$ git clone [url]

# 신규 원격 저장소 추가
$ git remote add [remoteRepository] [url]
```

- branch 관리

```
# 지역 브랜치 목록
$ git branch

# 원격 브랜치 목록
$ git branch -r

# 지역+원격 브랜치 목록
$ git branch -a

# 신규 브랜치 생성
$ git branch [branchName]

# 다른 위치에 신규 브랜치 생성
$ git branch [newBranchName] [newBranchPath]

# 기존 브랜치를 다른 브랜치로 덮어쓰기
$ git branch -f [oneBranch] [otherBranchPath]

# 브랜치 삭제
$ git branch -d [branchName]

$ 브랜치 이름 변경
$ git branch -m [branchName] [newBranchName]
# 브랜치 체크아웃
$ git checkout [branchName]

# 원격 브랜치 체크아웃
$ git checkout -t [remotePath]/[branchName]

# 현재 브랜치에서 신규 브랜치 생성 후 체크아웃
$ git checkout -b [newBranchName]
```



- 버전 및 이력 관리

```
# 특정 파일 추가
$ git add [filePath]

# 전체 파일 추가
$ git add *

# commit
$ git commit -m "[commitMessage]"

# commit 한 이전 코드 취소
$ git reset --hard HEAD^

# commit 만 취소, 코드는 그대로
$ git reset --soft HEAD^

# merge 취소
$ git reset --merge

# git 코드 강제로 모두 받기
$ reset --hard HEAD && git pull

# add하고 commit한 코드 server에 등록
$ git push [remoteName] [branchName]

# 작업코드 임시저장 후 브랜치 변경
$ git stash / git stash save [description]

# 마지막 임시저장 작업 내용 가져오기
$ git stash pop

# pull
$ git pull

# fetch
$ git fetch

# git pull no tracking info error 발생 시
$ git branch --set-upstream-to=[remotePath]/[branchName]
```

## git ignore

```
# 확장자 .a인 모든 파일 무시
*.a

# lib.a는 무시하지 않음
!lib.a

# 현재 디렉토리의 TODO파일은 무시
# subdir/TODO처럼 하위디렉토리에 있는 파일은 무시하지 않음
/TODO

# build/ 디렉토리에 있는 모든 파일은 무시
build/

# doc/notes.txt 파일은 무시하고 doc/server/arch.txt 파일은 무시하지 않음
doc/*.txt

# doc 디렉토리 아래의 모든 .pdf 파일을 무시
doc/**/*.pdf
```

# 참고

- [[Git 개념] Git 주요 용어 및 구성](https://victorydntmd.tistory.com/72)
- [깃(Git) 용어 정리](https://tech.10000lab.xyz/git/important-git-terms.html)
- [자주 사용하는 기초 git 명령어 정리하기](https://medium.com/@pks2974/%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B8%B0%EC%B4%88-git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-533b3689db81](https://medium.com/@pks2974/자주-사용하는-기초-git-명령어-정리하기-533b3689db81))

- [Git의 기초 수정하고 저장소에 저장하기]([https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0](https://git-scm.com/book/ko/v2/Git의-기초-수정하고-저장소에-저장하기))
