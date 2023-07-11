import { useState } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isExistingContact = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  const handleSubmit = e => {
    e.preventDefault();
    if (isExistingContact) {
      return alert(`${name} is already in contact`);
    }
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <h2>Number</h2>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
