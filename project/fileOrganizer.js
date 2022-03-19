// Project - One folder have unorganized files, we will make another folder in which we will organized these files in their respective folders like Audio/Video etc.

//How to take input vioa terminal:-
// let input = process.argv;
// console.log(input);

//Project:-

// Task1 - Input
//Assumption1: - No folder inside folder
// Task2 - Read folder
// Task3: - Differentiate files (like all audio type in audio, all doc types in doc - with the help of object)
// Task4: - make folder in which our file will return
// Task5: - Move File

let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];
// console.log(folderPath);
let folderExists = fs.existsSync(folderPath);

let extensions = {
    Audio: [".mp3"],
    Video: [".mp4",".mkv",".gif"],
    Document: [".doc",".xlsx",".pdf",".txt"],
    Image: [".jpg",".jpeg",".png"],
    Software: [".exe"]
}

if(folderExists){
    //We will code
    let files = fs.readdirSync(folderPath);
    for(let i = 0; i<files.length; i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log("ext: -",ext,"   Folder: -",nameOfFolder);  // folderName = name of folder like Audio, Video
        let pathOfFolder = path.join(folderPath,nameOfFolder);    //pathOfFolder = path to folder like Audio, Video
        let exist = fs.existsSync(pathOfFolder);               //folderPath = Path to where out files exists (Here Downloads)
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);

        }
    }
}else{
    console.log("Please enter a valid path");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key]; // This will provide the values of key
            for(let j = 0; j<extArr.length; j++){
                if(extArr[j] == ext){
                    return key;
                }
            }
    }
    return "others";
}

function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}






