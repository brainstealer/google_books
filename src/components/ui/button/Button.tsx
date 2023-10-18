import React, { FC } from 'react'
import { PropsWithChildren } from 'react';


interface IButtonProps {
    clickMe?: () => void;
    className?: string;
    children: React.ReactNode;
}
const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, clickMe }) => {
    return (
        <button onClick={clickMe}>{children}</button>
    );
};

export default Button;