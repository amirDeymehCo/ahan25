import { Loading } from "./SpinnerStyles";

const Spinner = ({ text }) => {
  return (
    <Loading>
      <h1>{text}</h1>
    </Loading>
  );
};

export default Spinner;
