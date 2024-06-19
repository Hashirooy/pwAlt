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
import { Console } from "console";

let workers = [
  { name: "test0", login: "fis_autotest_11", password: "fis_autotest_11" },
  { name: "test1", login: "fis_autotest_1", password: "fis_autotest_1" },
  { name: "test2", login: "fis_autotest_2", password: "fis_autotest_2" },
  { name: "test3", login: "fis_autotest_3", password: "fis_autotest_3" },
  { name: "test4", login: "fis_autotest_4", password: "fis_autotest_4" },
  { name: "test5", login: "fis_autotest_5", password: "fis_autotest_5" },
  { name: "test6", login: "fis_autotest_6", password: "fis_autotest_6" },
  { name: "test7", login: "fis_autotest_7", password: "fis_autotest_7" },
  { name: "test8", login: "fis_autotest_8", password: "fis_autotest_8" },
  { name: "test9", login: "fis_autotest_9", password: "fis_autotest_9" },
  { name: "test10", login: "fis_autotest_10", password: "fis_autotest_10" },
  { name: "test13", login: "fis_autotest_13", password: "fis_autotest_13" },
  { name: "test14", login: "fis_autotest_14", password: "fis_autotest_14" },
  { name: "test15", login: "fis_autotest_15", password: "fis_autotest_15" },
  { name: "test12", login: "fis_autotest_12", password: "fis_autotest_12" },
];
for (let i = 0; i <= 14; i++) {
  test(workers[i].name, async () => {
    const browser = await chromium.launch({ args: ["--max-workers=15"] });
    // Создание новой страницы в браузере
    const page = await browser.newPage();
    await page.context().clearCookies();
    await logIn({ page }, workers[i].login, workers[i].password);
    for (let y = 0; y <= 30; y++) {
      await page.waitForSelector('[class="ui-table-wrapper"]');
      // await page.reload();
      // await page.waitForLoadState("networkidle");
      await page.waitForSelector('[class="ui-table-wrapper"]');
      await page.waitForTimeout(10000);
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

      switch (workers[i].login) {
        case "fis_autotest_5":
          await page.waitForTimeout(10000);
          // Действие для случая 1
          break;
        case "fis_autotest_6":
          await page.waitForTimeout(20000);
          // Действие для случая 2
          break;
        case "fis_autotest_7":
          await page.waitForTimeout(30000);
          // Действие для случая 3
          break;
        case "fis_autotest_8":
          await page.waitForTimeout(40000);
          // Действие для случая 4
          break;
        case "fis_autotest_9":
          await page.waitForTimeout(50000);
          // Действие для случая 5
          break;
        case "fis_autotest_1":
          await page.waitForTimeout(15000);
          // Действие для случая 1
          break;
        case "fis_autotest_2":
          await page.waitForTimeout(25000);
          // Действие для случая 1
          break;
        case "fis_autotest_3":
          await page.waitForTimeout(35000);
          // Действие для случая 1
          break;
        case "fis_autotest_4":
          await page.waitForTimeout(35000);
          // Действие для случая 1
          break;
        case "fis_autotest_11":
          await page.waitForTimeout(20000);
          // Действие для случая 1
          break;
        case "fis_autotest_10":
          await page.waitForTimeout(20000);
          // Действие для случая 1
          break;
        case "fis_autotest_12":
          await page.waitForTimeout(20000);
          // Действие для случая 1
          break;
        case "fis_autotest_13":
          await page.waitForTimeout(20000);
          // Действие для случая 1
          break;
        case "fis_autotest_14":
          await page.waitForTimeout(20000);
          // Действие для случая 1
          break;
        case "fis_autotest_15":
          await page.waitForTimeout(20000);
          // Действие для случая 1
          break;
        default:
          console.log("Неизвестный случай");
        // Действие по умолчанию, если случай не соответствует ни одному из вышеупомянутых
      }

      await page
        .locator(
          '[data-control-name="further"] [class="ui-button-text ui-button-in-line"]'
        )
        .click();

      await page.waitForSelector(
        '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
      );

      await anketa({ page });

      await createCredit({ page });
      console.log(workers[i].name + " tests done of: " + y);
    }
  });
}

// test("test2", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "opleukhin_gs", "*gS1702+");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 2 done");
// });

// test("test3", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "schegoleva", "schegoleva");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 3 done");
// });

// test("test4", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "fc_user", "fc_user");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 4 done");
// });

// test("test5", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "gudkova_ai2", "gudkova_ai2");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 5 done");
// });

// test("test6", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "gudkova_ai", "gudkova_ai");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 6 done");
// });

// test("test7", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "schegoleva3", "schegoleva3");
//   console.log("LOGIIIIIIIIN");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });
//   console.log("full anketa");

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });
//   console.log("ANKETA");

//   await createCredit({ page });
//   console.log("test 7 done");
// });

// test("test8", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "shchegoleva", "shchegoleva");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 8 done");
// });

// test("test9", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "temnikova", "temnikova");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 9 done");
// });

// test("test10", async () => {
//   const browser = await chromium.launch();
//   // Создание новой страницы в браузере
//   const page = await browser.newPage();
//   await page.context().clearCookies();
//   await logIn({ page }, "ninel", "ninel");
//   await page.waitForLoadState("load");
//   await page.waitForSelector('[class="ui-table-wrapper"]');
//   await page.getByText("Создать заявку").click();
//   await page.waitForSelector(
//     '[data-control-name="menu"] [data-control-name="last_name"] [class="text_field tooltip-area"]'
//   );
//   await page.getByText("Фамилия", { exact: true }).nth(2).click();

//   await createApp({ page });

//   await page.waitForSelector(
//     '[data-control-name="One"] [data-control-name="credit_purpose"] [class="text_field select tooltip-area"]'
//   );

//   await fullAnketa({ page });

//   await page.waitForSelector(
//     '[data-control-name="employment_type_list"] [class="dropdown-trigger unselectable"]'
//   );

//   await anketa({ page });

//   await createCredit({ page });
//   console.log("test 10 done");
// });
