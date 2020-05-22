# 🏁 is-docker

Check if the process is running inside a Docker container in Deno.

[![Test CI](https://github.com/denorg/is-docker/workflows/Test%20CI/badge.svg)](https://github.com/is-docker/starter/actions)

```ts
import { isDocker } from "https://raw.githubusercontent.com/denorg/is-docker/master/mod.ts";

const result = isDocker();
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/is-docker/master/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-read -n is-docker https://raw.githubusercontent.com/denorg/is-docker/master/cli.ts
```

Then, the package is available to run:

```bash
is-docker
```

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## 📄 License

MIT © [Denorg](https://den.org.in)
