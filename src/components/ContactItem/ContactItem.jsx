import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import scss from './ContactItem.module.scss';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li
      className={`d-flex justify-content-between align-items-center p-2 ${scss.itemBorder}`}
    >
      <div className="d-flex align-items-center">
        <img
          src="http://placehold.it/40x40"
          alt="error"
          className="rounded-circle me-2"
        />
        <div>
          <p className="m-0 fs-5 fw-medium ">{contact.name}</p>
          <p className="m-0 text-body-secondary">{contact.number}</p>
        </div>
      </div>
      <button
        className="btn btn-outline-dark rounded-3"
        type="button"
        onClick={handleDelete}
      >
        DELETE
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
