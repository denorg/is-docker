import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isDocker } from "./mod.ts";

Deno.test("check if online", async (): Promise<void> => {
  assertEquals(await isDocker(), false);
});
