import { expect } from "playwright/test";
import { addForegign } from "./addForign";
import { addRF } from "./addRF";

export const createCredit = async ({ page }) => {
  await page.waitForSelector('[data-control-name="offers_card"]');
  await page
    .locator('[data-control-name="offers"] [class="unselected"]')
    .click();
  // await addRF({ page });
  // await addRF({ page });
  // await addForegign({ page });
  // await addForegign({ page });

  expect(
    await page
      .locator(
        '[data-control-name="application_documents"] [class="jq-header-caption-text"]'
      )
      .textContent()
  ).toEqual("Документы по заявке");
  await page.getByText("Текст", { exact: true }).nth(1).click();
  await page.locator("input[type=file]").setInputFiles("tests/img/Vector.png");

  await page
    .locator(
      "div#MainViewport div:nth-child(2) > div.jq-panel-body-default.jq-multypanel-cell-body > div > div > div.element.group.vertical-group.__cell-noflex__ > div > div.element.group.vertical-group > div.element.group.horizontal-group > div.element.group.vertical-group.cell-20 > div > div.element.widget.widget-text.height-by-content.user-def-arrow-down.cell-1 > div > div > span"
    )
    .click();
  await page.locator("input[type=file]").setInputFiles("tests/img/Vector.png");

  await page
    .locator(
      "div#MainViewport div:nth-child(3) > div.jq-panel-body-default.jq-multypanel-cell-body > div > div > div.element.group.vertical-group.__cell-noflex__ > div > div.element.group.vertical-group > div.element.group.horizontal-group > div.element.group.vertical-group.cell-20 > div > div.element.widget.widget-text.height-by-content.user-def-arrow-down.cell-1 > div > div > span"
    )
    .click();
  await page.locator("input[type=file]").setInputFiles("tests/img/Vector.png");

  await page
    .locator(
      "div#MainViewport div:nth-child(4) > div.jq-panel-body-default.jq-multypanel-cell-body > div > div > div.element.group.vertical-group.__cell-noflex__ > div > div.element.group.vertical-group > div.element.group.horizontal-group > div.element.group.vertical-group.cell-20 > div > div.element.widget.widget-text.height-by-content.user-def-arrow-down.cell-1 > div > div > span"
    )
    .click();
  await page.locator("input[type=file]").setInputFiles("tests/img/Vector.png");

  await page
    .locator(
      '[data-control-name="client_refused"] [class="button ui-button ui-widget  main"]'
    )
    .click();
  await page.waitForTimeout(5000);
  // await page
  //   .locator(
  //     '[data-control-name="reason"] [class="dropdown-trigger unselectable"]'
  //   )
  //   .click();
  // await page
  //   .locator("a")
  //   .filter({ hasText: "Просто интересовался условиями" })
  //   .click();
  await page
    .locator(
      '[data-control-name="save_card"] [class="ui-button-text ui-button-in-line"]'
    )
    .click();
};
