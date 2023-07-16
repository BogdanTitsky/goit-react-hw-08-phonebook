import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <div className={css.filter}>
      <p>Find contact by name</p>
      <input
        type="text"
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </div>
  );
};
