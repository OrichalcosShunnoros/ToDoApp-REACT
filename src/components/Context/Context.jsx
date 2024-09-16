// import React from 'react'
// import { useState } from 'react'

// export const TodoContext = React.createContext()

// export const TodoProvider = (props) => {
//     const data = [
//         {
//             task: "Go to study.",
//             completed: false,
//         },
//         {
//             task: "Read about it.",
//             completed: true,
//         },
//         {
//             task: "Cook the diner.",
//             completed: false,
//         },
//         {
//             task: "Write code.",
//             completed: false,
//         },
//     ]
//     const [todos, setTodos] = useState(data)
//     const [totalTodos, setTotalTodos] = useState(todos.length)
//     const [completedTodos, setCompletedTodos] = useState(todos.filter(todo => todo.completed).length)
//     const [searchValue, setSearchValue] = useState('')
//     const [createValue, setCreateValue] = useState('')
//     const [isOpen, setIsOpen] = useState(false)

//     let todosFilter = []

//     const onChangeSearch = (event) => {
//         setSearchValue(event.target.value)
//     }

//     const onChangeCreate = (event) => {
//         setCreateValue(event.target.value)
//     }

//     const onClickButton = () => {
//         !!isOpen ? setIsOpen(false) : setIsOpen(true)
//         setCreateValue('')
//     }
    
//     const onClickButtonCreate = () => {
//         const newTodos = todos;
        
//         newTodos.push({
//             task: createValue,
            
//             completed: false
//         })
//         setTodos(newTodos)
//         setTotalTodos(todos.length)
//         setCompletedTodos(todos.filter(todo => !!todo.completed).length)
//         setIsOpen(false)
//     }

//     const onClickCheck = (event) => {
//         const todoText = event.target.parentNode.querySelector('.TodoItem-text').textContent
//         todos.forEach(todo => {
//             if(todoText === todo.task) {
//                 (!!todo.completed) ? todo.completed = false : todo.completed = true;
//             }
//         })
//         setTodos(todos)
//         setCompletedTodos(todos.filter(todo => !!todo.completed).length)
//     }

//     const onClickDelete = (event) => {
//         const todoText = event.target.parentNode.querySelector('.TodoItem-text').textContent
//         todos.forEach(todo => {
//             if(todoText === todo.task) {
//                 const newTodos = todos
//                 newTodos.splice(todos.indexOf(todo), 1)

//                 setTodos(newTodos)
//                 setTotalTodos(todos.length)
//                 setCompletedTodos(todos.filter(todo => !!todo.completed).length)
//             }
//         })
//     }

//     (searchValue === '') ? todosFilter = todos : todosFilter = todos.filter(todo => todo.task.match(searchValue));

//     return (
//         <TodoContext.Provider value={{
//             todos,
//             totalTodos,
//             completedTodos,
//             searchValue,
//             todosFilter,
//             isOpen,
//             createValue,
//             onChangeCreate,
//             onChangeSearch,
//             onClickCheck,
//             onClickDelete,
//             onClickButton,
//             onClickButtonCreate
//         }}>
//             {props.children}
//         </TodoContext.Provider>
//     )
// }

import React from 'react'
import { useState } from 'react'

export const TodoContext = React.createContext()

export const TodoProvider = (props) => {
    const data = [
        {
            task: "Go to study.",
            description: "Review mathematics and physics.",
            completed: false,
        },
        {
            task: "Read about it.",
            description: "Read a new article about React hooks.",
            completed: true,
        },
        {
            task: "Cook the dinner.",
            description: "Prepare pasta and salad.",
            completed: false,
        },
        {
            task: "Write code.",
            description: "Work on the new feature for the app.",
            completed: false,
        },
    ]
    const [todos, setTodos] = useState(data)
    const [totalTodos, setTotalTodos] = useState(todos.length)
    const [completedTodos, setCompletedTodos] = useState(todos.filter(todo => todo.completed).length)
    const [searchValue, setSearchValue] = useState('')
    const [createValue, setCreateValue] = useState('')
    const [createDescription, setCreateDescription] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    let todosFilter = []

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    const onChangeCreate = (event) => {
        setCreateValue(event.target.value)
    }

    const onChangeDescription = (event) => {
        setCreateDescription(event.target.value)
    }

    const onClickButton = () => {
        !!isOpen ? setIsOpen(false) : setIsOpen(true)
        setCreateValue('')
        setCreateDescription('')
    }
    
    const onClickButtonCreate = () => {
        const newTodos = [...todos]
        
        newTodos.push({
            task: createValue,
            description: createDescription,
            completed: false
        })
        setTodos(newTodos)
        setTotalTodos(newTodos.length)
        setCompletedTodos(newTodos.filter(todo => todo.completed).length)
        setIsOpen(false)
    }

    const onClickCheck = (event) => {
        const todoText = event.target.parentNode.querySelector('.TodoItem-text').textContent
        const updatedTodos = todos.map(todo => {
            if (todo.task === todoText) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        setTodos(updatedTodos)
        setCompletedTodos(updatedTodos.filter(todo => todo.completed).length)
    }

    const onClickDelete = (event) => {
        const todoText = event.target.parentNode.querySelector('.TodoItem-text').textContent
        const newTodos = todos.filter(todo => todo.task !== todoText)

        setTodos(newTodos)
        setTotalTodos(newTodos.length)
        setCompletedTodos(newTodos.filter(todo => todo.completed).length)
    }

    (searchValue === '') ? todosFilter = todos : todosFilter = todos.filter(todo => todo.task.match(searchValue));

    return (
        <TodoContext.Provider value={{
            todos,
            totalTodos,
            completedTodos,
            searchValue,
            todosFilter,
            isOpen,
            createValue,
            createDescription,
            onChangeCreate,
            onChangeDescription,
            onChangeSearch,
            onClickCheck,
            onClickDelete,
            onClickButton,
            onClickButtonCreate
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
