import { Page,Locator,expect } from "@playwright/test";
import { BasePage_SOLID } from './BasePage_SOLID';
import{config} from '../config/environment';

export  class ScrollPage extends BasePage_SOLID{

    readonly bestSellingGift :Locator ;

    constructor(page:Page){
        super(page);
        this.bestSellingGift=page.getByRole('heading',{name:'Popular Searches Today:'});

    }
    async goto():Promise<void>{
     await this.navigate(`${config.baseUrl}/shops/events_home.jsp`);

       // await this.navigate("https://www.kapruka.com/shops/events_home.jsp");


    }
    
    async isLoaded(): Promise<void> {
        await expect(this.bestSellingGift).toBeVisible();
    }

    async scrollToBestSellingGift():Promise<void>{
    //1.    await this.scrollToElement(this.bestSellingGift);
        await this.scrollDirectlyToElement(this.bestSellingGift);

    }

}