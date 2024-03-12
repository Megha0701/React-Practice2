import React from 'react'
import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({book, onSubmit}) {

const [title, settitle] = useState(book.title);
const { editBookById } = useContext(BooksContext);

const handleChange = (event) => {
    settitle(event.target.value);
}

const handleSubmit = (event) => {
event.preventDefault();
onSubmit();
editBookById(book.id, title);
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
