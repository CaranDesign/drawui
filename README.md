# ✏️ DrawUI

DrawUI is a React component library that brings a **hand-drawn, sketchy aesthetic** to your applications.  
Powered by **Rough.js**, it helps you build playful, organic, and distinctive user interfaces that stand out from traditional design systems.

📖 Live documentation & interactive demos  
https://drawui.caran.it

---

## Why DrawUI?

DrawUI is made for developers who want to add **personality and warmth** to their UI.

Perfect for:
- Creative projects
- Portfolios
- Educational tools
- Experimental or playful applications

---

## Features

- Hand-drawn sketchy appearance powered by Rough.js
- Reusable React components
- Token-based theming system
- Built with TypeScript
- Lightweight and performant
- Easy to integrate with existing React projects

---

## Installation

Install DrawUI using your preferred package manager:

```bash
npm install @carandesign/drawui
# or
yarn add @carandesign/drawui
# or
pnpm add @carandesign/drawui
```

### Peer Dependencies

DrawUI requires React and Rough.js:

```bash
npm install react react-dom roughjs
```

---

## Quick Start

Wrap your application with the DrawuiThemeProvider and start using components:

```tsx
import { DrawuiThemeProvider, DrawuiButton } from '@carandesign/drawui';

function App() {
  return (
    <DrawuiThemeProvider>
      <DrawuiButton>Click me!</DrawuiButton>
    </DrawuiThemeProvider>
  );
}
```

---

## Theming

DrawUI uses a **token-based theming system** to keep styles consistent across components.

Customizable tokens include:
- Stroke (color and width)
- Roughness and bowing
- Fill styles
- Border radius
- Component sizes

### Custom Theme Example

```tsx
import { DrawuiThemeProvider } from '@carandesign/drawui';
import type { DrawuiTheme } from '@carandesign/drawui';

const customTheme: Partial<DrawuiTheme> = {
  stroke: {
    thin: { color: '#2c3e50', width: 1.5 },
    medium: { color: '#2c3e50', width: 2.5 },
    thick: { color: '#2c3e50', width: 4 },
  },
  fill: {
    background: '#ecf0f1',
  },
  roughness: {
    roughness: 2,
    bowing: 1,
  },
};

function App() {
  return (
    <DrawuiThemeProvider theme={customTheme}>
      {/* Your app components */}
    </DrawuiThemeProvider>
  );
}
```

📘 Full theming guide and token reference  
https://drawui.caran.it

---

## Components

DrawUI includes a growing set of sketchy components:

- Button
- IconButton
- Card
- Divider
- Collapse / Accordion
- Icons (built-in icon set)

👉 View all components and live examples  
https://drawui.caran.it

---

## Built with Rough.js

DrawUI is built on top of **Rough.js**, a lightweight graphics library that renders SVGs with a hand-drawn look.

Special thanks to **Preet Shihn** for creating Rough.js.

---

## Contributing

Contributions, ideas, and feedback are welcome.

- Open an issue
- Submit a pull request
- Share your ideas

---

## Support the Project

If you find DrawUI useful or inspiring:

- ⭐ Star this repository on GitHub
- 🗣 Share it with other developers
- 🧪 Try it in your next creative project

Your support helps the project grow 🚀

---

## License

MIT License
