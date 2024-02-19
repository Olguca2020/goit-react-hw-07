import { useId } from "react";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { checkFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const id = useId();
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;

    dispatch(checkFilter(value));
  };
  return (
    <>
      <label htmlFor={id}>Finde contacts by name</label>
      <input
        id={id}
        className={css.inputFeald}
        value={filter}
        type="text"
        onChange={handleChange}
      />
    </>
  );
};
