import { Route } from '@tanstack/router';
import { rootRoute } from 'src/App';
import Routes from '~constants/routes.enum';
import * as Styles from '../shared/DesignSystem/DesignSystem.styles';

const Home = () => {
  return (
    <Styles.Container>
      <p>Home route</p>
    </Styles.Container>
  );
};

export const homeRoute = new Route({
  component: Home,
  getParentRoute: () => rootRoute,
  path: Routes.HOME,
});

export default Home;
