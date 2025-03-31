import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterName = useSelector(state => state.filters.filterName);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
