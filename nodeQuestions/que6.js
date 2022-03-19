//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let filePath = path.join(__dirname,"unorganised");
let content = fs.readdirSync(filePath);
//console.log(content);

for(let i = 0; i<content.length; i++){
    let extName = path.extname(content[i]);
    if(extName == ".mp3"){
        console.log("Audio File");
    }else if(extName == ".pdf"){
        console.log("PDF File");
    }else if(extName == ".jpeg"){
        console.log("Image File");
    }else{
        console.log("Video File");
    }
}
