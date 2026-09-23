# Dev Insights

Dev Insights is a small internal mini blog for sharing quick web development tips. It is built with React, TypeScript, and Vite for the Formative 1 React Mini Blog Project.

## Features

- Displays three typed development posts with a title, author, preview, and date.
- Shows a `New!` badge for posts published within the last 24 hours.
- Highlights posts written by Amara with conditional inline styling.
- Uses reusable `Header`, `PostList`, and `Post` components.
- Uses `React.memo` to avoid rendering a post card when its props have not changed.
- Uses unique post IDs as React list keys.
- Logs component mount and unmount events through the `withLogger` higher-order component.
- Includes responsive external CSS for smaller screens.

## Technologies and Packages

- React 19 and React DOM
- TypeScript
- Vite
- ESLint
- `@vitejs/plugin-react`

No additional UI or CSS libraries are used. The styling is written with regular CSS and an inline style in the `Post` component.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run build` | Runs TypeScript checks and creates a production build. |
| `npm run lint` | Checks the project with ESLint. |
| `npm run preview` | Serves the production build locally. |

There is currently no automated test suite in this formative project. The build and lint commands are the available validation checks.

## Project Structure

```text
src/
  components/
    Header.tsx       Site heading and New Post link
    Post.tsx         Reusable memoized post card
    PostList.tsx     Typed sample post data and post list
  hoc/
    withLogger.tsx   Higher-order component for lifecycle logging
  styles/
    posts.css        External post and responsive styles
  types/
    post.ts          Shared Post TypeScript interface
  App.tsx            Root component
  main.tsx           Application entry point
```

## Design Decisions

### Functional components

All components are functional components. This is appropriate for this application because the components mainly render data, and the `withLogger` HOC uses the `useEffect` Hook for mount and unmount behavior. Functional components also provide a concise modern React style without needing class lifecycle methods.

### Styling


The project uses two styling methods required by the assessment:

1. External CSS in `src/styles/posts.css` controls the layout, typography, colors, post cards, and responsive behavior.
2. An inline style in `Post.tsx` conditionally highlights posts by Amara.

The `New!` badge is another example of conditional rendering. It appears
when a post date is within the last 24 hours, calculated from the post's
date rather than hardcoded, so it stays accurate as posts age.

### Optimization and HOC

`Post` is wrapped with `React.memo`, so React can skip rendering it when
the `post` prop has not changed. This was applied because the coursework
covered it as a standard way to avoid unnecessary re-renders, even though
the effect isn't very visible in an app this small. `PostList` also
supplies the stable `post.id` value as the unique `key` for every
rendered post. The `withLogger` HOC wraps the `Header` component and
logs lifecycle messages to the browser console.

## Updating the Posts

The sample posts are stored in the `posts` array in `src/components/PostList.tsx`. When adding a post, include every property required by the `Post` interface in `src/types/post.ts`, especially a unique `id`.

## Reflection

The most valuable part of this project was learning how to break a React page into small reusable components and connect those components with TypeScript types. Defining the `Post` interface helped make the data structure clear, while the shared `Post` component avoided duplicating the markup for each article.

One challenge was combining conditional UI behavior with the styling requirements. I solved this by calculating whether a post is new from its date, rendering the badge only when appropriate, and using both an external stylesheet and an inline style for the author highlight. I would like to explore automated testing, form handling for the New Post link, and loading posts from an API in a future version.
