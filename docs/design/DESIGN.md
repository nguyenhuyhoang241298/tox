---
name: TOX Design System
version: 1.0
style: calm-clean
reading-mode: editorial
colors:
  light: { background: "#FAFAF7", card: "#FFFFFF", foreground: "#0F172A", muted: "#F1F5F9", muted-foreground: "#475569", border: "#E2E8F0", input: "#94A3B8", primary: "#2563EB", primary-foreground: "#FFFFFF", primary-soft: "#EFF6FF", success: "#15803D", success-soft: "#DCFCE7", danger: "#B91C1C", danger-soft: "#FEE2E2", warning: "#B45309", warning-soft: "#FEF3C7", info: "#0369A1" }
  dark: { background: "#121212", card: "#1E1E1E", foreground: "#E5E7EB", muted: "#242424", muted-foreground: "#A1A1AA", border: "#2E2E2E", input: "#71717A", primary: "#60A5FA", primary-foreground: "#0B1220", primary-soft: "#172554", success: "#4ADE80", danger: "#F87171", warning: "#FBBF24" }
  paper: { light: { background: "#FBF8F1", foreground: "#1F2328", muted: "#57534E", border: "#E7E1D3", accent: "#0E5A6B" }, dark: { background: "#161616", foreground: "#DADADA", accent: "#7CC4D4" } }
typography: { sans: "Be Vietnam Pro", serif: "Literata", body: "16px/1.6", passage: "19px/1.7" }
radius: { sm: 6, md: 10, lg: 16 }
spacing: [4, 8, 12, 16, 24, 32, 48, 64]
---

# TOX Design System

> Source of truth for all UI in `web/`. Tokens are implemented in
> [`web/src/app/styles/index.css`](../../web/src/app/styles/index.css); shared components live in
> [`web/src/shared/ui`](../../web/src/shared/ui). When a token changes, update **both** that file
> and this document in the same commit. Vietnamese overview: [README.md](./README.md).

## Why

TOX helps Vietnamese learners practise the TOEIC L&R test. They read English as a *foreign*
language under time pressure, so **readability beats decoration**. The default style is
**Calm Clean** (flat, lots of whitespace, one blue accent). Long passages, explanations and
transcripts use the **Editorial reading mode** (paper background, Literata serif). Playful elements
(celebration, streaks) are allowed only on result/streak screens, never during an exam.

## Foundation rules (non-negotiable)

1. Use ONLY semantic tokens (`bg-background`, `text-foreground`, `bg-primary`,
   `text-muted-foreground`, `border-border`, `bg-success`, `bg-danger`, `bg-warning`, …). NEVER
   hardcode hex/rgb/oklch or Tailwind palette colors (`bg-blue-600`, `#2563EB`) in components.
   CI enforces this with `pnpm check:tokens`.
2. Fonts MUST include the `vietnamese` subset. Never use Atkinson Hyperlegible (no Vietnamese
   glyphs). Test string: "Đường ơi, ữ ượ ặ ỷ — TOEIC Part 7".
3. Text contrast ≥ 4.5:1 (target 7:1 for reading passages); UI borders and focus rings ≥ 3:1.
4. Base font size 16px; body 16–18px; passages 18–20px. Never below 14px (13px `caption` only for
   non-essential text). Use rem.
5. Unitless line-height: body 1.5–1.6, passages 1.7, headings 1.2–1.3.
6. Reading width: max 65ch (passages 62ch). Never full-width paragraphs on desktop.
7. Touch targets ≥ 44×44px for answer options, audio controls, nav items; ≥ 8px gap between targets.
8. Never convey state by color alone: correct = check icon + "Đáp án đúng"; wrong = x icon +
   "Bạn chọn"; selected = thicker primary border + filled letter badge.
9. Layout must survive WCAG 1.4.12 text-spacing overrides: no fixed heights on text containers.
10. Visible focus everywhere: global `:focus-visible` ring (2px `ring`, 2px offset). Full keyboard
    support in exams: 1–4 or A–D pick an option, Enter = confirm/next, Space = play/pause audio.
11. Respect `prefers-reduced-motion` (global override in `index.css`) and `prefers-color-scheme`;
    animations ≤ 200ms, no autoplay loops.
