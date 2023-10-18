import { FC } from "react";

interface Options {
    name: string;
    value: string
}

interface SelectProps {
    options: Options[];
    defaultValue?: string;
    value?: string;
    getValue: (arg: string) => void;

}

const Select: FC<SelectProps> = ({ options, value, getValue }) => {

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        getValue(e.target.value)
    }

    return (
        <select
            value={value}
            onChange={changeHandler}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>

            )}
        </select>
    )

}

export default Select;