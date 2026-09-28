import {test,expect} from '@playwright/test';
import { LanguageDropdownPage } from '../../pages/LanguageDropdownPage';

test.describe('Kapruka Language Dropdown',()=>{

    test('Verify Language Dropdown',async({page})=>{
        const langDropdown=new LanguageDropdownPage(page);

        
        await langDropdown.goto();
        await langDropdown.isLoaded();
        await langDropdown.selectLanguage('2');
        await langDropdown.verifyLanguage('2');
        await langDropdown.selectLanguage('1');
        await langDropdown.verifyLanguage('1');

        await langDropdown.printAllOptions();

    });
})