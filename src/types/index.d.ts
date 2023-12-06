/**
 * Typescript Cannot Find CSS Module
 * https://jaketrent.com/post/typescript-cannot-find-css-module/
 */

declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

/**
https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
 */
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
