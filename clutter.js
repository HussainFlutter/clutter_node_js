//Does Not Clutter js Files And Json files . If you want to clutter these files as well then change the true to false
const fs = require("fs");
const path = require('path');

function clutter(jsonAndJsCluttering) {
    let arrayOfFiles = fs.readdirSync(__dirname);
    for (file of arrayOfFiles) {
        let pathOfFileOrFolder = __dirname + `/${file}`;
        let stat = fs.statSync(pathOfFileOrFolder);
        if (stat.isDirectory()) {
            continue;
        }
        let ext = path.extname(file).replace(".", "");
        if (jsonAndJsCluttering == true) {
            if (ext != "js" && ext != "json") {
                if (!fs.existsSync(__dirname + `/${ext}`)) {
                    fs.mkdirSync(__dirname + `/${ext}`);
                }
                let oldPath = __dirname + `/${file}`;
                let newPath = __dirname + `/${ext}/${file}`;
                fs.renameSync(oldPath, newPath);
            }
        }
        else {
            if (file != "clutter.js" && file != "package.json") {
                if (!fs.existsSync(__dirname + `/${ext}`)) {
                    fs.mkdirSync(__dirname + `/${ext}`);
                }
                let oldPath = __dirname + `/${file}`;
                let newPath = __dirname + `/${ext}/${file}`;
                fs.renameSync(oldPath, newPath);
            }
        }
    }
}

clutter(false) //Type true to not clutter .json and .js files and false to clutter everything.