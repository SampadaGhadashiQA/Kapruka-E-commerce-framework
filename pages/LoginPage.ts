import{Page,Locator,expect} from '@playwright/test'
import{BasePage} from "./BasePage";

export class LoginPage extends BasePage {
readonly emailInput:Locator;
readonly password:Locator;
 readonly loginButton:Locator; 
  
  
    constructor(page: Page) {
        super(page);
        this.emailInput=this.page.getByPlaceholder('Enter email');
       this.password=this.page.getByPlaceholder('Password');
       this.loginButton=this.page.getByRole('button', { name: 'Login' });
    }
    async goto():Promise<void>{

      await this.navigatedTo(process.env.BASE_URL || 'https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
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
     }
  }