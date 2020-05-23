import { isDocker } from "./mod.ts";

const cli = async () => {
  if (await isDocker()) {
  console.log('You are inside docker environment!');
  } else {
    console.log('You are not in docker environment!');
  }
}

cli();
