const originConsoleErr = console.error;

//  Warning: Connect(Droppable): Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.
//https://github.com/BDD-CLUB/01-doo-re-front/pull/208

const ignoreWarns = [
  'not wrapped in act',
  'configured to support act',
  'defaultProps will be removed',
];

// Hack off React warning to avoid too large log in CI.
console.error = (...args) => {
  const str = args.join('').replace(/\n/g, '');
  if (ignoreWarns.every((warn) => !str.includes(warn))) {
    originConsoleErr(...args);
  }
};
