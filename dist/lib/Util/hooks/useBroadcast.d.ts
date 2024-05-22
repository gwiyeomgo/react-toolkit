declare const useBroadcast: (
  topic: string,
  fn: (payload: any) => void,
) => ((args: any) => void)[];
export { useBroadcast };
