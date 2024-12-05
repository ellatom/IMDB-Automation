import IMDBHomePage from '../pageobjects/imdbHome.page.ts';
import SearchResultsList from '../pageobjects/searchResultsList.page.ts';
import { movies } from '../utils/testData.ts';

describe('Search results Page tests', () => {

    before( async() => {
        await IMDBHomePage.open();
    });

    it('should get info for first result of searched film', async () => {
        await IMDBHomePage.searchFilm(movies.godFather);
        await SearchResultsList.clickFirstResult();
    })
})

