export const log = async ({ page }, login: string, password: string) => {
  await page.goto("http://fp-mig-dev.fisgroup.ru:8080/web/FormRunner/");
  await page.waitForLoadState("networkidle");
  //   await page.getByText("English (US)").hover();
  //   await page.getByText("Русский (Россия)").click();
  await page.getByPlaceholder("Логин").click();
  await page.getByPlaceholder("Логин").fill(login);
  await page.getByPlaceholder("Пароль", { exact: true }).click();
  await page.getByPlaceholder("Пароль", { exact: true }).fill(password);
  await page.getByRole("button", { name: "ВОЙТИ" }).click();
  await page.setDefaultTimeout(120000);
  //   await page.getByText("Loan Management System").click();
  //   await page.getByText("ЗАПУСТИТЬ").click();
};
