# 타입스크립트 tsconfig.json 설정

# [타입스크립트 @\_lib 으로 절대경로 지정 방법](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC)

> tsconfig-paths

```
//절대경로 지정
"baseUrl": "./",
"paths": {
  "@_lib/*": [
    "src/lib/*"
  ]
},
```

- paths 를 설정할때는 baseUrl 을 꼭 함께 설정
- paths 에 `@_lib`을 지정한 것은 alias 를 선언한 것,
  실제 사용하려면 tsconfig-paths 설치
  https://www.npmjs.com/package/tsconfig-paths
- @로 시작하는 라이브러리를 npm을 통해 받아서 사용할때 alias 명칭과 중복되지 않게 등록

```
// 전역 속성으로 추가
  "compilerOptions": {
   ...
  },
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  }
```

` tsc && tsc-alias` 실행 -> 적용

```
//package.json
"scripts": {
"build": "tsc --project tsconfig.json && npx tsc-alias -p tsconfig.json",
}
```

# [타입스크립트 \*.css 설정](https://jaketrent.com/post/typescript-cannot-find-css-module/)

> TS2307: Cannot find module '@\_lib/styles.module.css' or its corresponding type declarations* tsconfig.json - `"include": ["src/\*\*/*"]`

- mkdir src/types
- nvim src/types/index.d.ts

```
declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}
```

- tsc 실행

Props 는 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 데이터
State 는 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용
리액트 훅이란 useEffect,useState 등 함수 컴포넌트에서도 클래스 컴포넌트의 상태 관리,컴포넌트의 생명 주기를 사용할 수 있게 해주는 방법

# 라이프사이클

- constructor
- render
- getDerivedStateFromProps 함수
- componentDidMount 함수
- shouldComponentUpdate 함수
- getSnapshotBeforeUpdate 함수
- componentDidUpdate 함수
- componentWillUnmount 함수
- componentDidCatch 함수

> 호출 순서

클래스 컴포넌트에서 이 라이프사이클 함수를 잘 활용하면,좀 더 최적화된 컴포넌트를 만들 수 있다.
