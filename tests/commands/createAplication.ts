import { createPhone } from "./createPhone";

export const createApp = async ({ page }) => {
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
    )
    .click();
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
    )
    .fill("КЕЙДЖ");
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="middle_name"] [class="text_field tooltip-area"]'
    )
    .click();
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="middle_name"] [class="text_field tooltip-area"]'
    )
    .fill(generateRandomString(11));

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="first_name"] [class="text_field tooltip-area"]'
    )
    .click();
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="first_name"] [class="text_field tooltip-area"]'
    )
    .fill(generateRandomString(8));

  await page
    .locator(
      "div > div.field_container.required.empty.jq-input-radio.runtime > div.boxes_wrapper > div:nth-child(1) > div > span.radiobutton"
    )
    .click();
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="date_of_birth"] [class="text_field date tooltip-area"]'
    )
    .click();
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="date_of_birth"] [class="text_field date tooltip-area"]'
    )
    .fill("21.11.1997");

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="mobile_phone"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="mobile_phone"] [class="text_field tooltip-area"]'
    )
    .fill(createPhone());
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="email"] [class="text_field tooltip-area"]'
    )
    .click();
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="email"] [class="text_field tooltip-area"]'
    )
    .fill("papu@mail.ru");
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="citizenship"] [class="center row"] [class="text_field select tooltip-area"]'
    )
    .click();
  // await page
  //   .locator(
  //     '[data-control-name="menu"] [data-control-name="citizenship"] [class="dropdown-trigger unselectable"]'
  //   )
  //   .click();
  // await page
  //   .locator("li:nth-child(3) > a > span.ui-menu-item-label")
  //   .filter({ hasText: "Республика Узбекистан (860)" })
  //   .last()
  //   .click();

  // await page
  //   .locator(
  //     '[data-control-name="document_type"] [class="center row"] [class="fields-wrapper input-border"] [class="dropdown-trigger unselectable"]'
  //   )
  //   .click();

  // await page
  //   .locator(
  //     '[class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all vcm-dropdown"]'
  //   )
  //   .filter({ hasText: "Загранпаспорт" })
  //   .last()
  //   .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="document_number"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="document_number"] [class="text_field tooltip-area"]'
    )
    .fill("654456");

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="place_of_birth"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="place_of_birth"] [class="text_field tooltip-area"]'
    )
    .fill("ташкент");
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="issuing_authority"] [class="text_field tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="issuing_authority"] [class="text_field tooltip-area"]'
    )
    .fill("МВД по ташкенту");
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="date_of_issue"] [class="text_field date tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="date_of_issue"] [class="text_field date tooltip-area"]'
    )
    .fill("16.06.2016");
  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="expiration_date"] [class="text_field date tooltip-area"]'
    )
    .click();

  await page
    .locator(
      '[data-control-name="menu"] [data-control-name="expiration_date"] [class="text_field date tooltip-area"]'
    )
    .fill("21.11.2026");

  // await page
  //   .locator(
  //     '[data-control-name="menu"] [data-control-name="region"] [class="dropdown-trigger unselectable"]'
  //   )
  //   .click();

  // await page
  //   .locator("a")
  //   .filter({ hasText: "Амурская область" })
  //   .last()
  //   .click();
  await page
    .locator(
      '[data-control-name="further"] [class="button ui-button ui-widget  "] [class="ui-button-text ui-button-in-line"]'
    )
    .click();
};

export function generateRandomString(length: number): string {
  const charset = "абвгдеёжирапапзийклмнопрстуфхцчшщъыьэюя";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}
