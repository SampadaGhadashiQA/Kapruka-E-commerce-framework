import {test,expect} from '@playwright/test'
import { LoginPage} from '../../pages/LoginPage'


test.describe ('Kapruka Login page',()=>{
test('login with valid credential', async({page})=>{

  const loginobj=new LoginPage(page);
  await loginobj.goto();

  await loginobj.isLoaded();

  await loginobj.LoginToApp(process.env.TEST_USER_EMAIL || 'Ruby@gmail.com', process.env.TEST_USER_PASSWORD || 'Ruby@123');

  await loginobj.verifyLoginSuccess();

})

});