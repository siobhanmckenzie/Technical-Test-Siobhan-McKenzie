import { RootRoute, Route, Router } from '@tanstack/router';
import App from 'src/App';
import specificUrls from 'src/urls';
import Routes from '~constants/routes.enum';
import Home from '~pages/Home';
import NotFound from '~pages/NotFound';
import { Transcripts } from '~pages/Transcripts/index';

export const rootRoute = new RootRoute({ component: App });

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: Routes.HOME,
  component: Home,
});

const transcriptsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/transcripts/$id',
  component: Transcripts,
  loader: async ({ params }) => {
    if (!specificUrls.includes(params.id)) {
      throw new Error('404'); // need to wire this up with the actual 404 component not fallback error boundary
    }
  },
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: Routes.NOT_FOUND,
  component: NotFound,
});

const routeTree = rootRoute.addChildren([homeRoute, transcriptsRoute, notFoundRoute]);

const router = new Router({ routeTree });

export default router;
