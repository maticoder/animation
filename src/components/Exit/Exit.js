import React from "react";
import { ReactComponent as ExitIcon } from "./exit.svg";

import "./Exit.css";

function Exit({ handleRemoveTodo }) {
    return (
        <div
            className="exit"
            onClick={() => {
                handleRemoveTodo();
            }}
        >
            <ExitIcon />
        </div>
    );
}

export default Exit;
