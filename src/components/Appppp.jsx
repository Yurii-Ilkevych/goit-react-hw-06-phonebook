// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Wrapper, PrimaryTittle, SecondTittle } from './App.styled';
// export default function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     if (!contacts) {
//       return;
//     }
//     setContacts(JSON.parse(contacts));
//   }, []);

//   useEffect(() => {
//     if (contacts.length > 0) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const handleSubmit = data => {
//     for (const contact of contacts) {
//       if (contact.name.includes(data.name)) {
//         alert(`${data.name} "is already in contacts"`);
//         return;
//       }
//     }
//     setContacts([data, ...contacts]);
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//     if (contacts.length === 1) {
//       localStorage.setItem('contacts', JSON.stringify([]));
//     }
//   };

//   const handleSearch = evt => {
//     setFilter(evt.currentTarget.value);
//   };

//   const getContact = () => {
//     const normalizeFilter = filter.toLowerCase();
//     const filterContact = contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizeFilter)
//     );
//     return filterContact;
//   };
//   return (
//     <Wrapper>
//       <PrimaryTittle>Phonebook</PrimaryTittle>
//       <ContactForm onForm={handleSubmit} />

//       <SecondTittle>Contacts</SecondTittle>
//       <Filter onSearch={handleSearch} searchName={filter} />
//       <ContactList contacts={getContact()} onDell={deleteContact} />
//     </Wrapper>
//   );
// }

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
// };
