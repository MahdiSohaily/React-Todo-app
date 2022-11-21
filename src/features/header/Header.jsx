import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from '../../redux/todos/todoSlice';

export default function Header() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChanges = (e) => setText(e.target.value);
  const handleKeyDown = async (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      setLoading(true);
      await dispatch(saveNewTodo(trimmedText));
      setLoading(false);
      setText('');
    }
  };
  const placeholder = loading ? 'loading...' : 'What needs to be done?';
  const loader = loading ? <div className="loader" /> : null;

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder={placeholder}
        value={text}
        onChange={handleChanges}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      {loader}
    </header>
  );
}
