import { useState } from 'react';
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
    <div className="rounded border border-black pt-4 p-3 ps-5 pe-5">
      <h1 className="text-center mb-4">Phonebook</h1>

      <form
        className="d-flex flex-column align-items-center "
        onSubmit={handleSubmit}
      >
        <div className="mb-2">
          <label className="form-label ">
            <h2 className="mb-1">Name</h2>
            <input
              type="text"
              name="name"
              pattern="[A-Za-zА-ЯЁІЇЄҐа-яёіїєґ\s]+"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="form-label">
            <h2 className="mb-1">Number</h2>
            <input
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Phone number must be digits and must contain 10 numbers"
              required
              value={number}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-outline-dark">
          Add contact
        </button>
      </form>
    </div>
  );
};
