const { test, expect } = require('@playwright/test');
const FlipkartPage = require('../pageObjects/FlipkartPage');
const LaptopDetailsPage =require('../pageObjects/LaptopDetailsPage');

test('Verify the current repoUser is same as the previous repoUser', async ({ browser }) => {
    const context = await browser.newContext();
    const flipkartPage = new FlipkartPage(await context.newPage());
  
    await flipkartPage.goTo();
    await flipkartPage.closeLoginPopup();
    await flipkartPage.hoverOnElectronics();
    await flipkartPage.clickOnLaptopsAndDesktop();
  
    const links = await flipkartPage.getChromebookLinks();
    for await (const link of links) {
      try {
        const laptopDetailsPage = new LaptopDetailsPage(await context.newPage());
        const beforeClickLaptopName = await laptopDetailsPage.getLaptopName();
        console.log("beforeClickOnlinkLaptopName= ", beforeClickLaptopName);
        
        await laptopDetailsPage.clickOnLaptop();
        
        const laptopPrice = await laptopDetailsPage.getLaptopPrice();
        console.log("LaptopPrice= ", laptopPrice);
        
        const afterClickOfLapTop = await laptopDetailsPage.getAfterClickLaptopText();
        console.log("afterClickOfLapTop= ", afterClickOfLapTop);
        
        await laptopDetailsPage.goBack();
      } catch (error) {
        console.error("Error: Element is not attached to the DOM");
      }
    }
  });