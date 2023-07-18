import { useState } from 'react';
import css from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isExistingName = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const isExistingNumber = contacts.some(contact => contact.number === number);

  const handleSubmit = e => {
    e.preventDefault();
    if (isExistingName) {
      return alert(`Contact with name ${name} is already in contact`);
    } else if (isExistingNumber) {
      return alert(`Number ${number} is already in contact`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        const digitsOnly = value.replace(/\D/g, '');
        const truncatedNumber = digitsOnly.slice(0, 10);
        const formattedNumber = truncatedNumber.replace(
          /(\d{3})(\d{3})(\d{4})/,
          '$1-$2-$3'
        );
        setNumber(formattedNumber);
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
          pattern="[A-Za-zА-ЯЁІЇЄҐа-яёіїєґ\s]+"
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
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Phone number must be digits and must contain 10 numbers"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
};
