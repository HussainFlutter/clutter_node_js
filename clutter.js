//Does Not Clutter js Files And Json files . If you want to clutter these files as well then change the true to false
const fs = require("fs");
const path = require('path');

function clutter(jsonAndJsCluttering) {

    let arrayOfFilesNames = fs.readdirSync(__dirname); // Getting all the files names in the directory

    for (fileName of arrayOfFilesNames) { // FileName is a single file name

        //If it's a folder we continue
        let pathOfFileOrFolder = __dirname + `/${fileName}`;
        let stat = fs.statSync(pathOfFileOrFolder);
        if (stat.isDirectory()) {
            continue;
        }
        //If it's a folder we continue


        let ext = path.extname(fileName).replace(".", ""); // Removing the . from the fileName

        if (jsonAndJsCluttering == true) {

            if (ext != "js" && ext != "json") { // Not cluttering json and js files
                if (!fs.existsSync(__dirname + `/${ext}`)) { // Checking if  the folder alerady exists
                    fs.mkdirSync(__dirname + `/${ext}`); 
                }
                let oldPath = __dirname + `/${fileName}`; 
                let newPath = __dirname + `/${ext}/${fileName}`;
                fs.renameSync(oldPath, newPath); //Moving the files to their folders
            }
        }
        else {
            if (fileName != "clutter.js" && fileName != "package.json")  { // Not cluttering the clutter.js and package.json
                if (!fs.existsSync(__dirname + `/${ext}`)) { // Checking if  the folder alerady exists
                    fs.mkdirSync(__dirname + `/${ext}`);
                }
                let oldPath = __dirname + `/${fileName}`;
                let newPath = __dirname + `/${ext}/${fileName}`;
                fs.renameSync(oldPath, newPath); //Moving the files to their folders
            }
        }
    }
}

clutter(false) //Type true to not clutter .json and .js files and false to clutter everything.