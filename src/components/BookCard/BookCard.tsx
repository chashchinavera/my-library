import type { Book } from "@/types/book";
import styles from "./BookCard.module.css";
import { Icon } from "../Icon/Icon";

interface BookCard {
  book: Book;
}

const BookCard = ({ book }: BookCard) => {
  return (
    <div className={styles.card}>
      <span className={styles.card_info}>{book.title}</span>
      <span className={styles.card_info}>{book.author}</span>
      <span
        className={`${styles.card_status} ${book.isRead ? styles.card_status_read : styles.card_status_unread}`}
      >
        {book.isRead ? "Прочитана" : "Не прочитана"}
      </span>
      <div className={styles.card_container}>
        <button className={styles.button}>
          <Icon name="edit" />
        </button>
        <button className={styles.button}>
          <Icon name="delete" />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
