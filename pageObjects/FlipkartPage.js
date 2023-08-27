class FlipkartPage {

        constructor(page) {
          this.page = page;
        }
      
        async goTo() {
          await this.page.goto('https://flipkart.com/');
        }
      
        async closeLoginPopup() {
          await this.page.locator("button[class='_2KpZ6l _2doB4z']").click();
        }
      
        async hoverOnElectronics() {
          await this.page.hover('text=Electronics');
        }
      
        async clickOnLaptopsAndDesktop() {
          await this.page.hover('text=Laptop and Desktop');
          await this.page.locator("a[href*=laptops-store]").nth(2).click();
          await this.page.waitForTimeout(3000);
          await this.page.evaluate(() => {
            window.scrollBy(0, 500);
          });
          await this.page.waitForSelector("div a[title*='Chromebook'].s1Q9rs", { timeout: 5000 });
        }
      
        async getChromebookLinks() {
          const links = await this.page.$$("div a[title*='Chromebook'].s1Q9rs");
          return links;
        }
      
        async goBack() {
          await this.page.goBack();
        }
      }
      
      module.exports = FlipkartPage;
      