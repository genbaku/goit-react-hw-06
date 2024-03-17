import css from "./SearchBox.module.css"
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function SearchBox() {

    const dispatch = useDispatch();

    const searchWord = useSelector(state => state.filters.name);

    const handleSearch = event => {
        dispatch(changeFilter(event.target.value));
      };

    return (
        <>
            <div className={css.sb}>
                <label>Find contacts by name</label>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchWord}
                    onChange={handleSearch}
                />
            </div>
        </>
    );
}