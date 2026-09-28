import{test,expect} from '../../fixtures/auth/PageFixtures';

test.describe('kapruka Currency selection from dropdown ',()=>{

      test.beforeEach(async ({ currDropdownPage }) => {
        await currDropdownPage.goto();
    });
    test('Switch from USD to INR',async({currDropdownPage})=>{

    
        await currDropdownPage.selectCurrency('INR');
        await currDropdownPage.verifyCurrency('INR');
    });
     test('Switch from INR to USD',async({currDropdownPage})=>{

    
        await currDropdownPage.selectCurrency('USD');
        await currDropdownPage.verifyCurrency('USD');
    });


})


