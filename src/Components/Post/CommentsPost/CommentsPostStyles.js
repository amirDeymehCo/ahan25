import styled from "styled-components";

export const SectionComments = styled.section`
  margin-top: 100px;
`;

export const ListComments = styled.ul`
  padding: 10px 20px;

  grid-area: co;
  background-color: #37416240;
  border: 1px solid #5d6f94;
  border-radius: 15px;
  padding-bottom: 25px;

  li {
    border-bottom: 1px solid #5d6f94;
    display: flex;
    align-items: center;
    position: relative;
    padding: 35px 10px;
    .date {
      position: absolute;
      top: 35px;
      left: 0px;
      color: #ffffff;
      font-size: 12px;
      display: flex;
      svg {
        margin-left: 5px;
      }
    }
    img {
      border-radius: 50%;
      transform: translateY(-00%);
    }
  }
  li:nth-child(3) {
    border-bottom: none !important;
  }
  @media (max-width: 480px) {
    padding: 10px 5px;
    li {
      padding: 35px 0px;
    }
  }
`;
export const BodyComment = styled.div`
  margin-right: 10px;
  h4 {
    color: #f7f7f7;
    font-size: 15px;
    margin-bottom: 10px;
  }
  p {
    color: #f7f7f7;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const AddComment = styled.form`
  grid-area: ac;
  border: 1px solid #5d6f94;
  padding: 40px 30px;
  border-radius: 15px;
  div {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    background-color: #495169;
    border-radius: 10px;
    border: 1px solid #bdbfc166;
    color: #f7f7f7;
    padding: 17px 15px;
    display: block;
    margin-bottom: 30px;
    min-width: 300px;
    &::placeholder {
      color: #cbcbcb;
    }
    &:focus {
      outline: none;
      background-color: #2d3a53;
    }
  }
  textarea {
    min-height: 195px;
    max-height: 195px;
    max-width: 100%;
    min-width: 100%;
  }

  .btn-submit {
    width: 100%;
    text-align: start;
  }

  button {
    transition: all 0.4s ease;
    background-color: #dd8260;
    color: #f7f7f7;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    width: 93px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const NotComment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: #ffffff;
    font-size: 20px;
  }
`;
