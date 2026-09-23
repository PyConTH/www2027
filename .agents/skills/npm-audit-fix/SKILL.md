---
name: npm-audit-fix
description: Use this skill ONLY when the user explicitly says "fix the npm audit", "fix package audit", "fix packages audit", or a clear variation that includes ALL of the words "fix" + "package(s/deps/dependencies)" + "audit". If there is even slight ambiguity — the user just says "audit", "fix vulnerabilities", "npm audit shows errors", "CVE", or anything that doesn't explicitly combine fix + package + audit — STOP and ask what they mean before proceeding.
---

# npm-audit-fix

Fixes high/critical vulnerabilities reported by `npm audit` through proper package upgrades. `npm audit fix` (no flags) is acceptable as a first pass — it only re-resolves inside existing semver ranges. Never use `npm audit fix --force`: it applies breaking versions blindly.

## Severity policy

- **high / critical** — must be resolved or explicitly waived by the user. The pre-push audit gate runs at `--audit-level=high` (`npm run audit`), so unwaived highs block every push.
- **medium** — fix if possible without breaking changes. Acceptable to leave unresolved if the fix requires a major bump or introduces regressions.
- **low** — ignored. Not worth the risk of breakage.

## Known exceptions

The `overrides` section of `package.json` **is** the record of deliberate pins — every entry there is a prior, user-reviewed audit decision. This section intentionally does not mirror it, and no override prose lives in README or `lefthook.yml` either (it drifted every run). Do not treat existing overrides as new findings. During Phase 3, check each pin against `npm view <pkg> version` and propose updates/removals to the user when upstream has moved.

## Rules

1. **Never use `npm audit fix --force`.** It installs breaking versions without judgment. Upgrades happen through the phases below or not at all.
2. **Never commit.** Leave all changes in the working tree for the user to review.
3. **Never skip verification.** After each fix round run `npm run test` (`astro check`); when the round touched the native/image chain (`sharp`, `ipx`, `@img/*`), also run `npm run build` — typecheck cannot catch native-module breakage.
4. **Never remove an override.** The `overrides` section of `package.json` is the canonical record; every entry is a deliberate decision from a prior run of this skill. If a pin looks stale, verify against upstream and propose removal to the user (Phase 3) — don't delete unilaterally.
5. **Never proceed if the baseline is broken.** Fix the project's existing issues first. You can't tell if an upgrade broke something if the project was already red.
6. **Overrides document themselves.** A new override is exactly one change: the entry in `package.json` `overrides`. No write-ups in README, `lefthook.yml`, or this file — they drift every run. State the reason (and any removal condition) in the run's final report instead; that's where the why lives.
7. **Ask before forcing past a peer conflict.** `npm install` failing with ERESOLVE is a decision point: report the conflict and ask. Don't reach for `--legacy-peer-deps` unasked.
8. **Config lives in `package.json`.** Dependency overrides go in `package.json` `"overrides"` — nowhere else. This repo pins nothing in `.npmrc`.
9. **If `npm install` fails building `sharp` from source** (fresh checkouts): `npm install --ignore-scripts` is safe here — the prebuilt binaries need no install script (verified: full build passes from an `--ignore-scripts` tree). See the README troubleshooting note.

## Phase 0: Trigger check

Before doing anything, verify the user's request explicitly mentions all three elements: "fix" + "package(s)" + "audit". If the request is even slightly ambiguous — stop and ask for clarification. Don't guess.

The frontmatter description encodes when this skill activates. This phase enforces the same check at runtime — it's the gate that decides whether to proceed or ask.

## Phase 1: Project scope

Check `package.json` for a `"workspaces"` key. This repo is a single package today; if workspaces ever appear, ask the user which workspace to audit unless they already specified scope.

## Phase 2: Baseline

Establish that the project is green before any changes — otherwise an upgrade breaking the build is indistinguishable from a pre-existing failure. Run both:

```bash
npm run test    # astro check
npm run build   # the real proof for a static site: exercises sharp/image processing
```

If either fails: **stop**. Tell the user the project has pre-existing issues and ask them to resolve those first.

## Phase 3: Overrides cleanup

Start from a clean slate. Old overrides are often stale workarounds for issues fixed upstream since — keeping them masks the real state of the dependency graph.

1. Read the `overrides` key in `package.json`.
2. Every entry is deliberate — **keep them all**. Nothing here is "undocumented": the section itself is the record.
3. Compare each pinned version against `npm view <pkg> version` — if upstream has moved past the pin and the advisory that motivated it is closed, propose updating or removing the pin (confirm with the user).

Then apply and re-resolve:

```bash
npm install --ignore-scripts
```

**If `npm install` fails with ERESOLVE:** ask the user how to proceed (rule 7). Don't self-resolve with flags.

## Phase 4: Audit

```bash
npm audit --audit-level=high
```

Check the exit code:

- **0** — no high/critical vulns. Done. Report any medium/low counts visible in the output as informational.
- **non-zero** — parse the output. Group vulnerabilities by package. Proceed to Phase 5.

## Phase 5: Fix loop

Work through vulnerabilities by severity: high+critical first (mandatory), then medium (best effort). Ignore low.

### Group siblings together

Packages sharing a scope are almost always from the same team and must move together — e.g. `@astrojs/*`, `@netlify/*`, `@img/*`. Scan `package.json`: if the vulnerable package is `@foo/bar` and the project has other `@foo/*` deps, upgrade the whole family in one step to avoid version skew.

### Determine direct vs transitive

```bash
npm ls <vulnerable-pkg>
```

- Output shows parent packages between the root and the vulnerable copy → **transitive**.
- Output shows only the project root → **direct dependency**.

### Fix strategy

Follow this order. Each step is more invasive than the last.

**Step 1 — Update within semver range**:

```bash
npm update <pkg>
```

For a direct dependency whose _range_ itself blocks the fix, bump the range: `npm install <pkg>@^<new-minor>`.

For a **transitive** dependency, `npm update` often can't reach it — update the parent package that pulls it in (same command, parent's name). If no in-range parent version fixes it, go to Step 2.

**Step 2 — Override** (last resort, only if Step 1 didn't resolve):

Add to `package.json`:

```json
"overrides": {
	"<pkg>": "<safe-version>"
}
```

Then run `npm install --ignore-scripts` (rule 6: the entry itself is the documentation).

### Verify after each group

```bash
npm run test
npm run build   # mandatory when the round touched sharp/ipx/@img/*
```

If either fails: **revert that upgrade** (undo the `package.json` + `package-lock.json` changes). Mark the package as unfixable without breaking changes. Continue to the next group.

### Re-audit after each group

```bash
npm audit --audit-level=high
```

Exit 0 → proceed to the final report. Non-zero → continue with the next vulnerable package group.

### Iteration cap

If 3 fix groups in a row produce no reduction in the high/critical count (all reverted, or nothing left to try), **stop and report**. The remaining vulns likely need manual intervention — upstream patches that don't exist yet, or major bumps that require human judgment (e.g. the extract-zip chain's adapter downgrade).

## Phase 6: Final report

When done (all high/critical resolved, or no more fixable vulns):

1. Run `npm audit --audit-level=high` one final time.
2. Summarize:
   - Overrides removed during cleanup
   - Packages upgraded (and which families moved together)
   - Overrides added (with the reason — this report is where the why lives)
   - Vulns resolved
   - Remaining vulns (severity, count, why they couldn't be fixed)
   - Verification status (`npm run test` / `npm run build` both green)
