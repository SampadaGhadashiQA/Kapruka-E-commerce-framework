import{Page,Locator,expect} from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID';
import{config} from '../config/environment';


export interface Productinfo{
    name:string;
    price:string;

}
export class ComboGiftsPage extends BasePage_SOLID{

    readonly page:Page;
    readonly productname:Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.productname=page.locator('.catalogueV2heading');
    };
    async goto():Promise<void>{
        await this.navigate(`${config.baseUrl}/online/combogifts`);

    };
    async isLoaded(): Promise<void> {
        await expect(this.page).toHaveTitle(/Combogifts/);
        await this.productname.first().waitFor({state:'visible',timeout:5000});
    };
    // get first product name 
    async getFirstProductName():Promise<string>{

        const nameLocator=this.productname.first();
        await nameLocator.waitFor({state:'visible',timeout:20000});
        const name=await nameLocator.textContent();
   
        return name?.trim() ||'';

    };
    // get first product price
    async getFirstProductPrice():Promise<string>{

        const card=this.productname.first().locator('xpath=ancestor::div[contains(@class,"catalogueV2textBlock")]');
        //From this product name, move UP the HTML DOM to its ancestor <div> containing catalogueV2textBlock.
        const priceLocator=card.locator('.lTitlePrice').first();
        await priceLocator.waitFor({state:'visible',timeout:20000});
        const price=await priceLocator.textContent();
        return price?.trim() ||'';

    };

    // list all product 

    async getAllProducts():Promise<Productinfo[]>{


        //this function return a ProductInfo - an array(list) of ProductInfo Object

      //  await this.isLoaded();
        const count=await this.productname.count();
        const result:Productinfo[]=[];
        for(let i=0;i<count;i++){
            const nameLocator=this.productname.nth(i);
            await nameLocator.waitFor({state:'visible',timeout:20000});
            const name=await nameLocator.textContent();
            const card=nameLocator.locator('xpath=ancestor::div[contains(@class, "catalogueV2textBlock")]');
            const priceLocator=card.locator('.lTitlePrice').first();
            await priceLocator.waitFor({state:'visible',timeout:20000});
            const price=await priceLocator.textContent();
            result.push({
                name:name?.trim() ||'',
                price:price?.trim() ||''
            });
             };
            return result;
        };


    }

    /*
     flow
     getAllProducts()->isLoaded()->check page title ->check 1st product visible ->count() ->
     -> how many product? -> create empty result[] -> for loop -> product 1 -> get name ->
     ->find its card -> get price -> push to result({name,price}) -> product 2-> get name ->
     -> find its card -> get price -> push to result ({name,price})->

     */ 

     // npx playwright test comboGiftsFixture.spec.ts --project=webkit



    
