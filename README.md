# 🐳 Is Docker

Check if the process is running inside a Docker container in Deno.

[![Deno CI](https://github.com/denorg/is-docker/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/is-docker/actions)
[![GitHub](https://img.shields.io/github/license/denorg/is-docker)](https://github.com/denorg/is-docker/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/is-docker)](https://github.com/denorg/is-docker/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/is-docker)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## ⭐ Getting started

Import the `isDocker` function and use it:

```ts
import { isDocker } from "https://deno.land/x/is_docker/mod.ts";

const inDockerContainer = await isDocker(); // boolean
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx is_docker --allow-read
# You are not in a Docker environment
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-read https://deno.land/x/is_docker/cli.ts <arguments>
```

You can also install it globally using the following:

```bash
deno install --allow-read -n is_docker https://deno.land/x/is_docker/cli.ts
```

Then, the package is available to run:

```bash
is_docker
# You are in a Docker environment
```

### Configuration

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## ⭐ Related Work

- [sindresorhus/is-docker](https://github.com/sindresorhus/is-docker) is the Node.js project serving as inspiration for this one

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
