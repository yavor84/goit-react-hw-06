import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filters.filterName);
  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <h2 className={css.title}>Find contacts by name</h2>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filterName}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
