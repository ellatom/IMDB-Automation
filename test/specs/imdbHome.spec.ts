import IMDBHomePage from '../pageobjects/imdbHome.page.ts';
import SearchResultsList from '../pageobjects/searchResultsList.page.ts';
import {movies} from '../utils/testData.ts';

describe('IMDB Home Page tests', () => {

    //Navigate to IMDB
    before( async() => {
        await IMDBHomePage.open();
    });

    it('should get results of searched film', async () => {
        await IMDBHomePage.searchFilm(movies.godFather);
        await SearchResultsList.validateResultsListDisplayed();
    })
})

