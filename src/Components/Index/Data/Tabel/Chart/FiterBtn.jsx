import { FilterBtnDiv } from "./ChartStyle";

const FilterBtn = () => {
  const item = [
    { id: 0, name: "سالانه" },
    { id: 1, name: "6ماهانه" },
    { id: 2, name: "3ماهانه" },
  ];
  return (
    <FilterBtnDiv>
      <div>
        {item.map((item, i) => {
          return (
            <>
              <button className="btn" key={i}>
                {item.name}
              </button>
            </>
          );
        })}
      </div>
    </FilterBtnDiv>
  );
};

export default FilterBtn;
