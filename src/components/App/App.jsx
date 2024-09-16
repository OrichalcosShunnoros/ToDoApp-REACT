import { useContext } from "react";
import { TodoContext } from "../Context/Context";
import { TodoButton } from "../TodoButton/TodoButton";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoCreate } from "../TodoCreate/TodoCreate";
import { Logo } from "../LogoRct/LogoRct"

import './App.css'

export const App = () => {
    const {
        todosFilter,
        isOpen
    } = useContext(TodoContext)

    return (
        <main className="App">
            {!!isOpen && <TodoCreate />}
            <section className="App-todoSearch App-container">
                <h1>To Do App </h1>
                <TodoSearch />
                <Logo /> 
            </section>
            <section className="App-todoList App-container">
                {todosFilter.map(todo => (
                    <TodoItem 
                    key={todo.task}
                    text={todo.task}
                    completed={todo.completed}
                    />
                ))}
            </section>
            <TodoButton />
        </main>
    );
};
