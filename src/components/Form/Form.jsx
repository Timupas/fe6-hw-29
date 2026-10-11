import React from "react";

function Form({ name, number, handleSubmit, setName, setNumber }) {
    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Name</h2>

            <input
                type="text"
                name="name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                placeholder="Enter name"
            />

            <h2>Number</h2>

            <input
                type="tel"
                name="number"
                value={number}
                onChange={(evt) => setNumber(evt.target.value)}
                placeholder="Enter phone number"
            />

            <button
                type="submit"
            >
                Add contact
            </button>
        </form>
    );
}

export default Form;