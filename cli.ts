import { isDocker } from "./mod.ts";

if (await isDocker()) {
    console.log('You are inside docker environment!');
} else {
    console.log('You are not in docker environment!');
}
