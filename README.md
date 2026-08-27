# OGJS + Vite + TypeScript

This maintained starter renders a 36-entity payment investigation. The graph data describes meaning; OGJS owns semantic presentation, layout, camera framing, interaction, resizing, and rendering lifecycle.

```bash
npm install
npm run dev
```

Start in `src/main.ts`. Replace `investigation` with your own `{ nodes, edges }` data while keeping stable node ids, semantic `data.role` values, and your domain grouping key. `og.present()` supplies readable styling and `og.group()` arranges and frames the communities without application canvas math.

Run `npm run build` before shipping. It type-checks the application and produces the Vite production bundle.

Continue with the [Getting Started tutorial](https://ogjs.mizansec.com/learn) or compare the live project on the [OGJS Boiler plate page](https://ogjs.mizansec.com/boilerplates).
