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
      <ContactForm />
      <div className="pt-3">
        <h2 className="mb-2">My contacts</h2>
        <Filter />

        {isLoading && !error ? <Loader /> : <ContactList />}
      </div>
    </section>
  );
};

export default Contacts;
