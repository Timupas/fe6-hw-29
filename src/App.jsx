import "./App.css";
import Form from "./components/Form/Form.jsx";
import ListContacts from "./components/ListContacts/ListContacts.jsx";
import { useEffect, useState } from "react";
import { changeFilter } from "./components/redux/filterSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./components/redux/operations.js";
import Filter from "./components/Filter/Filter.jsx";
import { getContacts } from "./components/redux/selectors.js";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phone Book</h1>
      <Form
        name={name}
        number={number}
        handleSubmit={handleSubmit}
        setName={setName}
        setNumber={setNumber}
      />
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ListContacts
        contacts={filteredContacts}
        deleteContact={deleteContact}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;