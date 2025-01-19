import { $ } from '@wdio/globals';
import Page from './page.js';

class IMDBHomePage extends Page {

    readonly BASE_URL:string = "https://www.imdb.com";

    private get searchInput (): ChainablePromiseElement {
        return $('#suggestion-search');
    }
    private get submitButton (): ChainablePromiseElement {
        return $('button#suggestion-search-button');
    }
    
    /**
     * Enters the film name into the search input field.
     * @param filmName - Name of the film to search.
     */
    private async enterFileName (filmName: string){
        await this.isDisplayed(this.searchInput, "Enter file name");
        await this.searchInput.setValue(filmName);
    }

    /**
     * Submit the search of file name.
     */
    private async clickSubmitButton () {
        await this.isDisplayed(this.submitButton, "Submit button");
        await this.submitButton.click();
    }

    public async searchFilm (filmName: string) {
        await this.enterFileName(filmName);
        await this.clickSubmitButton();
    }

    public async open () {
        return await super.open(this.BASE_URL);
    }
}

export default new IMDBHomePage();
