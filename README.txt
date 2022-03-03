Node Practices

1. 패키지(Package)
    - 완전한 애플리케이션(nodedaemon, babel, webpack)
    - 프로젝트에서 사용하는 모듈(라이브러리)

2. 의존성(Dependency)
    - 개발하는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 패키지
    - 일반 의존성
        - 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함
        - $[project-ex01] npm i ...
    - 개발 의존성
        - 개발에 필요하거나 도움이 되는 패키지(dev tool), 배포에 포함되지 않는다.
        - $[project-ex01] npm i -D ...

3. 패키지 설치
    - 1) 전역(global) 설치 : 여러 프로젝트에서 공통으로 사용하는 도구 설치
    - 2) 지역(local) 설치 : 특정 프로젝트에 종속적인 도구나 라이브러리
    - 3) 패키지 설치
        - $[project-ex01] npm i ejs (local, general dependency)
        - $[project-ex01] npm i -D nodemon (local, dev dependency)
        - $[project-ex01] npm i -g gulp (global)

    - 4) 패키지 삭제
        - $[project-ex01] npm un ejs (local install 삭제)
        - $[project-ex01] npm un -g gulp (global install 삭제)

4. Node(JavaScript) Project(BE/FE Application, Package) 생성
    - 1) 프로젝트 생성 (mkdir)
    - 2) 프로젝트 이동 (cd)
    - 3) 프로젝트 초기화 : 프로젝트 매니페스트 파일(package.json) 생성
        - $[project-ex01] npm init -y

5. Module
    - 1) 코어 모듈(fs, os, ... node에서 제공해주는 모듈)
    - 2) 파일 모듈 : 파일 경로로 불러와서 모듈안의 함수, 객체를 사용한다.
    - 3) npm 모듈 : npm을 통해서 node_modules에 설치하고 사용하는 모듈
        - 원격 배포
        - 로컬 배포

6. npmjs.com(npm registry)에 내 패키지 배포(생략)


7. helloweb-ex01 (맨바닥)


8. helloweb-ex02 (express)

