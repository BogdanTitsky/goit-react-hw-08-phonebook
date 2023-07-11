import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.item}>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
