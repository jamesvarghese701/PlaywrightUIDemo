import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '../fixtures/baseFixtures'

test('verify valid login', async ({ homePage }) =>{

    //Arrane Actions Assert - AAA
    // let loginPage = new LoginPage(page);
    // await loginPage.goToLoginPage();
    // let homePage: HomePage = await loginPage.doLogin('pwtest@nal.com', 'test123')
    // expect(await homePage.isUserLoggeedOn()).toBeTruthy();

    await expect(homePage.page).toHaveTitle('My Account');
});

// test('verify Invalid login', async ({ page }) =>{

//     //Arrane Actions Assert - AAA
//     let loginPage = new LoginPage(page);
//     await loginPage.goToLoginPage();
//     await loginPage.doLogin('abc@nal.com','test12345')
//     await loginPage.getInvalidLoginMessage()
// })

test.skip('verify Invalid login', async ({ page, baseURL }) => {
    //AAA
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage(baseURL);
    await loginPage.doLogin('abc111@nal.com', 'test123456');
    const errorMesg = await loginPage.getInvalidLoginMessage();
    expect(errorMesg).toContain('Warning: No match for E-Mail Address and/or Password.')

});