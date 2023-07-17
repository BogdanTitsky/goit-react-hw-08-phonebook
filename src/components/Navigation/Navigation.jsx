import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="d-flex gap-3">
      <NavLink className="btn btn-outline-warning" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="btn btn-outline-warning" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
