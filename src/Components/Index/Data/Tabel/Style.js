import styled from "styled-components";

export const TableDivData = styled.div`
   {
    width: 100%;
    height: 70%;
  }
`;
export const TableHeader = styled.header`
   {
    width: 100%;
    height: 40px;
    .btn-primary,
    .btn-two {
      width: 100px;
      height: 90%;
      border-radius: 10px 10px 0px 0px;
      transition: all 0.5s ease-in-out;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 0 -2px;

      margin-top: 5px;
      margin-right: -2px;
    }
    .btn-primary {
      background: #d16035;
      color: #fff;
    }
    .btn-primary:hover {
      background: #495169;
      color: #fff;
    }

    .btn-two {
      background: #495169;
      color: #fff;
    }
    .btn-two:hover {
      background: #d16035;
      color: #fff;
    }
  }
`;
/*ChartAnSideBar */
export const ChartAnSideBar = styled.div`
   {
    width: 100%;
    border-radius: 10px;
    height: calc(100% - 30px);
    background: #2e354c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #777;
    @media (max-width: 800px) {
      height: calc(100% - 100px);
    }
  }
`;
/*SideBar */
export const SideBarDiv = styled.div`
   {
    width: 80px;
    height: 100%;
    background: #434d6d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    border-radius: 0px 10px 10px 0;
    .div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      height: auto;
      color: #fff;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
    .div:hover {
      color: #d16035;
    }
    .spanIcon {
      width: auto;
      padding: 5px;
      height: auto;
      border-radius: 50%;
      background: #55628c;
      align-items: center;
      display: flex;
      text-align: center;
      box-shadow: 1px 1px 10px #0006;
    }
  }
`;
