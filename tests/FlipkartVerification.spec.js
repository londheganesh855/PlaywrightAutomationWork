const { test, expect } = require('@playwright/test');
test.only('Verify the current repoUser is same as the previous repoUser', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  let links;
  let link;
  await page.goto("https://flipkart.com/");
   await page.locator("button[class='_2KpZ6l _2doB4z']").click();
  //loginPop.click();
  await page.hover('text=Electronics');
  await page.hover('text=Laptop and Desktop');
  await page.locator("a[href*=laptops-store]").nth(2).click();
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await page.waitForSelector("div a[title*='Chromebook'].s1Q9rs", { timeout: 3000 });
  links = await page.$$("div a[title*='Chromebook'].s1Q9rs");
  for (const link of links) {
    await page.waitForTimeout(3000);
    const beforeClickLaptopName = await link.textContent();
    console.log("beforeClickOnlinkLaptopName = ", beforeClickLaptopName);
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      link.click(),
    ]);
    //await newPage.waitForTimeout(3000);
    await newPage.waitForSelector("[class='_30jeq3 _16Jk6d']", { timeout: 3000 });
    const laptopPrice = await newPage.locator("[class='_30jeq3 _16Jk6d']").textContent();
    console.log("LaptopPrice = ", laptopPrice);
    await newPage.waitForSelector("[class='B_NuCI']", { timeout: 3000 });
    const afterClickOfLapTop = await newPage.locator("[class='B_NuCI']").textContent();
    console.log("afterClickOfLapTop = ", afterClickOfLapTop);
    //expect(beforeClickLaptopName).toContain(afterClickOfLapTop);
  }
});

