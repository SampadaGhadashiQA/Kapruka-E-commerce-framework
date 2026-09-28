import{Page,Locator,expect} from '@playwright/test';
import { BasePage_SOLID } from './BasePage_SOLID';
import { config } from '../config/environment';

export class HomePage extends BasePage_SOLID {

    readonly kitchenAppliances :Locator;
   

    constructor (page:Page){
        super(page);  
         this.kitchenAppliances = page.getByRole('link', {name:/Kitchen Appliances/});
    
    }
async goto():Promise<void>{
    await this.navigate(`${config.baseUrl}/online/electronics`);
  
}
async isLoaded(): Promise<void> {
    
    await expect(this.kitchenAppliances).toBeVisible();
}

async hoverKitchenAppliances():Promise<void>
    {
    await this.kitchenAppliances.hover({ timeout: 15000 });
    }
async getKitchenAppliancesTooltip(): Promise<string | null>{
     return await this.kitchenAppliances.getAttribute('title');
    }

async verifyKitchenAppliancesTooltip(): Promise<void> {
    await expect(this.kitchenAppliances).toHaveAttribute('title', /Shop For Kitchen Appliances/);
        
    }


}