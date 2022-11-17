const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
}

const StatusFilter = ({ value: status }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const className = value === status ? 'selected' : ''

        return (
            <li key={value}>
                <button className={className}>
                    {key}
                </button>
            </li>
        )
    })

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

export default StatusFilter