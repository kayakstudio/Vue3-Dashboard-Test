# Kayak Studio :: SL FE DESIGN TECH TEST

Check Online Demo =>  **<https://vue3.kayak-studio.com/>**

## Tech Stacks

- Vue 3
- Pinia store (fully typed Vuex store is available up to template version 1.13)
- Routing using [vue-router 4](https://router.vuejs.org/)
- TypeScript 5
  - Fully typed components configured in templates as well
- Automatic package and component imports w/ [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- Tailwind CSS 3 w/ following plugins and configuration preinstalled:
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
  - [@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons)
- PostCSS 8 w/ `postcss-nesting` plugin and `cssnano` for minimizing production CSS
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Using newest `script setup` syntax (see the official [Script Setup documentation](https://vuejs.org/api/sfc-script-setup.html))
- Vitest unit + component tests
- GitHub workflows
  - Renovatebot for keeping up with dependencies
  - Automated unit + component tests
  - Automated e2e tests
  - Coverage reporting in PR comments ([example](https://github.com/Uninen/vite-ts-tailwind-starter/pull/225#issuecomment-1507477206))
- GitLab CI config available up to versions 2.x

## Project setup and usage

Using Volar extension for VSCode is recommended to take full advance of the new script setup sugar and full TypeScript support in Vue SFC templates. (This is totally optional but recommended as it results much better DX!) See official IDE Support documentation for more details.

- **Install dependencies**
`pnpm i`
- **Run development server**
`pnpm dev`
- **Run unit + component tests (Vitest)**
`pnpm test`
- **Run e2e tests (Playwright)**
`pnpm test-e2e`
- **Build for production**
`pnpm build`
- **Other**
- See package.json for all available commands.
