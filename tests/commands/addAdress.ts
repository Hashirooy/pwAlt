import { logIn } from "./logIn";
export const addAddres = async (
  { page },
  type: string,
  country: string,
  city: string
) => {
  await page
    .locator(
      '[data-control-name="addresses"] [class="ui-btn ui-btn-action  btn-green "]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="address_type"] [class="dropdown-trigger unselectable"]'
    )
    .click();

  await page.locator("a").filter({ hasText: type }).click();

  await page
    .locator(
      '[data-control-name="country"] [class="dropdown-trigger unselectable"]'
    )
    .click();
  await page.locator("a").filter({ hasText: country }).click();

  await page.waitForSelector(
    '[data-control-name="dadata_widget_settlement"] [class="top row"]'
  );

  await page.waitForLoadState("load");

  await page
    .locator('[data-control-name="dadata_widget_settlement"] [class="top row"]')
    .click();

  await page.waitForSelector(
    '[data-control-name="dadata_widget_settlement"] [class="fields-wrapper input-border"] [class="text_field select tooltip-area"]'
  );

  await page
    .locator(
      '[data-control-name="dadata_widget_settlement"] [class="fields-wrapper input-border"] [class="text_field select tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="dadata_widget_settlement"] [class="text_field select tooltip-area ui-autocomplete-input"]'
    )
    .fill("Москва");

  await page
    .locator(
      '[data-control-name="dadata_widget_settlement_type"] [class="text_field select tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="dadata_widget_settlement_type"] [class="text_field select tooltip-area ui-autocomplete-input"]'
    )
    .fill("г");

  await page
    .locator(
      '[data-control-name="dadata_widget_street"] [class="text_field select tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="dadata_widget_street"] [class="text_field select tooltip-area ui-autocomplete-input"]'
    )
    .fill("Пушкина");

  await page
    .locator(
      '[data-control-name="dadata_widget_street_type"] [class="text_field select tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="dadata_widget_street_type"] [class="text_field select tooltip-area ui-autocomplete-input"]'
    )
    .fill("ул");

  await page
    .locator(
      '[data-control-name="dadata_widget_house"] [class="text_field select tooltip-area"]'
    )
    .type("21");

  await page
    .locator(
      '[data-control-name="dadata_widget_postal_code"] [class="text_field tooltip-area"]'
    )
    .type("543221");

  await page
    .locator(
      '[data-control-name="save_data"] [class="button ui-button ui-widget  "] [class="ui-button-text ui-button-in-line"]'
    )
    .click();
};
