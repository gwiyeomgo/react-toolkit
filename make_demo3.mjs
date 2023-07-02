import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = './src/demo/';
const folders = fs.readdirSync(folderPath)
    .filter(file => fs.statSync(path.join(folderPath, file)).isDirectory());

Promise.all(
    folders.map(folder => {
        const folderFullPath = path.join(folderPath, folder);
        const files = fs.readdirSync(folderFullPath)
            .filter(file => fs.statSync(path.join(folderFullPath, file)).isFile())
            .map(file => ({
                fileName: file,
                content: fs.readFileSync(path.join(folderFullPath, file), 'utf8')
            }));

        const appFilePath = path.join(folderFullPath, 'demo.js');
        const appFileContent = `import React from 'react';\n\n${files.map(file => file.content).join('\n')}\n\nfunction App() {\n  return (\n    <div>\n      {files}\n    </div>\n  );\n}\n\nexport default App;\n`;

        files.push({
            fileName: 'demo.js',
            content: appFileContent
        });

        return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                files: {
                    ...files.reduce((acc, cur) => ({
                        ...acc,
                        [`${folder}/${cur.fileName}`]: {
                            content: cur.content
                        }
                    }), {}),
                    'package.json': {
                        content: JSON.stringify({
                            dependencies: {
                                react: 'latest',
                                'react-dom': 'latest'
                            }
                        })
                    }
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                const sandboxId = data.sandbox_id;
                return { folder, sandboxId };
            });
    })
)
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });
