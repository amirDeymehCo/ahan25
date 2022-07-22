import styled from "styled-components";

export const InputGroupStyle = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
  padding: 0px 20px;
  margin: 20px 0px;
  transform: translateY(${(props) => props.transformY});

  label {
    display: block;
    color: #ffffff;
    font-size: 15px;
    margin-bottom: 15px;
  }
  input,
  textarea {
    background-color: ${(props) => (props.bg ? props.bg : "#495169")};
    height: 45px;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: #ffffff;
    padding: 0px 10px;
    font-size: 12px;
  }
  textarea {
    max-height: 100px;
    min-height: 100px;
    max-width: 100%;
    padding: 10px 10px;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  ${(props) => props.styleCustom}
`;
