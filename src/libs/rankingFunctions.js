import puppeteer from "puppeteer";

export async function getKeywordRank(domain, keyword) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto()
}