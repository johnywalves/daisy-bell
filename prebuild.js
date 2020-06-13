console.log("Start prebuild");

const path = require('path');
const fs = require('fs');
const sharp = require("sharp");

const pathmedia = `${__dirname}/public/media`;
if (!fs.existsSync(pathmedia)) {
    fs.mkdirSync(pathmedia);
}

const paththumbnail = `${__dirname}/public/thumbnail`;
if (!fs.existsSync(paththumbnail)) {
    fs.mkdirSync(paththumbnail);
}

const pathsouce = `${__dirname}/source`;
fs.readdir(pathsouce, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(async function (file) {
        try {
            const ext = path.extname(file);
            const name = file.substr(0, file.lastIndexOf('.'));
            await sharp(`${pathsouce}/${name}${ext}`).resize(1200, 1200).toFile(`${pathmedia}/${name}${ext}`);
            await sharp(`${pathsouce}/${name}${ext}`).resize(240, 240).toFile(`${paththumbnail}/${name}-thumb${ext}`);
        } catch (err) {
            console.log("Unable to convert " + err);
        }
    })
});

console.log("End prebuild");