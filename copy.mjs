
import fs, { fstatSync } from 'fs';

const srcPath = "..\\..\\dist";
const distPath = ".\\";
const resourcesPath = distPath + "resources";

const files = fs.readdirSync(srcPath, {
    recursive: true,
    withFileTypes: true
});

if (fs.existsSync(resourcesPath)) {
    fs.rmSync(resourcesPath, { recursive: true });
}

if (files) {
    for (const file of files) {
        if (!file.isFile()) continue;
        if (!file.name.match(/^.*\.(d.ts)$/)) continue;
        const ourDir = distPath + file.path.slice(srcPath.length) + "\\";
        
        if (!fs.existsSync(ourDir)) {
            fs.mkdirSync(ourDir, { recursive: true });
        }

        fs.copyFileSync(file.path + "\\" + file.name, ourDir + file.name);
    }
}