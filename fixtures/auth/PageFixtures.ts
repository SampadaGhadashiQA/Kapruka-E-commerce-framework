import{test as base} from '@playwright/test';

import { CurrencyDropdownPage } from '../../pages/CurrencyDropdownPage';
import { ComboGiftsPage } from '../../pages/ComboGiftsPage';

type MyFixtures={
  currDropdownPage:CurrencyDropdownPage;
  comboPage:ComboGiftsPage;
};

export const test=base.extend<MyFixtures>({

  
  currDropdownPage:async({page},use)=>{
    await use(new CurrencyDropdownPage(page));
  },
  
  comboPage:async({page},use)=>{
    await use(new ComboGiftsPage(page));
  }
  });
  export { expect } from '@playwright/test';



