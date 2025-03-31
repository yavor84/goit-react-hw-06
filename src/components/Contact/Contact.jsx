// import { FcPhone } from 'react-icons/fc';
// import { FcBusinessContact } from 'react-icons/fc';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.info}>
        <div className={css.string}>
          <FaRegUser size={20} />
          <h3 className={css.name}>{name}</h3>
        </div>
        <div className={css.string}>
          <MdOutlinePhoneIphone size={20} />
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
