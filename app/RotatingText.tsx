"use client";

import { useState, useEffect } from "react";

type RotatingTextProps = {
    text: string[];
    interval?: number;
};

export default function RotatingText({ text, interval = 2000 }: RotatingTextProps) {
    const [currentText, setCurrentText] = useState(0);
    
    useEffect(() => {
        const id = setInterval(() =>  {
            setCurrentText((prev) => (prev + 1) % text.length);
        }, interval);
        return () => clearInterval(id);
    }, [text, interval]);

    return (
        <span className = "inline-block transition-opacity duration-500 ease-in-out">
            {text[currentText]}
        </span>
    );
}