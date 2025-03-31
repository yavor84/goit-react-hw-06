import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { RiContactsFill } from 'react-icons/ri';
import { BsFillPhoneFill } from 'react-icons/bs';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.info}>
        <div className={css.string}>
          <RiContactsFill size={20} />
          <h3 className={css.name}>{name}</h3>
        </div>
        <div className={css.string}>
          <BsFillPhoneFill size={20} />
          <p className={css.name}>{number}</p>
        </div>
      </div>

      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
