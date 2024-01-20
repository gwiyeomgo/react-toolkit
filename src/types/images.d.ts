

declare module '*.png' {
  const value: string;
  export default value;
}
/**
 https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
 */
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}