import { useState, useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

const initContacts = [
  { id: 'id-1', name: 'Bradley Cooper', number: '443-89-12' },
  { id: 'id-2', name: 'Elijah Jordan', number: '443-89-12' },
  { id: 'id-3', name: 'Aaron Paul', number: '645-17-79' },
  { id: 'id-4', name: ' Viggo Peter', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || initContacts;
  });

  useEffect(() => {
    return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleClick = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

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

      <ContactForm contacts={contacts}></ContactForm>

      {contacts.length !== 0 ? (
        <>
          <Filter></Filter>
          <ContactList onClick={handleClick}></ContactList>
        </>
      ) : (
        <p>Looks like you don`t have any contacts. Please add new contact.</p>
      )}
    </div>
  );
}
