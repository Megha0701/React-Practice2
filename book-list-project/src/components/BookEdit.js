import React from 'react'
import { useState } from 'react';

function BookEdit({book, onSubmit}) {

const [title, settitle] = useState(book.title);

const handleChange = (event) => {
    settitle(event.target.value);
}

const handleSubmit = (event) => {
event.preventDefault();
onSubmit(book.id, title);

};

  return (
    <form onSubmit={handleSubmit} classname="book-edit">
        <label>Title</label>
        <input className="input"  value={title} onChange={handleChange}/>
        <button className='button is-primary'>
            Save
        </button>
    </form>
  )
}

export default BookEdit;
