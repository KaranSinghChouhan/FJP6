//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let arr1 = ["audio", "video", "image", "software", "documents", "applications", "other"];
let arr2 = ["abc", "def", "ghi", "ijk"];
let arr3 = [".mp3", ".mp4", ".png", ".exe", ".docx", ".rar", ".msi"];

for (let i = 0; i < arr1.length; i++) {
    let folderName = arr1[i];
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
    for (let j = 0; j < arr2.length; j++) {
        let fileName = arr2[j].concat(arr3[i]);
        let filePath = path.join(__dirname, folderName, fileName);
        fs.writeFileSync(filePath, "");
    }
}