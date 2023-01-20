const puppeteer = require("puppeteer");
const mail = "cifedo3542@unicsite.com";
const password = "tonystark";
const code = require("./code");//getting input from code.js file

(async function () {
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/');
    await waitAndClick(".menu-item-12851 a", page);
    await page.waitForSelector(".hr_button");
    await page.evaluate(function () {
        let btns = document.querySelectorAll(".hr_button");
        btns[1].click();
        return;
    })
    await page.waitForSelector("#input-1");
    await page.type("#input-1", mail, { delay: 100 });
    await page.type("#input-2", password, { delay: 100 });
    await waitAndClick(".clearfix .ui-text", page);
    await waitAndClick("[data-automation='algorithms']", page);
    await page.waitForSelector(".filter-group");
    await page.evaluate(function () {
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    });
    await page.waitForSelector(".challenges-list .challenge-list-item");
    let questionsArr = await page.evaluate(function () {
        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .challenge-list-item');
        for (let i = 0; i < aTags.length; i++) {
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    });
    for (let i = 0; i < questionsArr.length; i++) {
        await questionSolver(questionsArr[i], code.answers[i], page);
    }
})();

async function waitAndClick(selector, page) {
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function questionSolver(question, answer, page) {
    await page.goto(question);
    await waitAndClick(".checkbox-wrap", page);
    await waitAndClick("#input-1", page);
    await page.type("#input-1", answer);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("X");
    await page.keyboard.up("Control");
    await waitAndClick(".editor-scrollable.vs", page);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    await waitAndClick(".hr-monaco-submit.ui-btn-styled",page);
}