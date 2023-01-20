const puppeteer = require("puppeteer");
const mail = "cifedo3542@unicsite.com";
const password = "tonystark";
const code = require("./code");//getting input from code.js file

let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] });
let page;
browserPromise.then(function (browser) {
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function (pageInstance) {
    console.log("Page is opened");
    page = pageInstance
    let urlPromise = page.goto('https://www.hackerrank.com/');
    return urlPromise;
}).then(function () {
    return waitAndClick('.menu-item-12851 a');
}).then(function () {
    let waitPromise = page.waitForSelector(".hr_button");
    return waitPromise;
}).then(function () {
    let domClickPromise = page.evaluate(function () {
        let btns = document.querySelectorAll(".hr_button");
        btns[1].click();
        return;
    })
    return domClickPromise;
}).then(function () {
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function () {
    let mailTypePromise = page.type("#input-1", mail, { delay: 100 });
    return mailTypePromise;
}).then(function () {
    let passwordTypePromise = page.type("#input-2", password, { delay: 100 });
    return passwordTypePromise;
}).then(function () {
    let clickPromise = page.click(".clearfix .ui-text");
    return clickPromise;
}).then(function () {
    return waitAndClick("[data-automation='algorithms']");
}).then(function () {
    console.log("Algorithm page opened");
    return page.waitForSelector(".filter-group");
}).then(function () {
    let domSelectPromise = page.evaluate(function () {
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function () {
    console.log("WarmUp questions opened");
    return page.waitForSelector(".challenges-list .challenge-list-item");
}).then(function () {
    let arrPromise = page.evaluate(function () {
        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .challenge-list-item');
        for(let i=0;i<aTags.length;i++){
            let link =  aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    return arrPromise;
}).then(function(questionsArr){
    console.log(questionsArr);
    let questionPromise = questionSolver(questionsArr[0],code.answers[0]);
    for(let i=1;i<questionsArr.length;i++){
        questionPromise = questionPromise.then(function(){
            let nextQuestionPromise = questionSolver(questionsArr[i],code.answers[i]);
            return nextQuestionPromise;
        })
    }
    return questionPromise;
}).then(function(){
    console.log("All the warm up questions have been submitted!!!");
})


function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function () {
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function () {
            resolve();
        })
    })
}

function questionSolver(question, answer) {
    return new Promise(function (resolve, reject) {
        let linkPromise = page.goto(question);
        linkPromise.then(function () {
            return waitAndClick(".checkbox-wrap");
        }).then(function () {
            return waitAndClick("#input-1");
        }).then(function () {
            console.log("on the text area");
            let typePromise = page.type("#input-1", answer);
            return typePromise;
        }).then(function () {
            let holdControl = page.keyboard.down("Control");//down holds the key pressing
            return holdControl;
        }).then(function () {
            let pressA = page.keyboard.press("A");//press just press the key one time
            return pressA;
        }).then(function () {
            let pressX = page.keyboard.press("X");
            return pressX;
        }).then(function () {
            let upControl = page.keyboard.up("Control");//up presses the key once that was down till now
            return upControl;
        }).then(function () {
            return waitAndClick(".editor-scrollable.vs");
        }).then(function () {
            let holdControl = page.keyboard.down("Control");
            return holdControl;
        }).then(function () {
            let pressA = page.keyboard.press("A");
            return pressA;
        }).then(function () {
            let pressV = page.keyboard.press("V");
            return pressV;
        }).then(function () {
            let upControl = page.keyboard.up("Control");
            return upControl;
        }).then(function () {
            return waitAndClick(".hr-monaco-submit.ui-btn-styled");
        }).then(function () {
            console.log("question submitted success");
            resolve();
        })
    })
}