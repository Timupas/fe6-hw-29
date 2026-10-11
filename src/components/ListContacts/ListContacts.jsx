function ListContacts({ contacts, deleteContact, dispatch }) {
    return (
        <ul>
            {contacts.map((contact) => (
                <li
                    key={contact.id}>
                    <div>
                        <p>{contact.name}</p>

                        <p>{contact.number}</p>
                    </div>

                    <button
                        onClick={() => dispatch(deleteContact(contact.id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ListContacts;