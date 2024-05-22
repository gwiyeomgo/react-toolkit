//고차함수
//https://yceffort.kr/2020/10/prevent-double-click-on-button
// eslint-disable-next-line @typescript-eslint/ban-types
export const doOnce = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};
//버튼을 여러 번 클릭하여 중복 작업을 방지하고 싶지만, 일정 시간이 지나면 다시 작업할 수 있도록
// eslint-disable-next-line @typescript-eslint/ban-types
export const doOnceWithDelay = (fn, delay) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
      setTimeout(() => {
        done = false;
      }, delay);
    }
  };
};
