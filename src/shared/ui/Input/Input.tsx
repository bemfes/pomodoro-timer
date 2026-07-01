import { ChangeEvent, FC } from "react";
import "./Input.module.css";

export interface InputProps {
  className: string;
  id: string;
  htmlFor: string;
  labelText: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string | number;
  onBlur?: () => void;
}

const Input: FC<InputProps> = ({
  className,
  id,
  htmlFor,
  labelText,
  type,
  onChange,
  placeholder,
  value,
  onBlur,
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        type={type}
        value={value}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
