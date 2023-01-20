const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags1 = document.querySelectorAll('.ds-grow.ds-px-4 a[class = "ds-no-tap-higlight"]');
        console.log(allScorecardTags1.length);
        // for(let i = 0; i < allScorecardTags.length; i++){
        //     let link = allScorecardTags[i].href;
        //     let completeLink = "https://www.espncricinfo.com"+link;
        //     console.log(completeLink);
        // }
    }
}