// import { Pencil, Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../features/Todo/TodoSlice';
import { useState } from 'react';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    const onToggle = () => {
        dispatch(toggleTodo({ id: todo.id }));
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTodo({ id: todo.id, text: editedText }));
        setIsEditing(false)
    }


    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow w-full mb-5"
            key={todo.id}>

            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    onChange={onToggle}
                    checked={todo.completed}
                    className="h-5 w-5 accent-blue-600"
                />

                {isEditing ? (
                    <form action="submit" onSubmit={(e) => handleEditSubmit(e)}>
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            className="border-b border-gray-400 focus:outline-none px-1 py-0.5"
                        />
                    </form>
                ) : (
                    <span
                        className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-2">
                <button
                    className="text-blue-500 hover:text-blue-700 text-3xl"
                    title="Edit"
                    onClick={isEditing ? handleEditSubmit : () => setIsEditing(!isEditing)}
                >
                    {isEditing ? "🗃️" : "✏️"}
                </button>
                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="text-red-500 hover:text-red-700 text-3xl"
                    title="Delete"
                >
                    ❌
                </button>
            </div>
        </div>

    )
}