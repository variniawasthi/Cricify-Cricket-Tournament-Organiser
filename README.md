# Tournament Organizer App

This is a **Tournament Organizer App** built with **React**, **Vite**, and **Tailwind CSS**. The app allows users to create tournaments, manage teams, schedule matches, and review tournament details with a clean and responsive UI.

## Features

- Create, organize, and manage cricket tournaments.
- Tournament data persistence with LocalStorage.
- Dynamic tabs for different tournament types.
- Match scheduling with venue management.
- Responsive design with Tailwind CSS.

---

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Technology Stack](#technology-stack)
- [License](#license)

--

### Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/variniawasthi/tournament-organizer-app.git
cd tournament-organizer-app
```

### Install Dependencies

If you are using NPM:

```bash
npm install
```

Or, if you prefer Yarn:

```bash
yarn install
```

## Running the Project

### Development Mode

To run the project in development mode, use the following command:

If you are using NPM:

```bash
npm run dev
```

Or for Yarn:

```bash
yarn dev
```

This will start the development server on [http://localhost:3000/](http://localhost:3000/). Any changes made in the project files will automatically refresh the page.

### Building for Production

To build the project for production, run:

If you are using NPM:

```bash
npm run build
```

Or for Yarn:

```bash
yarn build
```

The compiled project files will be generated inside the `dist` folder.

### Preview Production Build

After building the project, you can preview the production build using:

If you are using NPM:

```bash
npm run preview
```

Or for Yarn:

```bash
yarn preview
```

## Project Structure

```
Cricket-Organiser
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Breadcrumbs.jsx
│  │  │  ├─ Dropdown.jsx
│  │  │  └─ SearchBar.jsx
│  │  ├─ MatchCards.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ TournamentCards.jsx
│  │  └─ validation.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ common
│  │  │  ├─ newsFeed.jsx
│  │  │  ├─ NotFound404.jsx
│  │  │  ├─ Rankings.jsx
│  │  │  └─ validation.jsx
│  │  ├─ dashboard.jsx
│  │  ├─ scheduledTournaments
│  │  │  └─ [id].jsx
│  │  ├─ seriesCoverage.jsx
│  │  └─ tournament.jsx
│  ├─ redux
│  │  ├─ reducers
│  │  │  └─ tournamentSlice.jsx
│  │  └─ store.js
│  ├─ styles
│  │  ├─ global.scss
│  │  ├─ tailwind.scss
│  │  └─ _variables.scss
│  ├─ types
│  │  └─ react-date-range.d.ts
│  └─ utils
│     ├─ API
│     │  ├─ axiosInstance.jsx
│     │  └─ fetch.jsx
│     ├─ DummyData
│     │  ├─ cricketMatches.jsx
│     │  └─ seriesCoverage.json
│     └─ icons
│        └─ iconSVGs.jsx
├─ tailwind.config.js
└─ vite.config.js
└── ...
```

### Key Files

- `src/App.jsx`: Main application component and routing.
- `src/pages`: Contains different page components like Dashboard, Tournament, etc.
- `src/components`: Contains reusable components like forms, buttons, cards, etc.
- `tailwind.config.js`: Configuration file for customizing Tailwind CSS.
- `vite.config.js`: Vite configuration for build optimization and dev server setup.

## Deployment

### Deploying on Vercel

1. Create a Vercel account if you don't already have one.
2. Install the Vercel CLI:

   ```bash
   npm i -g vercel
   ```

3. Login to Vercel:

   ```bash
   vercel login
   ```

4. Deploy the project:

   Inside the project directory, run the following command to deploy:

   ```bash
   vercel
   ```

   Vercel will automatically detect the Vite configuration and build your project. Follow the prompts to set up your deployment. Once the deployment is complete, you will get a live URL to access your app.

### Deploying on Netlify

1. Create a Netlify account.
2. Install the Netlify CLI:

   ```bash
   npm install netlify-cli -g
   ```

3. Login to Netlify:

   ```bash
   netlify login
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Deploy to Netlify:

   ```bash
   netlify deploy
   ```

   Follow the prompts to deploy the project. If this is the production deploy, use:

   ```bash
   netlify deploy --prod
   ```

## Technology Stack

- **React**: Frontend framework for building user interfaces.
- **Vite**: Fast development environment and build tool.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React Router**: Client-side routing for navigation.

## License

This project is licensed under the MIT License.
