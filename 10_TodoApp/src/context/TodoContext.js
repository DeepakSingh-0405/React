import React, { useContext } from "react"
export const todoContext = React.createContext({
    todos: [
        {
            id: 1,
            todoMsg: "",
            checked: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    toggleTodo: (id)=>{},
    deleteTodo: (id)=>{}
})


export default function useTodo(){
    return useContext(todoContext)
}
export const TodoContextProvider = todoContext.Provider


