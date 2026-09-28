import{test,expect} from '@playwright/test';
import { ScrollPage } from '../../pages/ScrollPage';

test.describe('kapruka scroll to event ',()=>{

    test('Scroll to popular search today',async({page})=>{


        const scrollObj=new ScrollPage(page);
        await scrollObj.goto();
       await scrollObj.scrollToBestSellingGift();
        await scrollObj.isLoaded();

        //taking screenshot
        await page.screenshot({path:'dist/afterScroll.png'});

        await page.screenshot({path:'dist/fullpageScroll.png',fullPage:true});

        

    

    })
})