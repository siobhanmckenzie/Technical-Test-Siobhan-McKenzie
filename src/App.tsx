import { Outlet, RootRoute } from '@tanstack/router';

function App() {
  return <Outlet />;
}

export const rootRoute = new RootRoute({ component: App });

export default App;
