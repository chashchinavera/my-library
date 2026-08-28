import styles from "./Main.module.css";
import type { Book } from "@/types/book";
import { useOutletContext } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import type { MouseEventHandler } from "react";
import { Icon } from "../Icon/Icon";

interface ContextType {
  books: Book[];
  openAddModal: MouseEventHandler<HTMLButtonElement>;
}

export default function Main() {
  const { books, openAddModal } = useOutletContext<ContextType>();

  return (
    <main className={styles.main}>
      <button className={styles.button} type="button" onClick={openAddModal}>
        <Icon name="add" />
        Добавить книгу
      </button>
      <div className={styles.grid}>
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </main>
  );
}
