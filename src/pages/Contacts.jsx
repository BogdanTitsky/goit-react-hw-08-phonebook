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
    <section className="container container-content ">
      <div className="contacts-wrap  shadow-xlg ">
        <div className="row ">
          <div className="col-lg-7 ">
            <ContactForm />
          </div>
          <div className="pt-3 col-lg-5 ">
            <h2 className="mb-2">My contacts</h2>
            <Filter />

            {isLoading && !error ? <Loader /> : <ContactList />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
