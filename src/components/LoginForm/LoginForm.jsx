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
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className={''}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={''}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" className="button">
        Log In
      </button>
    </form>
  );
};
