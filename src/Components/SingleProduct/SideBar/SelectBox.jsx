import { BoxFilterStyle, ListFilters } from "./SideBarStyles";
import { ArrowTop } from "./../../Icons/Icons";
import { useState } from "react";

const SelectBoxCo = ({ dataList, setSelectFilter, selectFilter, index }) => {
  const [select, setSelect] = useState(0);

  return (
    <BoxFilterStyle
      active={selectFilter === index}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelectFilter((c) => (c === index ? false : index))}
        className="title"
      >
        <span>{dataList[select]}</span>

        <ArrowTop />
      </button>
      {selectFilter === index && (
        <ListFilters>
          {dataList.map((e, i) => (
            <li key={i}>
              <input
                onChange={(e) => {
                  setSelect(e.target.checked ? i : false);
                }}
                checked={i === select}
                type="checkbox"
              />
              <div className="checkMark"></div>
              <span>{e}</span>
            </li>
          ))}
        </ListFilters>
      )}
    </BoxFilterStyle>
  );
};

export default SelectBoxCo;
