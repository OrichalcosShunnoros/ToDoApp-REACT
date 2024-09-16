// import { useContext } from 'react'
// import { TodoContext } from '../Context/Context'

// import './TodoItem.css'

// export const TodoItem = ({ text, completed }) => {
//     const {
//         onClickCheck,
//         onClickDelete
//     } = useContext(TodoContext)
//     const isCompleted = completed

//     return (
//         <article className={`TodoItem ${!!isCompleted && 'TodoItem--activate'}`}>
//             <span onClick={ onClickCheck } className="TodoItem-icon TodoItem-check">✔️</span>
//             <p className="TodoItem-text">{ text }</p>
//             <span onClick={ onClickDelete } className="TodoItem-icon TodoItem-remove">❌</span>
//         </article>
//     )
// }


import { useContext } from 'react'
import { TodoContext } from '../Context/Context'

import './TodoItem.css'

export const TodoItem = ({ text, description, completed }) => {
    const {
        onClickCheck,
        onClickDelete
    } = useContext(TodoContext)
    const isCompleted = completed

    return (
        <article className={`TodoItem ${!!isCompleted && 'TodoItem--activate'}`}>
            <span onClick={ onClickCheck } className="TodoItem-icon TodoItem-check">✔️</span>
            <h3 className="TodoItem-text">{ text }</h3>
            <p className="TodoItem-text">{ description }</p>
            <span onClick={ onClickDelete } className="TodoItem-icon TodoItem-remove">❌</span>
        </article>
    )
}
