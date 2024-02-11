import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsSlice.operations';
import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from 'components/filter/filter';
import { ContactList } from 'components/contactList/contactList';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: 'rgb(176, 159, 150)',
        height: '100vh',
        padding: '2rem',
      }}
    >
      <ContactForm />
      <h2
        style={{
          textAlign: 'center',
          marginTop: '20px',
          color: 'rgb(237, 234, 232)',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
