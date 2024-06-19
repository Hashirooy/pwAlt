import { logIn } from "./logIn";
export const addAddresForegn = async (
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
  await page
    .locator(
      '[class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all vcm-dropdown inWindow"] [class="ui-menu-item"]'
    )
    .filter({ hasText: "Республика Узбекистан" })
    .click();

  await page
    .locator(
      '[data-control-name="settlement"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="settlement"] [class="text_field tooltip-area"]'
    )
    .fill("Ташкент");

  await page
    .locator(
      '[data-control-name="settlement_type"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="settlement_type"] [class="text_field tooltip-area"]'
    )
    .fill("г");

  await page
    .locator('[data-control-name="street"] [class="text_field tooltip-area"]')
    .click();

  await page
    .locator('[data-control-name="street"] [class="text_field tooltip-area"]')
    .fill("Пушкина");

  await page
    .locator(
      '[data-control-name="street_type"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="street_type"] [class="text_field tooltip-area"]'
    )
    .fill("ул");

  await page
    .locator('[data-control-name="house"] [class="text_field tooltip-area"]')
    .type("21");

  await page
    .locator(
      '[data-control-name="postal_code"] [class="text_field tooltip-area"]'
    )
    .type("543221");

  await page
    .locator(
      '[class="element group-stretch group horizontal-group __cell-noflex__"] [data-control-name="save_data"] [class="button ui-button ui-widget"]'
    )
    .click();
};
