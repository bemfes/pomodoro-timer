import { FC } from "react";

interface InputProps {
  className: string;
  id: string;
  htmlFor: string;
  labelText: string;
  type: string;
}

const Input: FC<InputProps> = ({ className, id, htmlFor, labelText, type }) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input id={id} type={type} />
    </div>
  );
};

export default Input;
