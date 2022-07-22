import { FlagIcon } from "../../../Icons/Icons";
import { DivDate } from "./DateStyle";

const ShowDate = () => {
  const dateFunction = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const showDate = `${year}/${month}/${day},${hour} ${minute}`;
    return showDate;
  };
  setInterval(() => {
    dateFunction();
  }, 1000);
  setTimeout(() => {
    dateFunction();
  }, 1000);

  return (
    <DivDate>
      <span className="date">{dateFunction()}</span>
      <span className="language">
        En
        <FlagIcon />
      </span>
    </DivDate>
  );
};

export default ShowDate;
