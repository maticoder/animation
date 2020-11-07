import React from "react";

import "./Header.css";

function Header({ text }) {
    return (
        <div className="todo-header">
            <h1>{text}</h1>
        </div>
    );
}

export default Header;
