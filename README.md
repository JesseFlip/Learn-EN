# Inglés Fluido Familiar — Bilingual English Mastery Roadmap

A bilingual (Spanish/English) 30-day English learning app built for family use in
El Salvador & Honduras 🇸🇻🇭🇳. Every day covers real conversational vocabulary with
IPA + "Spanish-friendly" pronunciation guides, example sentences, a mini quiz, and
a one-tap WhatsApp share so a lesson can be sent straight to family.

## Features

- **30-day roadmap** of high-frequency verbs, collocations, and phrases natives
  actually use, each with a bilingual explanation of the "Spanish trap" it avoids.
- **Text-to-speech playback** (Web Speech API) with adjustable accent (US/UK) and
  speed (normal / slow).
- **Microphone pronunciation practice** (Web Speech Recognition) that listens to
  the learner and gives instant feedback.
- **Flashcards** with flip-to-translate and a "mastered" tracker.
- **Daily mini-quiz** to check comprehension before sharing with family.
- **Pronunciation guide** covering common Spanish-speaker pitfalls (silent letters,
  TH sounds, V vs B, etc.).
- **Dictionary/search** across all lessons.
- **WhatsApp message generator** that formats the day's lesson (vocab, tips, quiz)
  ready to paste or send directly via `wa.me`.

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev/build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons
- Browser-native Web Speech APIs (speech synthesis + recognition) — no backend
  or API keys required.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

### Available scripts

- `npm run dev` — start the Vite dev server with hot reload.
- `npm run build` — type-check and build a production bundle into `dist/`.
- `npm run preview` — locally preview the production build.
- `npm run lint` — run ESLint.

## Deployment (Netlify)

This project is configured for Netlify out of the box via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20
- A catch-all redirect (`/* -> /index.html`, 200) is included so the
  single-page app keeps working on refresh/deep links.

To deploy:

1. Push this repository to GitHub (already done if you're reading this on the repo).
2. In Netlify: **Add new site → Import an existing project**, pick this repo.
3. Netlify will auto-detect the settings from `netlify.toml` — no extra config
   needed. Click **Deploy**.

Alternatively, using the Netlify CLI:

```bash
npm run build
netlify deploy --prod --dir=dist
```

## Browser support notes

Voice playback and microphone practice rely on the Web Speech API, which has
the best support in Chrome/Edge. The app degrades gracefully (with a friendly
Spanish-language message) in browsers without speech recognition support.
