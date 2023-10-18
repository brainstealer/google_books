import React, { FC } from 'react'

interface IInputProps {
    value: string;
    getInputValue: (arg: string) => void;
    keyEnter: () => void;

}



const Input: FC<IInputProps> = ({ value, getInputValue, keyEnter }) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        getInputValue(e.target.value)
    }
    const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            keyEnter();
        }
    }

    return (
        <input value={value} onKeyUp={keyUpHandler} onChange={changeHandler} />
    )
}

export default Input;

