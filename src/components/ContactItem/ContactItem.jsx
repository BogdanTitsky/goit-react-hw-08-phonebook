import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className="d-flex justify-content-between align-items-center border-bottom border-black p-2 ">
      <div className="d-flex align-items-center">
        <img
          src="http://placehold.it/40x40"
          alt="error"
          className="rounded-circle me-2"
        />
        <div>
          <p className="m-0 fs-5 fw-semibold ">{contact.name}</p>
          <p className="m-0 text-body-secondary">{contact.number}</p>
        </div>
      </div>
      <button
        className="btn btn-outline-dark"
        type="button"
        onClick={handleDelete}
      >
        Delete
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
