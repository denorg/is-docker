# 🐳 Is Docker

Check if the process is running inside a Docker container in Deno.

[![Test CI](https://github.com/denorg/is-docker/workflows/Test%20CI/badge.svg)](https://github.com/is-docker/starter/actions)

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
