import { test, expect, chromium, Page } from "@playwright/test";
import { logIn } from "../commands/logIn";
import { createApp } from "../commands/createAplication";
import { fullAnketa } from "../commands/fullAnketa";
import { addRF } from "../commands/addRF";
import { addForegign } from "../commands/addForign";
import { addAddres } from "../commands/addAdress";
import { addAddresForegn } from "../commands/addAdressForegn";
import { anketa } from "../commands/anketa";
import { createCredit } from "../commands/createCredit";
import { scenario2 } from "../scenario2.spec";

export const artilleryScripts = async (page: Page) => {
  await scenario2({ page });
};
