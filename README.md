# 🐳 isdocker

Check if the process is running inside a Docker container in Deno.

[![Test CI](https://github.com/denorg/isdocker/workflows/Test%20CI/badge.svg)](https://github.com/isdocker/starter/actions)

```ts
import { isDocker } from "https://raw.githubusercontent.com/denorg/isdocker/master/mod.ts";

const result = isDocker();
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/isdocker/master/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-read -n is-docker https://raw.githubusercontent.com/denorg/isdocker/master/cli.ts
```

Then, the package is available to run:

```bash
isdocker
```

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
