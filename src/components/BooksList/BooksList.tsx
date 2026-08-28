import BookCard from "../BookCard/BookCard";
import type { Book } from "@/types/book";
import "./BooksList.css";

interface BooksListProps {
  books: Book[];
}

const BooksList = ({ books }: BooksListProps) => {
  return (
    <section className="books-list">
      {books.reverse().map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BooksList;
