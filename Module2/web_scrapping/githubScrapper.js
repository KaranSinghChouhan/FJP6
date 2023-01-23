//First it will go to appered three topics on the github home page
//then it will go to first 5 repository links
//then it will go to first 3 issues of those repository
//then it will take their name and link and convert into JSON file and make a excel file from thatr JSON file.

const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
let xlsx = require("json-as-xlsx");

const link = "https://github.com/topics";

request(link, cb);
let scrapper = [];
//let counter = 0;

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allAnchorTags = document.querySelectorAll('.no-underline.d-flex.flex-column.flex-justify-center');
        for (let i = 0; i < allAnchorTags.length; i++) {
            let link = allAnchorTags[i].href;
            let completeLink = "https://github.com" + link;
            //console.log(completeLink);
            request(completeLink, cb2);
            //counter++;
        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let repositoriesLink = document.querySelectorAll('.text-bold.wb-break-word');
        for (let j = 0; j < 5; j++) {
            let link2 = repositoriesLink[j].href;
            let completeLink2 = "https://github.com" + link2 + "/issues";
            //console.log(completeLink2);
            request(completeLink2, cb3);
            //counter++;
        }
    }
}

function cb3(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let issueDetail = document.querySelectorAll('.Link--primary.v-align-middle');
        for (let k = 0; k < 3; k++) {
            let link3 = issueDetail[k].href;
            let issueName = issueDetail[k].textContent;
            let completeLink3 = "https://github.com" + link3;
            //console.log("Issue Name: " + issueName + "  " + "Issue Link: " + completeLink3);
            processData(issueName, completeLink3);
        }
        //counter--;
        if (scrapper.length == 45) {
            //console.log(scrapper);
            let data = JSON.stringify(scrapper);
            fs.writeFileSync("githubData.json", data);

            //converting json file into excel file

            let datasheet = [
                {
                    sheet: "Adults",
                    columns: [
                        { label: "Issue", value: "issueName" },
                        { label: "Link", value: "issueLink" },
                    ],
                    content: scrapper
                },
            ]

            let settings = {
                fileName: "githubIssues", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
            }

            xlsx(datasheet, settings) // Will download the excel file
        }

    }
}

function processData(name, link) {

    let dataObj = {
        issueName: name,
        issueLink: link,
    }
    scrapper.push(dataObj);
}