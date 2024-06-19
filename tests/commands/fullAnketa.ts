export const fullAnketa = async ({ page }) => {
  // await page
  //   .locator(
  //     '[data-control-name="credit_purpose"] [class="fields-wrapper input-border"] [class="dropdown-trigger unselectable"]'
  //   )
  //   .click();

  // await page.locator("a").filter({ hasText: "Повседневные расходы" }).click();

  // await page
  //   .locator(
  //     '[data-control-name="method_of_obtaining"] [class="fields-wrapper input-border"] [class="dropdown-trigger unselectable"]'
  //   )
  //   .click();

  // await page.locator("a").filter({ hasText: "Карта" }).click();

  await page.getByText("Подписание ЭЦП").click();
  await page.waitForTimeout(10000);

  await page
    .locator(
      '[data-control-name="form_and_sign_document"] [class="ui-button-text ui-button-in-line"]'
    )
    .click();
  await page.getByRole("button").click();
  await page.getByText("Текст", { exact: true }).click();
  const fileInput = await page.waitForSelector('input[type="file"]', {
    state: "attached",
  });
  await page.locator("input[type=file]").setInputFiles("tests/img/Vector.png");
  await page.waitForTimeout(10000);
};
