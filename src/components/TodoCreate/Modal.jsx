// import { useContext } from 'react'
// import { TodoContext } from '../Context/Context'

// import './Modal.css'

// export const Modal = () => {
//     const {
//         createValue,
//         onChangeCreate,
//         onClickButtonCreate
//     } = useContext(TodoContext)

//     return(
//         <section className="Modal">
//             <div className="Modal-box">
//                 <h2 className="Modal-title">Create a new task</h2>
//                 <input value={createValue} onChange={onChangeCreate} className="Modal-input" type="text" placeholder="Write a new todo..."/>
//                 <button onClick={onClickButtonCreate} className="Modal-button">Create</button>
//             </div>
//         </section>
//     )
// }

import { useContext } from 'react'
import { TodoContext } from '../Context/Context'

import './Modal.css'

export const Modal = () => {
    const {
        createValue,
        createDescription,
        onChangeCreate,
        onChangeDescription,
        onClickButtonCreate
    } = useContext(TodoContext)

    return (
        <section className="Modal">
            <div className="Modal-box">
                <h2 className="Modal-title">Create a new task</h2>
                <input value={createValue} onChange={onChangeCreate} className="Modal-input" type="text" placeholder="Write a new todo..." />
                <textarea value={createDescription} onChange={onChangeDescription} className="Modal-text" placeholder="Write a description..."></textarea>
                <button onClick={onClickButtonCreate} className="Modal-button">Create</button>
            </div>
        </section>
    )
}
