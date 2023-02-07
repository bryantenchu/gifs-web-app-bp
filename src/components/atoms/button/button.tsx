import React, {FC} from 'react';
import "./button.scss"

interface ButtonProps {
    color?: 'dark' | 'light'
    children: React.ReactNode
    onClick?: () => void
}

const Button:FC<ButtonProps> = ({color,children,onClick}) => {
    return (
        <button>{children}</button>
    );
};

export default Button;
