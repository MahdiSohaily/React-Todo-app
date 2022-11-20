import ColorFilters from './ColorFilters';
import StatusFilter from './StatusFilter';
import RemainingTodos from './RemainingTodos';
import Actions from './Actions';

export default function Footer() {
  return (
    <footer className="footer">
      <Actions />
      <RemainingTodos count={1} />
      <StatusFilter value="all" />
      <ColorFilters value={[]} />
    </footer>
  );
}
