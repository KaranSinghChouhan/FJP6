//Given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs = require("fs");
//console.log(fs);

let path = require("path");
//console.log(path);

if (!fs.existsSync("fileExplorer_q2"))
    fs.mkdirSync("fileExplorer_q2");

let arr = ["audio", "video", "image", "software", "documents", "applications", "other"];
let file = ["file1", "file2", "file3", "file4"];
let ext = [".mp3", ".mp4", ".jpg", ".exe", ".pdf", ".app", ".txt"];


for (let i = 0; i < arr.length; i++) {
    let folderName = arr[i];
    let folderPath = path.join(__dirname, "fileExplorer_q2", folderName);
    if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath);

    for (let j = 0; j < file.length; j++) {
        let fileName = file[j] + ext[i];
        let newFilePath = path.join(folderPath, fileName);
        fs.writeFileSync(newFilePath, "");
    }

}

        // let song = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"];
        // let video = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];
        // let image = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
        // let software = ["software1.exe", "software2.exe", "software3.exe", "software4.exe"];
        // let documents = ["document1.pdf", "document2.pdf", "document3.pdf", "document4.pdf"];
        // let applications = ["application1.app", "application2.app", "application3.app", "application4.app"];
        // let other = ["other1.txt", "other2.txt", "other3.txt", "other4.txt"];

        // let file;
        // if(folder == "audio"){
        //     file = song[i];
        // }else if(folder == "video"){
        //     file = video[i];
        // }else if(folder == "image"){
        //     file = image[i];
        // }else if(folder == "software"){
        //     file = software[i];
        // }else if(folder == "documents"){
        //     file = documents[i];
        // }else if(folder == "applications"){
        //     file = applications[i];
        // }else {
        //     file = other[i];
        // }