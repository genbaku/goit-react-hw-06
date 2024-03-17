import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList () {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(selectNameFilter);

    const dispatch = useDispatch();

    const deleteContactHandler = id => {
        dispatch(deleteContact(id));
      };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <ul className={css.list}>
                {filteredContacts.map(contact => (
                    <Contact onDelete={deleteContactHandler} key={contact.id} {...contact} />
                ))}
            </ul>
        </>
    );
}
