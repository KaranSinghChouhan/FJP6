const request = require('request');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";

request(link, cb);//this line means: call this function after below work is comleted

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamsName = document.querySelectorAll(".ds-text-tight-l.ds-font-bold.ds-text-ui-typo.hover:ds-text-ui-typo-primary.ds-block.ds-truncate");
        console.log(teamsName[1].textContent);
    }
}