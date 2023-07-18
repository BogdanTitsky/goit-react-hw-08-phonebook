import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="container container-content">
      <h1 className="text-center">Phonebook</h1>
      <ContactForm />
      <h2 className="text-center mt-3">Contacts</h2>
      <Filter />

      {isLoading && !error ? <Loader /> : <ContactList />}
    </section>
  );
};

export default Contacts;
