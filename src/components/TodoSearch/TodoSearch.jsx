import { useContext } from 'react';
import { TodoContext } from '../Context/Context';

import './TodoSearch.css'

export const TodoSearch = () => {
    const {
        searchValue,
        onChangeSearch,
        totalTodos,
        completedTodos
    } =useContext(TodoContext)

    return (
        <>
            <h2 className="TodoSearch-title">Completed <span className="TodoSearch-number">{completedTodos}</span> of <span className="TodoSearch-number">{totalTodos}</span> Tasks</h2>
            <input value={searchValue} onChange={onChangeSearch} className="TodoSearch-input" type="text" placeholder="Search" />
        </>
    );
};