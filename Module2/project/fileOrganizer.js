//We will give folder path in inpput and it wtill organize that folder.
//like here in terminal we will write - node fileOrganizer.js "E:\\2. Code\\Pepcoding\\FJP6\\Module2\\project\\Download"

//Assumption - There is no folder inside download folder, only files should be there, for folder inside folder, we need to use Recursion.

let fs = require("fs");
let path = require("path");

let folderPath = process.argv[2];//taking input of folder path

let folderExists = fs.existsSync(folderPath)

//Below we are making a object to differentiate between file extensions.
let extensions = {
    Audio: [".mp3"],
    Video: [".mp4", ".mkv", ".gif"],
    Document: [".pdf", ".xlsx", ".doc", ".txt"],
    Image: [".png", ".jpeg", ".jpg"],
    Software: [".exe"]
};

if (folderExists) {
    let files = fs.readdirSync(folderPath);
    for (let i = 0; i < files.length; i++) {
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);//Function which gives us name of folder by giving it extenssion
        //console.log("Ext--", ext, "Folder--", nameOfFolder);
        let pathOfFolder = path.join(folderPath, nameOfFolder);
        let exist = fs.existsSync(pathOfFolder);
        if (exist) {
            moveFile(folderPath, pathOfFolder, files[i]);
        } else {
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath, pathOfFolder, files[i]);
        }
    }
} else {
    console.log("Enter a valid path");
}

function giveFolderName(ext) {
    for (let key in extensions) {
        let extArr = extensions[key];
        for (let i = 0; i < extArr.length; i++) {
            if (extArr[i] == ext) {
                return key;
            }
        }
    }
    return 'Others';
}

function moveFile(folderPath, pathOfFolder, fileName) {
    let sourcePath = path.join(folderPath, fileName);
    let destinationPath = path.join(pathOfFolder, fileName);
    fs.copyFileSync(sourcePath, destinationPath);
    fs.unlinkSync(sourcePath);
}


