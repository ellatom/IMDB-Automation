import { browser } from '@wdio/globals'

export default class Page {
    readonly DEFAULT_TIMEOUT: number = 10000;

    public open (path: string) {
        return browser.url(path);
    }

    public async isDisplayed(element: ChainablePromiseElement, message: string){
        await element.waitForDisplayed({
            timeout: this.DEFAULT_TIMEOUT,
            timeoutMsg: `${message} element was not displayed within ${this.DEFAULT_TIMEOUT} seconds`
        });
    }
}
