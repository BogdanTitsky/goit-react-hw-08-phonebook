import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <label>
          Email
          <input className="form-control" type="email" name="email" />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Password
          <input className="form-control" type="password" name="password" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-dark">
        Log In
      </button>
    </form>
  );
};
