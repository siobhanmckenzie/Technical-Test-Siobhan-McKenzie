// built-ins
import { Route } from '@tanstack/router';

import * as Styles from "../shared/DesignSystem/DesignSystem.styles";

// enums
import Routes from '~constants/routes.enum';

// features
// import WelcomeCard from '~features/WelcomeCard';

// routes
import { rootRoute } from 'src/App';

function Transcripts() {
  return (
    <Styles.Container>
      <p>Transcripts Base Route</p>
    </Styles.Container>
  );
}

// Transcripts route
export const transcriptsRoute = new Route({ component: Transcripts, getParentRoute: () => rootRoute, path: Routes.TRANSCRIPTS });

export default Transcripts;
