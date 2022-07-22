import { useEffect, useState } from "react";
import {
  SectionFilter,
  BtnNoFilter,
  BoxFiltering,
  LiList,
} from "./FilteringStyles";
import { BoxFilterStyle, ListFilters, SelectBox } from "./FilteringStyles";
import { BottomMS, CloseBold } from "../../../Icons";
const Filtering = ({
  setLanFilter,
  lanFilter,
  setJensFilter,
  setColorFilter,
}) => {
  const [selectColor, setSelectColor] = useState(false);
  const [selectJens, setSelectJens] = useState(false);
  const [selectLang, setSelectLang] = useState(false);
  const [selectFilter, setSelectFilter] = useState(false);

  const dataListLang = ["فارسی", "انگلیسی"];
  const dataListJens = [
    {
      name: "آهن",
      jens: "ahan",
    },
    {
      name: "مس",
      jens: "mes",
    },
    {
      name: "ورق",
      jens: "varaq",
    },
    {
      name: "میلگرد",
      jens: "milgerd",
    },
  ];
  const dataListColor = [
    {
      name: "قرمز",
      color: "red",
    },
    {
      name: "زرد",
      color: "yellow",
    },
    {
      name: "آبی",
      color: "blue",
    },
  ];

  useEffect(() => {
    if (selectFilter !== false) {
      document.body.addEventListener("click", () => {
        setSelectFilter(false);
      });
    }
  }, [selectFilter]);

  const handelRemoveFilter = () => {
    setSelectColor(false);
    setSelectJens(false);
    setSelectLang(false);
    setJensFilter("");
    setColorFilter("");
    setLanFilter("fa");
  };

  return (
    <SectionFilter>
      <BoxFiltering>
        <BtnNoFilter onClick={handelRemoveFilter}>بدون فیلتر</BtnNoFilter>

        {/****** language select filters *** */}
        <BoxFilterStyle active={true} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectFilter((c) => (c === 1 ? false : 1))}
            className="title"
          >
            {selectLang || selectLang === 0 ? (
              <SelectBox>
                {lanFilter === "fa" ? "فارسی" : "انگلیسی"}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectColor(false);
                    setColorFilter("");
                  }}
                >
                  <CloseBold />
                </button>
              </SelectBox>
            ) : (
              <span>زبان</span>
            )}
            <BottomMS />
          </button>
          {selectFilter === 1 && (
            <ListFilters>
              {dataListLang.map((e, i) => (
                <LiList key={i}>
                  <input
                    onChange={(event) => {
                      setLanFilter((c) => (c === "fa" ? "en" : "fa"));
                      setSelectLang(event.target.checked ? i : "");
                    }}
                    checked={i === selectLang}
                    type="checkbox"
                  />
                  <div className="checkMark"></div>
                  <span>{e}</span>
                </LiList>
              ))}
            </ListFilters>
          )}
        </BoxFilterStyle>

        {/****** color select filters *** */}
        <BoxFilterStyle active={true} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectFilter((c) => (c === 3 ? false : 3))}
            className="title"
          >
            {selectColor || selectColor === 0 ? (
              <SelectBox>
                {dataListColor[selectColor].name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectColor(false);
                    setColorFilter("");
                  }}
                >
                  <CloseBold />
                </button>
              </SelectBox>
            ) : (
              <span>رنگ</span>
            )}
            <BottomMS />
          </button>
          {selectFilter === 3 && (
            <ListFilters>
              {dataListColor.map((e, i) => (
                <LiList color={e.color} key={i}>
                  <input
                    onChange={(event) => {
                      setSelectColor(event.target.checked ? i : "");
                      setColorFilter(event.target.checked ? e.color : "");
                    }}
                    checked={i === selectColor}
                    type="checkbox"
                  />
                  <div className="checkMark"></div>
                  <span>{"  "}</span>
                </LiList>
              ))}
            </ListFilters>
          )}
        </BoxFilterStyle>

        {/**** jens select filters *** */}

        <BoxFilterStyle active={true} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setSelectFilter((c) => (c === 2 ? false : 2))}
            className="title"
          >
            {selectJens || selectJens === 0 ? (
              <SelectBox>
                {dataListJens[selectJens].name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectJens(false);
                    setJensFilter("");
                  }}
                >
                  <CloseBold />
                </button>
              </SelectBox>
            ) : (
              <span>جنس</span>
            )}
            <BottomMS />
          </button>
          {selectFilter === 2 && (
            <ListFilters>
              {dataListJens.map((e, i) => (
                <LiList key={i}>
                  <input
                    onChange={(event) => {
                      setSelectJens(event.target.checked ? i : "");
                      setJensFilter(event.target.checked ? e.jens : "");
                    }}
                    checked={i === selectJens}
                    type="checkbox"
                  />
                  <div className="checkMark"></div>
                  <span>{e.name}</span>
                </LiList>
              ))}
            </ListFilters>
          )}
        </BoxFilterStyle>
      </BoxFiltering>
    </SectionFilter>
  );
};

export default Filtering;
