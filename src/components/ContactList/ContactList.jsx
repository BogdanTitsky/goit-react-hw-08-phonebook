import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
