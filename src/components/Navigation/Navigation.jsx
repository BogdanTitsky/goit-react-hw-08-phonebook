import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink className={''} to="/contacts">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
