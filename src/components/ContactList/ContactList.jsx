import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectCards } from "../../redux/selectors";
import { deleteCard } from "../../redux/operation";

export const ContactList = () => {
  const items = useSelector(selectCards);

  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
  const handleContactDelete = (contactId) => {
    dispatch(deleteCard(contactId));
  };

  return (
    <ul className={css.contactWrapper}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.phone}
            onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
