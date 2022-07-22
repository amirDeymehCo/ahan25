import { InputDiv, SearchBarDiv } from "./SerachBarStyle";

const SearchBar = () => {
  return (
    <SearchBarDiv>
      <input
        className="input"
        type="text"
        placeholder="عبارت مورد نظر خود را سرچ کنید . ."
      />
    </SearchBarDiv>
  );
};

export default SearchBar;
