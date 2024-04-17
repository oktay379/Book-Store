import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";


const Books = ({roles}) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/book/books")
    .then(res => {
      setBooks(res.data);
      // console.log(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {
        books.map(book => {
          return <BookCard key={book.id} book = {book} roles = {roles}/>
        })
      }
    </div>
  )
}

export default Books