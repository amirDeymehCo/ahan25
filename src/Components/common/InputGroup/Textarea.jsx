import { InputGroupStyle } from "./InputGroupStyles";

const TextareaGroup = ({ idInput, styleCustom, label, transformY = "0px" }) => {
  return (
    <InputGroupStyle
      styleCustom={styleCustom}
      transformY={transformY}
      className="input-group"
    >
      <label htmlFor={idInput}>{label}</label>
      <textarea></textarea>
    </InputGroupStyle>
  );
};

export default TextareaGroup;
