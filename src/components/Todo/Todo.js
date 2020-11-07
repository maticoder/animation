import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "../Header/Header";
import Input from "../Input/Input";
import List from "../List/List";
import Item from "../Item/Item";

import "./Todo.css";

function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (todo) {
            setTodos((todos) => [
                ...todos,
                {
                    content: todo,
                    active: true,
                },
            ]);
            setTodo("");
        }
    };

    const handleRemoveTodo = (i) => {
        setTodos(
            todos.map((todo, index) =>
                i == index
                    ? (todo = {
                          ...todo,
                          active: false,
                      })
                    : todo
            )
        );
    };

    return (
        <div className="todo">
            <Header text="Tasks" />
            <List>
                {todos.map((todo, index) => (
                    <AnimatePresence>
                        {todo.active && (
                            <Item
                                key={index}
                                todo={todo.content}
                                handleRemoveTodo={() => handleRemoveTodo(index)}
                            />
                        )}
                    </AnimatePresence>
                ))}
            </List>
            <Input
                value={todo}
                label="Task"
                onChange={(e) => setTodo(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        handleAddTodo();
                    }
                }}
            />
        </div>
    );
}

export default Todo;
