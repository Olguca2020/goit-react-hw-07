import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.elements);

  const filter = useSelector((state) => state.filters.name.toLowerCase());
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleContactDelete = (contactId) => {
    console.log(contactId);
    dispatch(removeContact({ id: contactId }));
  };

  return (
    <ul className={css.contactWrapper}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
