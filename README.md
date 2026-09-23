# Dev Insights - Mini Blog

Dev Insights is an internal mini blog for sharing quick web development tips. It was built for the Formative 1 React Mini Blog Project using React, TypeScript, and Vite.

## Features

- Displays three typed sample posts.
- Shows each post's title, author, content preview, and date.
- Displays a `New!` badge for posts published within the last 24 hours.
- Highlights posts written by `Amara` using conditional inline styling.
- Uses reusable `Header`, `PostList`, and `Post` components.
- Uses `React.memo` to optimize the reusable `Post` component.
- Uses unique post IDs as React list keys.
- Logs component mount and unmount events with the `withLogger` higher-order component.
- Includes responsive external CSS for smaller screens.

## Technologies and Packages

| Technology or package | Purpose |
| --- | --- |
| React 19 | User interface components |
| React DOM 19 | Renders React in the browser |
| TypeScript | Static typing for the application |
| Vite | Development server and production build tool |
| ESLint | Code quality and lint checking |
| `@vitejs/plugin-react` | React support in Vite |

No third-party UI or CSS-in-JS libraries are used. Styling uses regular CSS files and an inline style in `Post.tsx`.

## Prerequisites

- Node.js 18 or newer
- npm

## Installation

Clone the repository and install its dependencies:

```bash
git clone <your-repository-url>
cd mini-blog
npm install
```

## Running the Application

This project uses **Vite** as its development server and build tool.

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run lint` | Checks the project with ESLint. |
| `npm run build` | Runs TypeScript checks and creates a production build. |
| `npm run preview` | Serves the production build locally. |

There is no automated test framework configured for this formative project. The current verification checks are `npm run lint` and `npm run build`, followed by manual browser testing with `npm run dev`.

## Manual Verification

After starting the development server, verify that:

- The header displays the `Dev Insights` logo and `New Post` link.
- Three posts are displayed with their title, author, preview, and date.
- The post by `Amara` has a different background color.
- The post dated within the last 24 hours displays the `New!` badge.
- The browser console logs `Header mounted` and `Header unmounted` for the HOC lifecycle.

The `New Post` link is currently a static link because creating posts is outside the scope of this assessment.

## Project Structure

```text
mini-blog/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Logo and New Post link
│   │   ├── Post.tsx         # Memoized reusable post card
│   │   └── PostList.tsx     # Typed sample posts and list rendering
│   ├── hoc/
│   │   └── withLogger.tsx   # Mount and unmount logging HOC
│   ├── styles/
│   │   └── posts.css        # External layout and responsive styles
│   ├── types/
│   │   └── post.ts          # Shared Post interface
│   ├── App.tsx              # Root component
│   └── main.tsx             # Application entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component Design

All components are functional components. This choice is appropriate because the application is a small presentational interface and functional components work directly with modern React Hooks. A class component would require more boilerplate and class lifecycle methods for the same behavior.

| Component | Responsibility |
| --- | --- |
| `App` | Renders the logged `Header` and the `PostList`. |
| `Header` | Displays the Dev Insights heading and New Post link. |
| `PostList` | Stores the typed sample post array and renders one `Post` for each item. |
| `Post` | Displays one post's title, author, preview, date, and conditional New badge. |

## Styling Approach

The assessment requires at least two styling methods. This project uses:

1. **External CSS:** `src/styles/posts.css` controls the page layout, post cards, typography, colors, header, and responsive layout.
2. **Inline styling:** `Post.tsx` conditionally applies a yellow background when `post.author === 'Amara'`.

The `New!` badge is conditionally rendered when the post date is less than 24 hours old. The current time is captured with a lazy `useState` initializer so the component does not call the impure `Date.now()` function directly during render.

## Optimization and HOC

- **`React.memo`:** `Post` is exported with `memo(Post)`, allowing React to skip rendering the post card when its `post` prop has not changed.
- **Unique keys:** `PostList` uses `post.id` as the `key` for each rendered post, helping React identify list items reliably.
- **Higher-order component:** `withLogger` wraps `Header` in `App.tsx`. Its `useEffect` logs mount and unmount messages to the browser console.

## Development Decisions

- Vite was chosen for its fast development server and straightforward TypeScript setup.
- TypeScript's `Post` interface keeps every sample post consistent with the required `id`, `title`, `author`, `content`, and `date` fields.
- Posts are currently hardcoded in `PostList.tsx` because the assignment only requires sample data. A future version could load posts from an API or form.
- The HOC is applied in `App.tsx`, while `Header.tsx` exports the plain component. This keeps the component file compatible with React Fast Refresh and avoids wrapping the component twice.

## Challenges and Solutions

### Conditional date behavior

One challenge was showing the `New!` badge only for posts published within the last 24 hours. Calling `Date.now()` directly during rendering caused a React purity lint error. I solved this by capturing the current time with a lazy `useState` initializer and comparing it with the post date.

### Fast Refresh and the HOC

Another challenge was the Fast Refresh lint error caused by wrapping and exporting `Header` with the HOC inside `Header.tsx`. I solved this by exporting the plain `Header` component and applying `withLogger` once in `App.tsx`. This keeps the component compatible with Fast Refresh and avoids wrapping it twice.

### Meeting the styling and optimization requirements

The project needed two styling methods, conditional styling, an optimization technique, and a HOC. I met these requirements by using external CSS for the layout, inline styling for Amara's post, `React.memo` for `Post`, stable post IDs as list keys, and `withLogger` for lifecycle logging.

