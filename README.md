# Custom Component Playground

A small React + TypeScript + Vite project demonstrating reusable UI components built with Tailwind CSS class utilities, Radix Slot support, and variant-driven styling using `class-variance-authority`.

## Project description

This repository contains a lightweight component library and demo app that showcases:

- a reusable `Paragraph` component with variant and size styling
- a customizable `Button` component with variant and size options
- support for `asChild` rendering via Radix `Slot`
- Tailwind-compatible class merging with `clsx` and `tailwind-merge`

The app is ideal for learning how to build typed component APIs in React and create consistent visual building blocks for UIs.

## Features

- `Paragraph` component
  - variants: `default`, `success`, `warning`, `error`
  - sizes: `default`, `sm`, `lg`, `xl`, `2xl`, `3xl`
  - supports `asChild` to render custom wrapper elements

- `Button` component
  - variants: `default`, `primary`, `secondary`, `outLine`, `denger`, `success`
  - sizes: `default`, `sm`, `md`, `lg`, `xl`
  - supports `asChild` via Radix Slot

- `UIBlock` helper component that selects the right component based on a `type` prop

## Getting started

### Requirements

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal to view the demo app.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

- `src/App.tsx` — demo page showing `Paragraph` and `Button` variations
- `src/components/ui/Paragraph.tsx` — paragraph component with variant-based styling
- `src/components/ui/Button.tsx` — button component with variant-based styling
- `src/components/ui/UIBlock.tsx` — helper wrapper for rendering UI blocks dynamically
- `src/lib/utils.ts` — utility helpers for class string merging

## Notes

- The project uses Vite for fast development and Hot Module Replacement (HMR).
- Styling is built around utility classes and dynamic variant configuration.
- The component props are strongly typed using TypeScript and `class-variance-authority`.

## License

This project is provided as-is for learning and experimentation.
