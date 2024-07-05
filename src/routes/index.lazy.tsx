import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>9fin Technical Test - Siobhan McKenzie</h3>
    </div>
  );
}