12. Text left-aligned, never justified; no ALL CAPS sentences; no italics for long passages.
13. PWA: `viewport-fit=cover`, pad fixed bars with `env(safe-area-inset-*)`; bottom tab bar on
    mobile (< 768px), sidebar on desktop; `theme-color` = `--background`.
14. Screen readers: question results announced via `aria-live="polite"`; the timer has an
    `aria-label` and announces only at 5 min / 1 min left.

## Color tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `background` | `#FAFAF7` | `#121212` | Page background (warm off-white, not pure white) |
| `card` / `popover` | `#FFFFFF` | `#1E1E1E` / `#242424` | Surfaces |
| `foreground` | `#0F172A` | `#E5E7EB` | Primary text |
| `muted` | `#F1F5F9` | `#242424` | Hover / subtle fills, progress track |
| `muted-foreground` | `#475569` | `#A1A1AA` | Secondary text — the lightest allowed text gray |
| `border` | `#E2E8F0` | `#2E2E2E` | Decorative dividers, card borders |
| `input` | `#94A3B8` | `#71717A` | Form controls and answer options (≥ 3:1) |
| `ring` | `#2563EB` | `#60A5FA` | Focus ring |
| `primary` / `primary-foreground` | `#2563EB` / `#FFFFFF` | `#60A5FA` / `#0B1220` | Main action, links, current item |
| `primary-soft` | `#EFF6FF` | `#172554` | Selected answer background |
| `success` / `success-soft` | `#15803D` / `#DCFCE7` | `#4ADE80` / `#052E16` | Correct answer |
| `danger` / `danger-soft` | `#B91C1C` / `#FEE2E2` | `#F87171` / `#450A0A` | Wrong answer, destructive action |
| `warning` / `warning-soft` | `#B45309` / `#FEF3C7` | `#FBBF24` / `#451A03` | Timer < 5 min, flagged |
| `info` | `#0369A1` | `#7DD3FC` | Informational text |
| `paper`, `paper-foreground`, `paper-muted`, `paper-border`, `paper-accent` | `#FBF8F1`, `#1F2328`, `#57534E`, `#E7E1D3`, `#0E5A6B` | `#161616`, `#DADADA`, `#A8A29E`, `#2E2E2E`, `#7CC4D4` | Reading mode |
| `highlight` | `#FDE68A` @ 60% | `#FDE68A` @ 25% | Vocabulary highlight (underline style) |

Each status color also has a `*-foreground` for text on a filled status background.

**Dark mode** follows the OS. Force a theme by putting `.light` or `.dark` on `<html>`; the `dark:`
variant follows the same rule. Components should rarely need `dark:` because tokens switch
automatically.

## Typography

- UI and body: **Be Vietnam Pro** (400/500/600/700), fallback Inter, system-ui. Class `font-sans`
  (default on `body`).
- Reading passages: **Literata** (variable). Class `font-serif`. Never for buttons or small labels.
- Both are self-hosted via Fontsource with the `vietnamese` subset.
- Numbers that change (timer, score, counters): `tabular-nums`.

| Class | Size / line-height / weight | Use |
|---|---|---|
| `text-display` | 32 / 1.2 / 700 | Hero, score |
| `text-h1` | 28 / 1.25 / 700 | Page title |
| `text-h2` | 22 / 1.3 / 600 | Section, card title |
| `text-h3` | 18 / 1.4 / 600 | Sub-section |
| `text-body-lg` | 18 / 1.6 / 400 | Question stems, answer options |
| `text-body` | 16 / 1.6 / 400 | Default body |
| `text-passage` | 19 / 1.7 / 400 (20px from `md`) | Reading passages, with `font-serif` |
| `text-label` | 14 / 1.4 / 500 | Labels, chips, meta lines |
| `text-caption` | 13 / 1.4 / 400 | Non-essential captions only |

Do not use Tailwind's raw `text-sm`, `text-xl`, … in new code; use the scale above.

## Spacing, radius, shadow

- Spacing: 4px base — 4, 8, 12, 16, 24, 32, 48, 64 (Tailwind `1, 2, 3, 4, 6, 8, 12, 16`).
  Card padding 16 mobile / 24 desktop. Page gutter 16px.
