import styled from "styled-components";

export const SectionBank = styled.section`
  margin-top: 150px;
`;

export const Container = styled.div`
  border: 1px solid #989898;
  padding: 20px;
  border-radius: 20px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 782px) {
    justify-content: center;
  }
`;

export const Upload = styled.div`
  width: 35%;
  @media (max-width: 782px) {
    width: 94%;
  }
  @media (max-width: 747px) {
    width: 100%;
  }
  border: 2px ${(props) => (props.upload ? "solid" : "dashed")} #ffdd47;
  height: 400px;
  border-radius: 10px;
  background-color: #374162;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 20px;
  position: relative;
  overflow: hidden;
  h5 {
    color: #f7f7f7;
    font-size: 18px;
    margin-bottom: 24px;
  }
  p {
    color: #cbcbcb;
    font-size: 14px;
  }
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

export const FormBank = styled.form`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 782px) {
    width: 100%;
  }
  @media (max-width: 747px) {
    .input-group {
      padding: 0px;
      &:nth-child(2) {
        padding-right: 20px;
      }
    }
  }
  @media (max-width: 495px) {
    .input-group:nth-child(2) {
      padding-right: 0px;
    }
  }
`;
