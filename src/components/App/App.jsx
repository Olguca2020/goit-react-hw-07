import css from "./App.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { fetchCards } from "../../redux/operation";
import { selectError, selectLoading } from "../../redux/selectors";
import { ContactForm } from "../ContactForm/ContactForm";
import { MyLoader } from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (error && !hasErrorOccurred) {
      toast.error("Waiting please...");
      setHasErrorOccurred(true);
    }
  }, [error, hasErrorOccurred]);
  return (
    <>
      {" "}
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <MyLoader />}
      <ContactList />
      <Toaster />
    </>
  );
}

export default App;
