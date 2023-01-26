const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const puppeteer = require("puppeteer");
var config = require("./config");
let quoteTweet;

let rndInt1 = Math.floor(Math.random() * 100) + 1;
//console.log(rndInt1);
let link = "https://www.goodreads.com/quotes?page=" + rndInt1;

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let quoteDiv = document.querySelectorAll('.quoteText');
        let quoteNos = quoteDiv.length;
        let rndInt2 = Math.floor(Math.random() * quoteNos) + 1;
        //console.log(rndInt2);
        let quote = quoteDiv[rndInt2].textContent;
        let splitted = quote.split("―");
        console.log(splitted[0]);
        quoteTweet = splitted[0];
    }

}

(async function () {
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://www.linkedin.com/');

    await page.waitForSelector(".input__input[type='text']");
    await page.type(".input__input[type='text']", config.mail, { delay: 150 });

    await page.waitForSelector(".input__input[type='password']");
    await page.type(".input__input[type='password']", config.password, { delay: 150 });

    await waitAndClick(".sign-in-form__submit-button", page);

    await page.waitForSelector("#ember26");
    await waitAndClick("#ember26", page);

    await page.waitForSelector(".ql-editor");
    await waitAndClick(".ql-editor", page);
    await page.type(".ql-editor", quoteTweet, { delay: 50 });
    await page.waitForSelector(".share-guider-custom-carousel-prompt");
    await waitAndClick(".artdeco-button--primary .artdeco-button__text", page);
})()

async function waitAndClick(selector, page) {
    await page.waitForSelector(selector);
    await page.click(selector);
}

