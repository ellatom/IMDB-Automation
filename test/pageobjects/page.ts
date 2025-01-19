import { browser } from '@wdio/globals'

export default class Page {
    readonly DEFAULT_TIMEOUT: number = 10000;

    public async open (path: string) {
        return await browser.url(path);
    }

    public async isDisplayed(element: ChainablePromiseElement, message: string){
        await element.waitForDisplayed({
            timeout: this.DEFAULT_TIMEOUT,
            timeoutMsg: `${message} element was not displayed within ${this.DEFAULT_TIMEOUT} seconds`
        });
    }

    public async getInnerHTML(element:ChainablePromiseElement){
        return element.getHTML(false);
    }
}
