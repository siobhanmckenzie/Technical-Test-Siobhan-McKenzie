// built-ins
import { Route } from '@tanstack/router';

import * as Styles from '../shared/DesignSystem/DesignSystem.styles';


// enums
import Routes from '~constants/routes.enum';

// routes
import { rootRoute } from 'src/App';

function Home() {
  return (
      <Styles.Container>
        <p>Home route</p>
      </Styles.Container>
  );
}

// Index route
export const homeRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.HOME });

// Not Found route
export const notFoundRoute = new Route({ component: Home, getParentRoute: () => rootRoute, path: Routes.NOT_FOUND });

export default Home;
