// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://developers.google.com/web/');
//   await page.screenshot({ path: 'example.png' });
//   await browser.close();
// })();

const puppeteer = require("puppeteer");
let browserPromise = puppeteer.launch({ headless: false });

browserPromise.then(function (browserInstance) {
    console.log("Browser is opened");
    let pagePromise = browserInstance.newPage();
    return pagePromise;
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("Google is opened");
})