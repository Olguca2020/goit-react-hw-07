import "./App.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { fetchCards } from "../../redux/operation";
import { selectError, selectLoading } from "../../redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox />
      {isLoading && <p>LOADING...</p>}
      {error && <p>ERROR!!!!!</p>}

      <ContactList />
    </div>
  );
}

export default App;
