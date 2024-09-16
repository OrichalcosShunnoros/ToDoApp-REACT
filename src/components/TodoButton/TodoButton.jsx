import { useContext } from 'react'
import { TodoContext } from '../Context/Context'

import './TodoButton.css'

export const TodoButton = () => {
    const { onClickButton, isOpen } = useContext(TodoContext)

    return (
        <button 
            onClick={onClickButton} 
            className="TodoButton"
        >
            { isOpen ? '❌' : '➕' }
        </button>
    )
}
