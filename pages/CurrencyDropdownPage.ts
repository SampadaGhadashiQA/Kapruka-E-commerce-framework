import{Page,Locator,expect} from '@playwright/test';
import{BasePage_SOLID} from './BasePage_SOLID';

import{config} from '../config/environment';

export class CurrencyDropdownPage extends BasePage_SOLID{

readonly currencyDropDown : Locator;

constructor(page:Page){
    super(page);
    this.currencyDropDown=page.getByRole('combobox',{name:"Select Currency"});
}
async goto():Promise<void>{

    await this.navigate(`${config.baseUrl}`);
    //await this.navigate('/');

}
async isLoaded(): Promise<void> {
    await this.currencyDropDown.waitFor({state:'visible'});
}
async selectCurrency(currencyCode:'INR' | 'USD' ):Promise<void>{

    await this.currencyDropDown.waitFor({state:'visible'});
    await this.currencyDropDown.selectOption({label:currencyCode});
    await this.page.waitForLoadState('load');

}
async verifyCurrency(expected: string): Promise<void>
    {
        await expect(this.currencyDropDown).toHaveValue(expected);
    }


}