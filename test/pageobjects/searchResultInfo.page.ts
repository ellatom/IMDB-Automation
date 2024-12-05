import { $ } from '@wdio/globals'
import Page from './page.js';
import { movies } from '../utils/testData.js';

class SearchResultInfo extends Page {

    readonly STAR_NAME: string = "Marlon Brando";
    readonly MIN_RATE: number = 8.0;

    private get title (): ChainablePromiseElement {
        return $('h1[data-testid="hero__pageTitle"]');
    }

    private get description (): ChainablePromiseElement {
        return $('p[data-testid="plot"]');
    }

    private get getAllStars (): ChainablePromiseArray {
        return $$('div[class="sc-70a366cc-3 iwmAOx"] a[href*="name/nm"][href*="tt_ov_st"]');
    }

    private get getFilmRate(): Promise<string>{
        return $('div[class="sc-9a2a0028-3 bwWOiy"] span[class="sc-d541859f-1 imUuxf"]').getText();
    }

    public async isStarExistsinStarList(): Promise<boolean>{
        
        return (await this.getAllStars
                                .map((star:any) => star.getText()))
                                .some((item:string)=>item.includes(this.STAR_NAME));
    }

    /**
     * Validates that the title matches the expected movie title.
     */
    public async validateTitle(){

        const expected: string = movies.godFather;

        await this.isDisplayed(this.title, "Title");

        const actual: string = await this.title.getText();
    
        console.log(`Expected: "${expected}", Actual: "${actual}"`);
    
        expect(actual).toBe(expected);
    }

    /**
     * Validates that the description isn't empty.
     */
    public async validateDescription(){

        const expected: string = this.description.getText();

        this.isDisplayed(this.description, "Description");

        console.log(`Expected: "${expected}"`);
        
        expect(expected).not.toBe("");    
    }
    

    public async validateStarExists(){

        const starExists = await this.isStarExistsinStarList();
        expect(starExists).toBe(true);  
    }

    public async validateRate(){

        const rateText = await this.getFilmRate;
        const rate = parseFloat(rateText);
    
        if (isNaN(rate)) {
            throw new Error(`Failed to parse rate: ${rateText}`);
        }
    
        const result = rate > this.MIN_RATE;
        expect(result).toBe(true);
    }

    public async validateMandatoryInfo() {
    
        await this.validateTitle();
        await this.validateDescription();
        await this.validateStarExists();
        await this.validateRate();       
    }
}

export default new SearchResultInfo();
