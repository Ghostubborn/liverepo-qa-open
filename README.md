# textkit

Tiny, dependency-free string helpers for Node 18+.

```js
import { slugify, truncate, wordCount, capitalize, parseDuration } from './src/textkit.js';
```

| Function | What it does |
|---|---|
| `slugify(text)` | `"Hello World"` → `"hello-world"` |
| `truncate(text, max)` | Cuts to `max` characters and adds `…` |
| `wordCount(text)` | Counts whitespace-separated words |
| `capitalize(text)` | Upper-cases the first character |
| `parseDuration(text)` | `"250ms"`, `"30s"`, `"5m"`, `"2h"` → milliseconds |

## Examples

```js
slugify('Hello World');        // 'hello-world'
truncate('Mirasim rocks', 7);  // 'Mirasim…'
wordCount('one two three');    // 3
parseDuration('30s');          // 30000
```

## Develop

```sh
npm test
```

No dependencies to install. Contributions welcome — see the open issues labelled **good first issue**.

> This repository is a test fixture for Mirasim's Live Repo QA. Issues and pull requests here are reset regularly.
