import { ChangeEvent, FC } from "react";

interface InputProps {
  className: string;
  id: string;
  htmlFor: string;
  labelText: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
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
      />
    </div>
  );
};

export default Input;
