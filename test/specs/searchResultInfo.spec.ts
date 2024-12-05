import IMDBHomePage from '../pageobjects/imdbHome.page.ts';
import SearchResultsList from '../pageobjects/searchResultsList.page.ts';
import SearchResultInfo from '../pageobjects/searchResultInfo.page.ts';
import { movies } from '../utils/testData.ts';

describe('Search result info Page tests', () => {

    before( async() => {
        await IMDBHomePage.open();
    });

    it('should have mandatory info in first result', async () => {
        await IMDBHomePage.searchFilm(movies.godFather);
        await SearchResultsList.clickFirstResult();
        await SearchResultInfo.validateMandatoryInfo();
    })
})

