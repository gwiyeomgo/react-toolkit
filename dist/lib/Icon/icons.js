var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { lazy as _lazy } from 'react';
//Unexpected any. Specify a different type
//"@typescript-eslint/no-explicit-any": ["off"]
//https://ko.legacy.reactjs.org/docs/code-splitting.html#reactlazy
//Don't use `Function` as a type. The `Function` type accepts any function-like value.
//https://www.totaltypescript.com/dont-use-function-keyword-in-typescript
// Function 대신 () => any 사용
function lazy(importFn) {
  return _lazy(() =>
    __awaiter(this, void 0, void 0, function* () {
      const m = yield importFn();
      return { default: m.ReactComponent };
    }),
  );
}
export const icons = {
  Cross: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/cross.svg');
    }),
  ),
  Download: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/download.svg');
    }),
  ),
  Degrees360: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/360-degrees.svg');
    }),
  ),
  MenuBurger: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/menu-burger.svg');
    }),
  ),
  Star: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/star.svg');
    }),
  ),
  Search: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/search.svg');
    }),
  ),
  Heart: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/heart.svg');
    }),
  ),
  Minus: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/minus.svg');
    }),
  ),
  Plus: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/plus.svg');
    }),
  ),
  EmptyHeart: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/empty-heart.svg');
    }),
  ),
  ArrowRight: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/arrow-right.svg');
    }),
  ),
  ArrowLeft: lazy(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      return import('./assets/arrow-left.svg');
    }),
  ),
};
