import{Page,Locator,expect} from '@playwright/test';
import{BasePage_SOLID} from './BasePage_SOLID';

import{config} from '../config/environment';

export class LanguageDropdownPage extends BasePage_SOLID{

readonly languageDropDown : Locator;

constructor(page:Page){
    super(page);
    this.languageDropDown=page.getByRole('combobox',{name:"Select language"});
}
async goto():Promise<void>{

    await this.navigate(`${config.baseUrl}`);
    //await this.navigate('/');

}
async isLoaded(): Promise<void> {
    await this.languageDropDown.waitFor({state:'visible'});
}
//async selectLanguage(languageCode:'1'|'2' ):Promise<void>{
async selectLanguage(languageCode:string ):Promise<void>{

    await this.languageDropDown.waitFor({state:'visible'});
   // await this.languageDropDown.click();

    await this.languageDropDown.selectOption({value:languageCode});
    await this.page.waitForLoadState('load');

}
async verifyLanguage(expected: string): Promise<void>
    {
        await expect(this.languageDropDown).toHaveValue(expected);
    }
async printAllOptions():Promise<void>{

    await this.languageDropDown.waitFor({state:'visible'});
    const options = this.languageDropDown.getByRole('option');

    const count = await options.count();
    console.log(`Total options: ${count}`);

    for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).innerText());
    }
    
}

}