import{Page,Locator,expect} from '@playwright/test'
import { BasePage_SOLID } from './BasePage_SOLID'

import { config } from '../config/environment'

export class LoginPage_SOLID extends BasePage_SOLID {
 readonly emailInput:Locator;
 readonly password:Locator;
 readonly loginButton:Locator; 
 readonly loginErrorMessage: Locator;
  
  
    constructor(page: Page) {
        super(page);
        this.emailInput=page.getByPlaceholder('Enter email');
       this.password=page.getByPlaceholder('Password');
       this.loginButton=page.getByRole('button', { name: 'Login' });
       this.loginErrorMessage=page.locator("//font[@color='red']")
    }
    async goto():Promise<void>{

      await this.navigate(`${config.baseUrl}${config.loginPath}`);
      //await this.navigatedTo(process.env.BASE_URL || 'https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');

      

    }

    async isLoaded(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async LoginToApp(email:string,password:string):Promise<void>{

      await this.fill(this.emailInput,email);
      await this.fill(this.password,password);
      await this.click(this.loginButton);

    }
     async verifyLoginSuccess():Promise<void>{

      const currentUrl=this.page.url();
      if(currentUrl.includes('error')){
         throw new Error('Login failed');
       }
      await expect(this.page).toHaveURL(/accountView\.jsp/);
      //  await expect(this.page).not.toHaveURL(/accountLogin/);
     }
     async verifyLoginFailure(): Promise<void> {
    await expect(this.loginErrorMessage).toBeVisible();
}
     }