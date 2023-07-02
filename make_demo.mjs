import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs.readdirSync('./src/demo/').reduce((acc, cur) => ({
    ...acc,
    [`App.js`]: {
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
            const pieces = filePath.split("/");
            const title = pieces[pieces.length - 1];
            return {
                title: title,
                filePath: filePath,
                sandboxUrl: `https://codesandbox.io/s/${sandbox_id}`
            };
        });
});

Promise.all(filePromises)
    .then(sandboxRes => {
        console.log(sandboxRes);
    })
    .catch(error => console.error('Error:', error));
