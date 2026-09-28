import {test,expect} from '@playwright/test';
import { CurrencyDropdownPage } from '../../pages/CurrencyDropdownPage'

test.describe('Kapruka Currency Dropdown',()=>{

    test('Verify Currency Dropdown',async({page})=>{

        const currencyDropdownPage=new CurrencyDropdownPage(page);
        await currencyDropdownPage.goto();
        await currencyDropdownPage.isLoaded();
        await currencyDropdownPage.selectCurrency('INR');
        await currencyDropdownPage.verifyCurrency('INR');
        await currencyDropdownPage.selectCurrency('USD');
        await currencyDropdownPage.verifyCurrency('USD');

    });
})