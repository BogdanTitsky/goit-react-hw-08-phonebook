import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email, name } = useSelector(selectUser);

  return (
    <div className="d-flex align-items-center column-gap-3 flex-wrap">
      <div>
        <p className="text-light text-left m-0 ">User: {name}</p>
        <p className="text-light text-left m-0">{email}</p>
      </div>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
