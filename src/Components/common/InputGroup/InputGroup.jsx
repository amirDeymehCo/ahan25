import { InputGroupStyle } from "./InputGroupStyles";

const InputGroup = ({
  bg,
  idInput,
  label,
  type = "text",
  transformY = "0px",
  styleCustom,
  defaultValue,
  onChange = () => {},
}) => {
  return (
    <InputGroupStyle
      styleCustom={styleCustom}
      bg={bg}
      transformY={transformY}
      className="input-group"
    >
      <label htmlFor={idInput}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        defaultValue={defaultValue}
        id={idInput}
      />
    </InputGroupStyle>
  );
};

export default InputGroup;
