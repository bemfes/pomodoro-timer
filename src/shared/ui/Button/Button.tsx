import React, { FC } from "react"

interface ButtonProps {
    children: React.ReactNode;
    className: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
