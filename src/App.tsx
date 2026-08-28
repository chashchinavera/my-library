import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import type { Book } from "@/types/book";
import Header from "@/components/Header/Header";
import Main from "./components/Main/Main";
import { Modal } from "./components/Modal/Modal";
import { Nav } from "./components/Nav/Nav";
import { INITIAL_BOOKS } from "./definitions/definitions.InitialBooks";

function Layout() {
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem("my_library_books");
    return savedBooks ? JSON.parse(savedBooks) : INITIAL_BOOKS;
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("my_library_books", JSON.stringify(books));
  }, [books]);

  const openAddModal = () => setIsAddModalOpen(true);
  const openEditModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <>
      <Modal
        type="add"
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <Modal
        type="edit"
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <Header />
      <Nav />
      <main>
        <Outlet
          context={{
            books,
            setBooks,
            openAddModal,
            openEditModal,
            closeAddModal,
            closeEditModal,
          }}
        />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      { path: "category/best", element: "" },
      { path: "category/plans", element: "" },
      { path: "category/read", element: "" },
      { path: "category/all", element: "" },
      { path: "recommendations", element: "" },

      // { path: "book/:id", element: <BookDetails /> },
      // { path: "favorites", element: <Favorites /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
