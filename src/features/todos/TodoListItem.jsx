import { ReactComponent as TimesSolid } from './times-solid.svg'


export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ todo }) => {

    const { text, completed, color } = todo
    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))

    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"

                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={color}
                        style={{ color }}

                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
