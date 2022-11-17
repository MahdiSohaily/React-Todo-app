export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']

const ColorFilters = ({ value: colors }) => {
    const renderedColors = availableColors.map((color) => {
        const checked = colors.includes(color)

        return (
            <label key={color}>
                <input
                    type="checkbox"
                    name={color}
                    defaultChecked={checked}
                />
                <span
                    className="color-block"
                    style={{
                        backgroundColor: color,
                    }}
                ></span>
                {color}
            </label>
        )
    })

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )
}

export default ColorFilters
