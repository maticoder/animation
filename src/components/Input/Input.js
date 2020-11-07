import React from "react";
import TextField from "@material-ui/core/TextField";

import "./Input.css";

function Input({ value, label, onChange, onKeyPress }) {
    return (
        <div className="todo-input">
            <TextField
                value={value}
                id="standard-basic"
                placeholder={label}
                onChange={onChange}
                onKeyPress={onKeyPress}
                fullWidth
                autoComplete="off"
            />
        </div>
    );
}

export default Input;
