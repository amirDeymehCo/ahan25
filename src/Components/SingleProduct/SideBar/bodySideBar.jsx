/* eslint-disable react-hooks/exhaustive-deps */
import { BodySideBar } from "./SideBarStyles";
import SelectBoxCo from "./SelectBox";
import { useEffect, useState } from "react";

const BodySideBarCo = ({ product }) => {
  const [select, setSelect] = useState(false);
  const data = [{}, {}, {}, {}, {}, {}];
  const dataList = [
    "فولاد مبارکه 1",
    "فولاد مبارکه 2",
    "فولاد مبارکه 3",
    "فولاد مبارکه 4",
  ];

  useEffect(() => {
    if (select || select === 0) {
      document.body.addEventListener("click", () => setSelect(false));
    }
  }, [select]);

  const [thickness, setThickness] = useState([]);
  const [Dimensions, setDimensions] = useState([]);
  const [physicalState, setPhysicalState] = useState([]);
  const [map, setMap] = useState([]);
  const [unit, setUnit] = useState([]);

  useEffect(async () => {
    let copyThickness = [];
    let copyDimensions = [];
    let copyPhysicalState = [];
    let copyMap = [];
    let copyUnit = [];
    await product.properties.fa.map((prop) => {
      if (prop.propertyName === "ضخامت") {
        copyThickness.push(prop.propertyValue);
      } else if (prop.propertyName === "ابعاد") {
        copyDimensions.push(prop.propertyValue);
      } else if (prop.propertyName === "حالت فیزیکی ") {
        copyPhysicalState.push(prop.propertyValue);
      } else if (prop.propertyName === "محل تحویل") {
        copyMap.push(prop.propertyValue);
      } else if (prop.propertyName === "واحد ") {
        copyUnit.push(prop.propertyValue);
      }
    });
    setThickness(copyThickness);
    setDimensions(copyDimensions);
    setPhysicalState(copyPhysicalState);
    setMap(copyMap);
    setUnit(copyUnit);
  }, [product]);

  return (
    <BodySideBar>
      {thickness.length && (
        <div className="box-select">
          <label>ضخامت :</label>
          <SelectBoxCo
            index={1}
            setSelectFilter={() => {
              setSelect((c) => (c === 1 ? false : 1));
            }}
            selectFilter={select}
            dataList={thickness}
          />
        </div>
      )}
      {Dimensions.length && (
        <div className="box-select" >
          <label>ابعاد :</label>
          <SelectBoxCo
            index={2}
            setSelectFilter={() => {
              setSelect((c) => (c === 2 ? false : 2));
            }}
            selectFilter={select}
            dataList={Dimensions}
          />
        </div>
      )}
      {physicalState.length && (
        <div className="box-select" >
          <label>حالت فیزیکی :</label>
          <SelectBoxCo
            index={3}
            setSelectFilter={() => {
              setSelect((c) => (c === 3 ? false : 3));
            }}
            selectFilter={select}
            dataList={physicalState}
          />
        </div>
      )}
      {map.length && (
        <div className="box-select" >
          <label>محل تحویل :</label>
          <SelectBoxCo
            index={4}
            setSelectFilter={() => {
              setSelect((c) => (c === 4 ? false : 4));
            }}
            selectFilter={select}
            dataList={map}
          />
        </div>
      )}
      {unit.length && (
        <div className="box-select">
          <label>واحد :</label>
          <SelectBoxCo
            index={5}
            setSelectFilter={() => {
              setSelect((c) => (c === 5 ? false : 5));
            }}
            selectFilter={select}
            dataList={unit}
          />
        </div>
      )}
    </BodySideBar>
  );
};

export default BodySideBarCo;
