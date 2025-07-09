import { useState } from "react"
import { addTodo } from "../features/Todo/TodoSlice"
import { useDispatch } from "react-redux"

export default function TodoForm() {

    const [inputText, setInputText] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputText))
        setInputText("")
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2 p-4 bg-slate-950 rounded-lg shadow-lg shadow-black"
        >
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter a todo..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
                Add
            </button>
        </form>
    )

}
