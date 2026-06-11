import { FC } from "react";

interface InputProps {
  className: string;
  id: string;
  htmlFor: string;
  labelText: string;
  type: string;
}

const Input: FC<InputProps> = () => {
  return (
    <div className="">
      <label htmlFor=""></label>
      <input id="" type="" />
    </div>
  );
};

export default Input;
