import{test,expect} from '../../fixtures/auth/PageFixtures';


test.describe('kapruka Combo Gifts page',()=>{

    test.beforeEach(async ({ comboPage }) => {
        await comboPage.goto();
       //  await comboPage.isLoaded();
    });


    test('should get first product name',async({comboPage})=>{

       const name=await comboPage.getFirstProductName();
        console.log(`First product name is : ${name}`);
        expect (name).toBeTruthy();
      //  expect(name.length).toBeGreaterThan(0);
    });

    test('should get first product price in USD',async({comboPage})=>{

        const price=await comboPage.getFirstProductPrice();
        console.log(`First product price is : ${price}`);
        expect (price).toBeTruthy();
        expect(price).toMatch(/^US\$/);
        // ^ = start of string , US = literal character , \$ = literal $ character, $ = end of string
        //The string must start with US$.
    });

    test('should get all products',async({comboPage})=>{

        const products=await comboPage.getAllProducts();
        console.log(`Total products found: ${products.length}`);

        products.forEach((p,i)=>{
            console.log(`${i+1}: ${p.name}, ${p.price}`);
        });

       expect (products.length).toBeGreaterThan(0);

       products.forEach((product)=>{
        expect(product.name).toBeTruthy();
        expect(product.price).toBeTruthy();
       });
    });

        



       test('every listed product should have a valid USD price',async({comboPage})=>{

        const products=await comboPage.getAllProducts();
        products.forEach((p)=>{
        expect(p.price).toMatch(/^US\$[\d,]+(\.\d{2})?$/);
   
        // /^US = start with string US$
        // [\d,] = accept 0-9 nos. and comma ,
        // \.\d{2})? = optional decimal point followed by 2 digits
        // $ = end of string
        // The string must start with US$ followed by a number (with optional commas) and an optional decimal point with 2 digits.
       });

    
        });

        test('the first product from listAllProducts should match getFirstProductName/Price',async({comboPage})=>{

            const name=await comboPage.getFirstProductName();
            const price=await comboPage.getFirstProductPrice();
            const products=await comboPage.getAllProducts();
            const firstProduct=products[0];
            expect(name).toBe(firstProduct.name);
            expect(price).toBe(firstProduct.price);
        });


       });



    

