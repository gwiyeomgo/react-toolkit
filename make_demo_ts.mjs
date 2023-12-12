import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const additionalFiles = {
  'index.tsx': {
    content: fs.readFileSync(
      path.resolve(__dirname, './src/demo_init_ts/index.tsx'),
      'utf8',
    ),
  },
  'public/index.html': {
    content: fs.readFileSync(
      path.resolve(__dirname, './src/demo_init_ts/index.html'),
      'utf8',
    ),
  },
  'package.json': {
    content: fs.readFileSync(
      path.resolve(__dirname, './src/demo_init_ts/package.json'),
      'utf8',
    ),
  },
  'tsconfig.json': {
    content: fs.readFileSync(
      path.resolve(__dirname, './src/demo_init_ts/tsconfig.json'),
      'utf8',
    ),
  },
};

const files = fs.readdirSync('./src/demo/').reduce((acc, fileName) => {
  const filePath = path.resolve(__dirname, `./src/demo/${fileName}`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const fileObj = {
    ['App.tsx']: {
      title: fileName,
      content: fileContent,
    },
  };

  return [...acc, { ...fileObj, ...additionalFiles }];
}, []);

const filePromises = files.map((file) => {
  return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      files: file,
    }),
  })
    .then((response) => response.json())
    .then(({ sandbox_id }) => {
      return {
        title: file['App.tsx'].title,
        sandboxUrl: `https://codesandbox.io/s/${sandbox_id}`,
      };
    });
});

Promise.all(filePromises)
  .then((sandboxRes) => {
    const sandboxUrls = Object.values(sandboxRes).map(
      ({ sandboxUrl, title }, index) =>
        `|${index + 1}| [${title}](${sandboxUrl}) |`,
    );
    const readmeContent = `# @gwiyeomgo/react-toolkit
[![codecov][codecov-image]][codecov-url][![NPM version][npm-image]][npm-url][![NPM downloads][download-image]][download-url]
___
![ract Version](https://img.shields.io/badge/Node.js-18.16.0-blue?logo=Node.js&logoColor=339933)
![ract Version](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=61DAFB)

[npm-image]: http://img.shields.io/npm/v/@gwiyeomgo/react-toolkit?style=flat-square
[npm-url]: http://npmjs.org/package/@gwiyeomgo/react-toolkit
[codecov-image]: https://img.shields.io/codecov/c/github/gwiyeomgo/react-toolkit/main.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/gwiyeomgo/react-toolkit/branch/main
[download-image]: https://img.shields.io/npm/dm/@gwiyeomgo/react-toolkit?style=flat-square
[download-url]: https://www.npmjs.com/package/@gwiyeomgo/react-toolkit

> react 컴포넌트 모음

\`CodeSandbox Demo\`:\n\n||list|\n|---|---|\n${sandboxUrls.join('\n')}`;

    fs.writeFileSync(path.resolve(__dirname, 'README.md'), readmeContent);

    console.log(sandboxRes);
  })
  .catch((error) => console.error('Error:', error));
