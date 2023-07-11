import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
