/**
 * Typescript Cannot Find CSS Module
 * https://jaketrent.com/post/typescript-cannot-find-css-module/
 */

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
