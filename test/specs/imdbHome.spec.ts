import IMDBHomePage from '../pageobjects/imdbHome.page.ts';
import SearchResultsList from '../pageobjects/searchResultsList.page.ts';
import {movies} from '../utils/testData.ts';

describe('IMDB Home Page tests', () => {

    before( async() => {
        await IMDBHomePage.open();
    });

    it('should get results for searched film', async () => {
        await IMDBHomePage.searchFilm(movies.godFather);
        await SearchResultsList.validateResultsListDisplayed();
    })
})

