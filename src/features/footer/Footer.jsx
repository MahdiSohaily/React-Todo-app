import ColorFilters from './ColorFilters'
import StatusFilter from './StatusFilter'
import RemainingTodos from './RemainingTodos'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button">
                    Mark All Completed
          </button>
                <button className="button" >
                    Clear Completed
          </button>
            </div>

            <RemainingTodos count={1} />
            <StatusFilter value={'all'} />
            <ColorFilters value={[]} />
        </footer>
    )
}
