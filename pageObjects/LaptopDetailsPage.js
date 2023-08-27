class LaptopDetailsPage {
    constructor(page) {
        this.page = page;
      }
    
      async getLaptopName() {
        const link = this.page.locator("div a[title*='Chromebook'].s1Q9rs");
        await link.waitForElementState('visible', { timeout: 8000 });
        await link.waitForElementState('enabled', { timeout: 9000 });
        await link.waitForElementState('stable', { timeout: 9000 });
        const laptopName = await link.textContent();
        return laptopName;
      }
    
      async clickOnLaptop() {
        const link = this.page.locator("div a[title*='Chromebook'].s1Q9rs");
        await link.waitForElementState('visible', { timeout: 8000 });
       // await link.waitForElementState('enabled', { timeout: 9000 });
        //await link.waitForElementState('stable', { timeout: 9000 });
        await link.click();
        await this.page.waitForTimeout(9000);
      }
    
      async getLaptopPrice() {
        await this.page.waitForSelector("[class='_30jeq3 _16Jk6d']", { timeout: 8000 });
        const laptopPrice = await this.page.locator("[class='_30jeq3 _16Jk6d']").textContent();
        return laptopPrice;
      }
    
      async getAfterClickLaptopText() {
        await this.page.waitForSelector("[class='B_NuCI']", { timeout: 8000 });
        const afterClickOfLapTop = await this.page.locator("[class='B_NuCI']").textContent();
        return afterClickOfLapTop;
      }
    }
  
  module.exports = LaptopDetailsPage;