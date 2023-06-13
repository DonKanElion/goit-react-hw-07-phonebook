import { useSelector, useDispatch } from 'react-redux';
import { findContact } from 'redux/contactsSlice';
import classNames from 'classnames';

import s from '../ContactList/ContactList.module.css';

const Filter = ({ stateName }) => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(findContact(value));
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
