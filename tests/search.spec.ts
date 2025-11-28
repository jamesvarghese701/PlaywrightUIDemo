import { test, expect } from '../fixtures/baseFixtures'
import { Resultspage } from '../pages/ResultsPage';

//Data privider for serach key and result count
let searchData = [
    {searcKey: 'macbook', resultsCount: 3},
    {searcKey: 'samsung', resultsCount: 2},
    {searcKey: 'imac', resultsCount: 1},
    {searcKey: 'canon', resultsCount: 1},
    {searcKey: 'dummy', resultsCount: 0}
];
for (let product of searchData) {

// test(`verify product search ${product.searcKey}`, async ({ page }) =>{

//     //Arrane Actions Assert - AAA
//     let loginPage = new LoginPage(page);
//     await loginPage.goToLoginPage();
//     let homePage: HomePage = await loginPage.doLogin('pwtest@nal.com', 'test123')
//     let resultsPage: Resultspage = await homePage.doSearch(product.searcKey);
//     expect (await resultsPage.getSearchResultsCount()).toBe(product.resultsCount);
// });

    test(`verify product search ${product.searcKey}`, async ({ homePage }) => {

    let resultsPage: Resultspage = await homePage.doSearch(product.searcKey);
    expect (await resultsPage.getSearchResultsCount()).toBe(product.resultsCount);

});
}
