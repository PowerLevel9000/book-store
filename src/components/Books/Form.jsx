import React from 'react';

const Form = () => (
  <form className="Add-Form">
    <h2>ADD NEW BOOK</h2>
    <input type="text" placeholder="Add Book Title" required />
    <input type="text" placeholder="Add Book Author" required />
    <button type="submit" className="button add">Add Book</button>
  </form>
);

export default Form;
