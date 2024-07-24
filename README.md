# Artist Finder

Artist Finder is a React + Vite app that uses the Deezer API to search and display artist information. Users can search for their favorite artists and view detailed information including top tracks, albums, and related artists.

## How to Get the App Running

To get the app running on your local machine, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/artist-finder.git
    cd artist-finder
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Start the Development Server:**

    ```bash
    npm run dev
    ```

4. **Build for Production:**

    ```bash
    npm run build
    ```

5. **Preview the Production Build:**

    ```bash
    npm run preview
    ```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

    ```js
    export default {
      // other rules...
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

