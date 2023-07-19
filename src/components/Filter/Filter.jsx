import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <div className="pb-3">
      <p className="mb-2">Find contact by name</p>
      <input
        type="text"
        onChange={onFilterChange}
        placeholder="Search by name"
        className="form-control"
      />
    </div>
  );
};
