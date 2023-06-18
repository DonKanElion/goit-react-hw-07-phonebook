import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
// import { findContact } from 'redux/contactsSlice';
import classNames from 'classnames';

import s from '../ContactList/ContactList.module.css';

const Filter = ({ stateName }) => {
  const filterValue = useSelector(getFilterValue);
  console.log('Filter value: ', filterValue);
  // const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    // dispatch(findContact(value));
    console.log('Filtes: ', value);
  };

  return (
    <div className={classNames(s.box, s.contactList)}>
      <label className={s.text}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
