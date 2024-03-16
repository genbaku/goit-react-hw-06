import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { useState, useEffect } from "react"

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const deletedContactRemoved = contacts.filter(contact => contact.id !== id);
    setContacts(deletedContactRemoved);
  };

  

  return (
    <>
      <h1>Phonebook</h1>
      
      <ContactForm onSubmit={addContact}/>

      <SearchBox value={searchWord} onChange={handleSearch} />

      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </>
  )
}