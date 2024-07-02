// built-ins
import { Router } from '@tanstack/router';

// routes
import { rootRoute } from 'src/App';
import { homeRoute, notFoundRoute } from '~pages/Home';
import { transcriptsRoute } from '~pages/Transcripts';

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, transcriptsRoute, notFoundRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

export default router;
