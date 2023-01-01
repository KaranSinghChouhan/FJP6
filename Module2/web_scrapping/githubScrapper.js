const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";

request(link, cb);

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
        for (let j = 0; j < 8; j++) {
            let link2 = repositoriesLink[j].href;
            let completeLink2 = "https://github.com" + link2 + "/issues";
            //console.log(completeLink2);
            request(completeLink2, cb3);
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
        for (let k = 0; k < 5; k++) {
            let link3 = issueDetail[k].href;
            let issueName = issueDetail[k].textContent;
            let completeLink3 = "https://github.com" + link3;
            console.log("Issue Name: " + issueName + "  " + "Issue Link: " + completeLink3);
        }
    }
}