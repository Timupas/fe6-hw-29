import React from "react";

function Filter({ filter, setFilter }) {
    return (
        <div>
            <p>
                Find contacts by name
            </p>

            <input
                type="text"
                value={filter}
                onChange={(evt) => setFilter(evt.target.value)}
                placeholder="Search contacts..."
            />
        </div>
    );
}

export default Filter;