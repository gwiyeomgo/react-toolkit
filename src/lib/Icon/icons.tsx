import { lazy as _lazy } from 'react';

//Unexpected any. Specify a different type
//"@typescript-eslint/no-explicit-any": ["off"]
//https://ko.legacy.reactjs.org/docs/code-splitting.html#reactlazy
//Don't use `Function` as a type. The `Function` type accepts any function-like value.
//https://www.totaltypescript.com/dont-use-function-keyword-in-typescript
// Function 대신 () => any 사용
function lazy(importFn: () => any) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  Cross: lazy(async () => import('./assets/cross.svg')),
  Download: lazy(async () => import('./assets/download.svg')),
  Degrees360: lazy(async () => import('./assets/360-degrees.svg')),
  MenuBurger: lazy(async () => import('./assets/menu-burger.svg')),
  Star: lazy(async () => import('./assets/star.svg')),
  Search: lazy(async () => import('./assets/search.svg')),
  Heart: lazy(async () => import('./assets/heart.svg')),
  Minus: lazy(async () => import('./assets/minus.svg')),
  Plus: lazy(async () => import('./assets/plus.svg')),
  EmptyHeart: lazy(async () => import('./assets/empty-heart.svg')),
  ArrowRight: lazy(async () => import('./assets/arrow-right.svg')),
  ArrowLeft: lazy(async () => import('./assets/arrow-left.svg')),
};
