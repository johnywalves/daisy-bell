console.log("Start prebuild");

const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const pathmedia = `${__dirname}/public/media`;
if (!fs.existsSync(pathmedia)) {
  fs.mkdirSync(pathmedia);
}

const paththumbnail = `${__dirname}/public/thumbnail`;
if (!fs.existsSync(paththumbnail)) {
  fs.mkdirSync(paththumbnail);
}

const pathbanner = `${__dirname}/public/banner`;
if (!fs.existsSync(pathbanner)) {
  fs.mkdirSync(pathbanner);
}

const pathcategory = `${__dirname}/public/category`;
if (!fs.existsSync(pathcategory)) {
  fs.mkdirSync(pathcategory);
}

const pathsouce = `${__dirname}/source`;
fs.readdir(pathsouce, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(async function (file) {
    try {
      const ext = path.extname(file);
      const name = file.substr(0, file.lastIndexOf("."));
      await sharp(`${pathsouce}/${name}${ext}`)
        .resize(1200, 1200)
        .toFile(`${pathmedia}/${name}${ext}`);
      await sharp(`${pathsouce}/${name}${ext}`)
        .resize(160, 90)
        .toFile(`${pathcategory}/${name}-category${ext}`);
      await sharp(`${pathsouce}/${name}${ext}`)
        .resize(1200, 600)
        .toFile(`${pathbanner}/${name}-banner${ext}`);
      await sharp(`${pathsouce}/${name}${ext}`)
        .resize(240, 240)
        .toFile(`${paththumbnail}/${name}-thumb${ext}`);
    } catch (error) {
      console.log("Unable to convert " + error);
    }
  });
});

console.log("End prebuild");
