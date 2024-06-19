import { test, expect, chromium } from "@playwright/test";
import { logIn } from "./commands/logIn";
import { createApp } from "./commands/createAplication";
import { fullAnketa } from "./commands/fullAnketa";
import { addRF } from "./commands/addRF";
import { addForegign } from "./commands/addForign";
import { addAddres } from "./commands/addAdress";
import { addAddresForegn } from "./commands/addAdressForegn";
import { anketa } from "./commands/anketa";
import { createCredit } from "./commands/createCredit";
import { log } from "./commands/Log";

export const scenario2 = async ({ page }) => {
  await page.setDefaultTimeout(120000);
  await log({ page }, "gabysheva2", "gabysheva2");
  await page.waitForLoadState("load");
  await page.waitForSelector('[class="ui-table-wrapper"]');
  await page.getByText("Создать заявку").click();
  await page.waitForSelector(
    '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
  );
  await page.getByText("Фамилия", { exact: true }).nth(2).click();

  await createApp({ page });

  await page.waitForSelector(
    '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
  );

  await fullAnketa({ page });

  await page.waitForSelector(
    '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
  );

  await anketa({ page });

  await createCredit({ page });
};
