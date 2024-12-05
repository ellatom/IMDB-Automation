import { $ } from '@wdio/globals'
import Page from './page.js';
import { movies } from '../utils/testData.js';

class SearchResultsList extends Page {

    private get firstResult (){
        return $('section[data-testid="find-results-section-title"] ul.ipc-metadata-list > li:first-of-type');
    }

    private get header() {
        return $('h1[class="sc-f2794aa0-0 kwbjLl"]');
    }

    public async clickFirstResult(){
        await this.firstResult.click();
    }

    public async validateResultsListDisplayed(){
    
            await this.isDisplayed(this.header, "Header");   
            expect(await this.header.getText()).toBe(`Search "${movies.godFather.toLowerCase()}"`);     
    }
}

export default new SearchResultsList();
