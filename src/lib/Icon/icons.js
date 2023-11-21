import { lazy as _lazy } from "react";

function lazy(importFn) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  Cross: lazy(async () => import("./assets/cross.svg")),
  Download: lazy(async () => import("./assets/download.svg")),
  Degrees360: lazy(async () => import("./assets/360-degrees.svg")),
  MenuBurger: lazy(async () => import("./assets/menu-burger.svg")),
  Star: lazy(async () => import("./assets/star.svg")),
};