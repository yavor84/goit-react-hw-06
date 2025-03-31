import css from '../components/App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { RiContactsBook3Fill } from 'react-icons/ri';

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <RiContactsBook3Fill size={50} />
        <h1 className={css.title}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
