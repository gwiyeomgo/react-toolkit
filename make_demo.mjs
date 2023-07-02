import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs.readdirSync('./src/demo/').reduce((acc, cur) => ({
    ...acc,
    [`App.js`]: {
        title : cur,
        content: fs.readFileSync(path.resolve(__dirname, `./src/demo/${cur}`), 'utf8')
    }
}), {});

// 추가할 파일의 경로와 내용을 정의합니다.
const additionalFiles = {
    'index.js': {
        content: fs.readFileSync(path.resolve(__dirname, './src/demo_init/index.js'), 'utf8')
    },
    'index.html': {
        content: fs.readFileSync(path.resolve(__dirname, './src/demo_init/index.html'), 'utf8')
    },
    'package.json': {
        content: fs.readFileSync(path.resolve(__dirname, './src/demo_init/package.json'), 'utf8')
    }
};

const filePromises = Object.entries(files).map(([filePath, file]) => {
    return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            files: {
                ...files,
                ...additionalFiles
            }
        })
    })
        .then(response => response.json())
        .then(({ sandbox_id }) => {
            return {
                title: file.title,
                sandboxUrl: `https://codesandbox.io/s/${sandbox_id}`
            };
        });
});

Promise.all(filePromises)
    .then(sandboxRes => {
        const sandboxUrls = Object.values(sandboxRes).
        map(({ sandboxUrl,title },index) => `|${index + 1}| [${title}](${sandboxUrl}) |`);
        const readmeContent = `# @gwiyeomgo/react-toolkit
작업하면서 생성했던 react 컴포넌트 모음

\`CodeSandbox Demo\`:\n\n||list|\n|---|---|\n${sandboxUrls.join('\n')}`;

        fs.writeFileSync(path.resolve(__dirname, 'README.md'), readmeContent);


        console.log(sandboxRes);
    })
    .catch(error => console.error('Error:', error));
