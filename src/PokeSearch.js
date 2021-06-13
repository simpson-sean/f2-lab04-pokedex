import React from 'react'

export default function PokeSearch(props) {
    const { handleChange, search } = props;


    return (
        <div>
            <input onChange={handleChange} />
            <button onClick={search}>{props.name}</button>
        </div>
    )
}
