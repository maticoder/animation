import React, { useState, useEffect, useRef } from "react";

import lottie from "lottie-web";
import animationData from "./checkbox.json";

import "./Checkbox.css";

function Checkbox({ active, setActive }) {
    const [animation, setAnimation] = useState(null);
    const [direction, setDirection] = useState(-1);
    const checkbox = useRef(null);

    useEffect(() => {
        setAnimation(
            lottie.loadAnimation({
                container: checkbox.current,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: animationData,
            })
        );
    }, []);

    useEffect(() => {
        if (animation) {
            animation.setDirection(direction);
            animation.play();
        }
    }, [animation, direction]);

    return (
        <div
            ref={checkbox}
            className="checkbox"
            onClick={() => {
                setActive((a) => {
                    setDirection(active ? -1 : 1);
                    return !a;
                });
            }}
        ></div>
    );
}

export default Checkbox;
