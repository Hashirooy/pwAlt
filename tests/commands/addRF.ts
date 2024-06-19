export const addRF = async ({ page }) => {
  await page
    .locator(
      '[data-control-name="contacts"] [class="ui-btn ui-btn-action  btn-green "]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="contact_type"] [class="center row"] [class="dropdown-trigger unselectable"]'
    )
    .click();

  await page.locator("a").filter({ hasText: "Телефон РФ" }).click();

  await page
    .locator(
      '[data-control-name="contact_value"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="contact_value"] [class="text_field tooltip-area"]'
    )
    .fill("7565677565");

  await page
    .locator(
      '[data-control-name="contact_person_name"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="contact_person_name"] [class="text_field tooltip-area"]'
    )
    .fill("Серега");

  await page
    .locator(
      '[data-control-name="kinship"] [class="dropdown-trigger unselectable"]'
    )
    .click();

  await page.locator("a").filter({ hasText: "Сестра" }).click();

  await page
    .locator(
      ' [data-control-name="pop_up_window"] [data-control-name="save_data"] [class="ui-button-text ui-button-in-line"]'
    )
    .click();
};
