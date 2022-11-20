import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompleted, markAllCompleted } from '../../redux/todos/todoSlice';

export default function Actions() {
  const dispatch = useDispatch();
  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleDeleteCompleted = () => {
    dispatch(deleteCompleted());
  };

  return (
    <div className="actions">
      <h5>Actions</h5>
      <button type="button" className="button" onClick={handleMarkAllCompleted}>
        Mark All Completed
      </button>
      <button type="button" className="button" onClick={handleDeleteCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
