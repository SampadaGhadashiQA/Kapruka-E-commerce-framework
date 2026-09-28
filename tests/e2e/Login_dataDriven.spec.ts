import{test,expect} from'@playwright/test';
import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';


const test_Email=process.env.TEST_USER_EMAIL;
const test_Password=process.env.TEST_USER_PASSWORD;

if(!test_Email || !test_Password){
    throw new Error(
        'Missing TEST_EMAIL or TEST_PASSWORD environment variable. '+
        'Set these in config/.env.qa (copy from config/.env.example) before running tests. ' +
        'You need an account that already exists on kapruka.com -'+
        'create one via signup.spec.ts or manually first.'

    );
}

const logindata=[
    {label:"Valid Credentials",email:test_Email,password:test_Password,shouldSucceed:true},
    {label:"invalid Email",email:"invalid@gmail.com",password:test_Password,shouldSucceed:false},
    {label:"invalid Password",email:test_Email,password:"testxyz",shouldSucceed:false},
    {label:"Empty fields",email:" ",password:" ",shouldSucceed:false},

];

test.describe('karpura loging wih dataDriven',()=>{

for(const{label,email,password,shouldSucceed} of logindata){

    test(`login for ${label}`,async({page})=>{

        const loginpage=new LoginPage_SOLID(page);
        await loginpage.goto();
        await loginpage.LoginToApp(email,password);
        await loginpage.isLoaded;
       // await loginpage.verifyLoginSuccess();
       if (shouldSucceed) {
         await loginpage.verifyLoginSuccess();
      } else {
         await loginpage.verifyLoginFailure();
 }

    });
};
    
})