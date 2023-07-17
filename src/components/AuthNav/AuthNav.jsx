import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthNav = () => {
  return (
    <div className="d-flex gap-3">
      <NavLink className="btn btn-outline-warning" to="/register">
        Register
      </NavLink>
      <NavLink className="btn btn-outline-warning" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
