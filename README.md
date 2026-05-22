# @digitalex1104/ui

Reusable React UI components.

## Install

```bash
npm install @digitalex1104/ui react react-dom
```

## Usage

```tsx
import { Button, Header, Heading } from '@digitalex1104/ui';
import '@digitalex1104/ui/style.css';
```

## Development

```bash
npm run dev
npm run storybook
```

## Build package

```bash
npm run build
```

This outputs publishable artifacts into `dist/`:

- `index.js`
- `index.cjs`
- `index.d.ts`
- `style.css`

## Create new version

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

## Publish to npm

```bash
npm login
npm publish --access public
```
