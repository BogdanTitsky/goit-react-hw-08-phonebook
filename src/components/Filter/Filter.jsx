import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </>
  );
};
