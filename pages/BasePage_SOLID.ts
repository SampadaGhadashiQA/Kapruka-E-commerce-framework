import{Page , Locator,expect} from '@playwright/test'

export abstract class BasePage_SOLID {

readonly page:Page;

constructor(page:Page){
    this.page=page;
}

async navigate(url:string):Promise<void>{
 await this.page.goto(url,{waitUntil: 'domcontentloaded', timeout: 60000});
 //await this.page.goto(url,{waitUntil:'load'});
}

async click(locator:Locator):Promise<void>{
    await locator.waitFor({state:'visible'});
    await locator.click();

}

async fill(locator:Locator,value:string):Promise<void>{
    await locator.waitFor({state:'visible'});
    await locator.fill(value);
}
async scrollToElement(locator:Locator):Promise<void>{
    await this.page.mouse.wheel(0,2000);
    await this.page.waitForTimeout(2000);
}
async scrollDirectlyToElement(locator:Locator):Promise<void>{
    await locator.scrollIntoViewIfNeeded();
}
async scrollByUsingJavascript(locator:Locator):Promise<void>{
    await this.page.evaluate(()=>window.scrollBy(0,1500));
}

abstract isLoaded():Promise<void>;
}
 