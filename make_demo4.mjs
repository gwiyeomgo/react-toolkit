import fs from  'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs.readdirSync('./src/demo/').reduce((acc, cur) => ({
    ...acc,
    [`${cur}`]: {
        content: fs.readFileSync(path.resolve(__dirname, `./src/demo/${cur}`), 'utf8')
    }
}), {});


Promise.all(
    Object.entries(files).map(([filePath, file]) =>{

        return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                files: { [filePath]: file },
                'package.json': {
                    content: {
                        "dependencies": {
                            "react": "^18.0.0",
                            "react-dom": "^18.0.0",
                            "react-scripts": "^4.0.0"
                        } }
                }
            })
        })
            .then(response => response.json())
            .then(({ sandbox_id }) => {
                const pieces = filePath.split("/")
                const title = pieces[pieces.length - 1]
                return{
                    title :title,
                    filePath :filePath,
                    sandboxUrl :`https://codesandbox.io/s/${sandbox_id}`
                }
            })
    }

    )
)
    .then((sandboxRes) => {
        const sandboxUrls = Object.values(sandboxRes).
        map(({ sandboxUrl,title,filePath },index) => `|${index + 1}| [${title}](${sandboxUrl}) |`);
        const readmeContent = `CodeSandbox Demo:\n\n||list|\n|---|---|\n${sandboxUrls.join('\n')}`;
        fs.writeFileSync(path.resolve(__dirname, 'README.mdx'), readmeContent);
     })
    .catch(error => console.error('Error:', error));
