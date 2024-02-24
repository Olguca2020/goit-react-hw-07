import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
// import { removeContact } from "../../redux/contactsSlice";
import { selectCards } from "../../redux/selectors";

export const ContactList = () => {
  const items = useSelector(selectCards);

  // const filter = useSelector((state) => state.filters.name.toLowerCase());

  // const filteredContacts = items.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  // const handleContactDelete = (contactId) => {
  //   console.log(contactId);
  //   dispatch(removeContact({ id: contactId }));
  // };

  return (
    <ul className={css.contactWrapper}>
      {items.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.phone}
            // onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
