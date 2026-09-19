# Test strategy

## Scope

The application under test is Sauce Demo (UI-only storefront). This suite is a quality-engineering template, not a claim that Sauce Demo needs every layer.

| Layer | What we cover                                      | What we do not                          |
| ----- | -------------------------------------------------- | --------------------------------------- |
| UI    | Login matrix, catalog sort, cart, checkout, logout | Visual pixel diffs, performance budgets |
| API   | JSONPlaceholder GET/POST with zod                  | Treating JSONPlaceholder as Sauce Demo  |
| a11y  | axe-core WCAG 2 A/AA smoke on login + inventory    | Full audit, manual AT, legal compliance |

## Risk

| Area           | Risk                                                         | How it is tested                                                           |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Authentication | Wrong user reaches inventory; locked-out user is not blocked | Data-driven login; storageState used only after a real UI login in `setup` |
| Purchase path  | Cart/checkout drift                                          | Smoke checkout on Chromium; same path on Firefox in regression             |
| Catalog        | Sort control does not change DOM order                       | Independent sort of names/prices vs rendered order                         |
| Accessibility  | New serious issues land unnoticed                            | axe smoke with a documented allowlist                                      |
| Contracts      | Response shape silently changes                              | zod parse on API fixtures                                                  |

## Tagging

Playwright tags and Allure tags use the same names.

- `@smoke` — smallest set that would stop a release: standard + locked-out login, sort A–Z, add to cart, checkout, `GET /posts/1`, login a11y. **PR CI** runs only this, Chromium + API.
- `@regression` — full UI including sort, remove, logout, locked-out/problem users, remaining API, inventory a11y. **Main CI** runs Chromium + Firefox + API.
- `@api` — JSONPlaceholder contract tests (no Sauce Demo session).
- `@a11y` — filter locally when iterating on axe. Inventory + login run on **Chromium only**; Firefox skips them so the allowlist is not double-maintained across engines.

## Auth model

`tests/auth.setup.ts` logs in once and writes `.auth/user.json`. Product and checkout tests reuse that session and wait for the inventory list instead of pressing Escape or logging in per test.

Login specs **opt out** of storageState. They are the only tests allowed to type credentials, including `locked_out_user` and invalid users.

## Flake policy

- No hard waits (`waitForTimeout`).
- Retries: 2 on CI, 0 locally. A locally passing / CI-only fail is a flake until proven otherwise.
- Workers: 2 on CI so parallelism is real without overloading Sauce Demo.
- First-retry traces, failure screenshots, retain-on-failure video.
- Triage order: trace → video → headed single spec. See the README flake section.

If a test is quarantined, skip it with a comment pointing at an issue. Do not leave `test.only`.

## Accessibility exception policy

Sauce Demo is third-party. We do not fix their markup.

1. Run axe with `wcag2a` and `wcag2aa`.
2. Compare violation **rule ids** to `testdata/a11y.ts`.
3. Known ids stay on the allowlist and are listed here so they are not silent.
4. A **new** rule id fails CI. To add an exception, record the id, impact, and why we cannot fix it.

Current allowlist:

| Page             | Rule id                | Why it is allowed                                         |
| ---------------- | ---------------------- | --------------------------------------------------------- |
| Login, inventory | `color-contrast`       | Demo theme (error banner / header) is owned by Sauce Labs |
| Login            | `label`                | Username/password fields are not labeled to our standard  |
| Login, inventory | `page-has-heading-one` | Demo pages do not expose an `h1`                          |

## API vs UI

Use UI when the user can see or do the thing (login errors, sort order, checkout confirmation).

Use API (or API-setup + UI-assert, when the app allows it) for bulk data, authorization matrices, and schema stability. JSONPlaceholder in this repo exists to keep that muscle memory; it is not a stand-in for Sauce Demo business rules.
