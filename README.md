# slamtidote-website

## setting up access to git!

- log into git from the terminal:

  ```bash
  git config --global user.name "saanvitel"
  git config --global user.email "telukotisaanvi@gmail.com"
  ```

- clone repository:
  ```bash
  git clone https://<your-git-username>@github.com/paperclipsystems/slamtidote-website.git
  ```

if you're in, that's success! if not - create an access token:

- press on profile picture
- go to settings
- go to developer settings
- press 'personal access tokens'
- press 'Tokens (classic)'
- press 'generate new token'
- press 'generate new token (classic)'
- name and tick the repo checkbox
- press generate token button at the end

to test if your access is set up:

- create your branch
- add your name to **paperclip members that have access to the repository!**
- go to your PR link
- merge your PR!

and you are set up!

---

## what to install after cloning the repository

### prerequisites

- [Node.js](https://nodejs.org) (v18 or later)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### how to install (every individual will have to do this on their own device)

1. **Clone the repo** (see above).
2. **Navigate to the project directory** (the folder that contains `package.json`).
   ```bash
   cd slamtidote-website
   ```
3. **Install dependencies** (this downloads React, Vite, etc.):
   ```bash
   npm install
   ```
4. **Start the development server**:

   ```bash
   npm run dev
   ```

   - This will start the Vite dev server.
   - After a few seconds, your terminal will show something like:

     ```
     VITE v6.x.x  ready in 400ms

     ➜  Local:   http://localhost:5173/
     ➜  Network: use --host to expose
     ```

   - Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

5. **Build the project for production** (generates optimized files in `dist/`):

   ```bash
   npm run build
   ```

6. **Preview the production build locally** (serves the files from `dist/`):
   ```bash
   npm run preview
   ```
   - Useful for testing what the deployed version will look like.

---

## available scripts

- `npm run dev` — start the development server (open in browser at [http://localhost:5173](http://localhost:5173))
- `npm run build` — type-check and build for production into the `dist/` folder
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint to check code quality

---

## project structure

```
slamtidote-website/
├── node_modules/          # Installed dependencies
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable React components
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project metadata & scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## tech stack

- [React](https://reactjs.org/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Typed JavaScript
- [Vite](https://vitejs.dev/) — Next-gen frontend tooling
- [ESLint](https://eslint.org/) — Linting and code style

---

## code hygiene!

- Please add an @author statement before any page you make or any method you write to make it easy to track
```
// @author HafsahYas
```
OR
```
// @author Hafsah
```

## paperclip members that have access to the repository!

- Saanvi
- Hafsah
- kya
- Fatima
- Lily
- Vinuk
- Anastasia
- Cherry
- Fatima A
