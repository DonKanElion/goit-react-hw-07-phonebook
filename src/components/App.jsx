import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

export function App() {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  console.log('Items: ', items, 'isLoading: ', isLoading);

  useEffect(() => {
    console.log('useEffect - in progress...');
    dispatch(fetchContacts());
    console.log('useEffect - dispatch - Done!');
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'block',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#010101',
      }}
      className="section"
    >
      <h1 className="hero_title">Phonebook</h1>

      {/* <ContactForm contacts={contacts}></ContactForm> */}
      {/* <ContactForm contacts={items}></ContactForm> */}
      <ContactForm></ContactForm>

      {isLoading && <b>Loading contacts...</b>}
      {error && <b>Error: {error}</b>}

      {items.length !== 0 ? (
        <>
          <Filter></Filter>
          <ContactList></ContactList>
        </>
      ) : (
        <p>Looks like you don`t have any contacts. Please add new contact.</p>
      )}
    </div>
  );
}