- Radius: `rounded-sm` 6px · `rounded-md` 10px (buttons, inputs, options) · `rounded-lg` 16px
  (cards, passages) · `rounded-full` (chips, progress, letter badges).
- Shadow: `shadow-card` (`0 1px 2px` 6%) and `shadow-popover` (`0 8px 24px` 10%). No other shadows.

## Components (implemented in `web/src/shared/ui`)

| Component | Spec |
|---|---|
| `Button` | Variants `primary` (default), `secondary` (border + card bg), `ghost`, `destructive`, `link`. Sizes `default` (h-11 = 44px, px-5), `lg` (h-12), `icon` (44×44). 16px/600, radius md. Hover darkens 8%, active scales .98, disabled = 40% opacity + not-allowed cursor. |
| `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) | radius lg, 1px border, `shadow-card`, padding 16/24, gap 16. Title = `text-h2`. |
| `Input` | h-11, radius md, 1px `input` border, card background, 16px text, `aria-invalid` → danger border. |
| `Badge` | radius full, `text-label`; variants `neutral`, `primary`, `success`, `danger`, `warning`. Pair status colors with an icon or word. |
| `ProgressBar` | h-2, radius full, `muted` track, `primary` fill, always shows "12/50" text; `role="progressbar"`. |
| `AnswerOption` | Full-width row, min-h 56px, 1.5px `input` border, radius md, gap 12, 32px letter circle. States: `default` → hover `muted` → `selected` (2px primary + primary-soft) → `correct` (success + check icon + "Đáp án đúng") → `wrong` (danger + x icon + "Bạn chọn"); `disabled` after submit. Use inside `role="radiogroup"`. |
| `ReadingPassage` | Reading mode: `paper` background, radius lg, padding 24, Literata `text-passage`, max 62ch, paragraph spacing 0.9em, optional meta line ("Part 7 · Questions 147–149 · Email"). |

### Planned (build once, reuse everywhere — follow the same tokens)

AppShell, BottomTabBar (Học, Luyện thi, Từ vựng, Tiến độ, Tôi; h-16 + safe area, icon 24 + label
12/500, active = primary), PageHeader, QuestionCard ("Câu 12/100" chip, stem `text-body-lg`,
options gap-3), AudioPlayer (sticky bottom card, 48px round primary play button, −5s/+5s, speed
0.75/1/1.25, scrubber with 24px thumb; in exam mode hide scrubber and speed), ExamTimer (top-right
pill, tabular nums, warning < 5:00, danger < 1:00 + icon), QuestionNavigator (40px squares:
answered = primary-soft, flagged = flag icon, current = ring-2), ScoreSummary, ExplanationPanel
(Literata body, evidence quote with 3px primary left border), Flashcard (radius lg, word 28/700,
IPA muted, flip 180ms / fade when reduced motion), StreakBadge, EmptyState, Skeleton, Toast.
Reading split view: desktop passage 60% / questions 40% with independent scroll; mobile tabs
"Đoạn văn | Câu hỏi".

Check `web/src/shared/ui` before creating a component; extend instead of duplicating.

## Do / Don't

**Do:** generous whitespace; one primary action per screen; icons from `lucide-react` only, stroke
1.75; Vietnamese microcopy with full diacritics.

**Don't:** gradients, glassmorphism, more than one accent hue, emoji as icons, center-aligned
paragraphs, gray text lighter than `muted-foreground`, confetti or animation during an exam,
justified text, serif in buttons.

## Workflow

1. Before building a screen, open the kitchen-sink page **`/dev/ui`** (dev server only) and check
   the components you need in light and dark mode.
2. Prompt for AI tools generating UI:
   > Follow docs/design/DESIGN.md (Calm Clean; reading mode = Editorial) strictly. Reuse components
   > from web/src/shared/ui. Do NOT invent colors, font sizes, radii or shadows — only the semantic
   > tokens mapped in web/src/app/styles/index.css. Include loading, empty, error states; light +
   > dark; mobile 375px and desktop 1280px. Self-check: contrast, 44px targets, keyboard, aria-live,
   > no color-only states, max 65ch for text.
3. `pnpm check:tokens` (also in CI) fails on hardcoded colors in `src/**/*.{ts,tsx}`.
