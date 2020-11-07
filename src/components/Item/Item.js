import React, { useState } from "react";
import { motion } from "framer-motion";
import Checkbox from "../Checkbox/Checkbox";
import Exit from "../Exit/Exit";

import "./Item.css";

function Item({ todo, handleRemoveTodo }) {
    const [active, setActive] = useState(false);

    return (
        <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            className="todo-item"
        >
            <Checkbox active={active} setActive={setActive} />
            <p className={active ? "active" : ""}>
                <span className="line"></span>
                <span className="text">{todo}</span>
            </p>
            <Exit handleRemoveTodo={handleRemoveTodo} />
        </motion.div>
    );
}

export default Item;
