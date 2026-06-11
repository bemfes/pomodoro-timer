import React, { FC } from "react"

interface ButtonProps {
    children: React.ReactNode;
    className: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = () => {
    return (
        <button>
            
        </button>
    )
}

export default Button
