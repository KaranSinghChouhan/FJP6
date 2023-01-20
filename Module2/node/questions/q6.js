//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let folderPath = path.join(__dirname, "..", "unorganised");
let content = fs.readdirSync(folderPath);

for (let i = 0; i < content.length; i++) {
    let filePath = path.join(folderPath, content[i]);
    let extensionName = path.extname(filePath);
    if (extensionName == ".mp3") {
        console.log("Audio File");
    } else if (extensionName == ".mp4") {
        console.log("Video File");
    } else if (extensionName == ".jpg") {
        console.log("Image File");
    } else if (extensionName == ".pdf") {
        console.log("pdf File");
    } else if (extensionName == ".xlsx") {
        console.log("Excel File");
    } else if (extensionName == ".doc") {
        console.log("Document File");
    } else {
        console.log("Other File");
    }
}


