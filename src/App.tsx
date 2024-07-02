// built-ins
import { Outlet, RootRoute } from '@tanstack/router';

function App() {
  return (
      <Outlet />
  );
}

// Create a root route
export const rootRoute = new RootRoute({ component: App });

export default App;
