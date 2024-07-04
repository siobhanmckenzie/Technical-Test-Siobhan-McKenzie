import { ThemeProvider } from 'styled-components';

import { Link, RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

const router = createRouter({
  defaultNotFoundComponent: () => {
    return (
      <main aria-labelledby="not-found-heading">
        <div>
          <h1 id="not-found-heading">Page Not Found</h1>
          <p>Oops... Sorry, this page doesn't exist.</p>
          <nav aria-label="Not found navigation">
            <ul>
              <li>
                <Link to="/">Click here to go home</Link>
              </li>
              <li>
                <a href="mailto:team@9fin.com">Click here to email 9fin support</a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    );
  },
  routeTree,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}
