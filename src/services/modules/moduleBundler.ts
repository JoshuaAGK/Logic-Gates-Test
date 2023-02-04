import { Dirent, readdirSync } from "fs";

function getDirectories(source: string) {
    let dirents: Array<Dirent> = readdirSync(source, { withFileTypes: true })
    dirents = dirents.filter(dirent => dirent.isDirectory() && !dirent.name.includes(" copy") && dirent.name.startsWith("module"));
    return dirents.map(dirent => dirent.name);
}

function camelise(string: string) {
    return string.replace(/-./g, x => x[1].toUpperCase())
}

const moduleDirectories = getDirectories(__dirname);
const moduleNames = moduleDirectories.map(x => x.slice(0, 1).toUpperCase() + camelise(x).slice(1));

for (const i in moduleDirectories) {
    const directory: string = "./" + moduleDirectories[i];
    module.exports[moduleNames[i]] = require(directory).default;
}