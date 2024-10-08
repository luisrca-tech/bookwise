import { type RatedBook } from "./ratedBooks";

import cover1 from "/public/images/books/arquitetura-limpa.png";
import cover2 from "/public/images/books/fragmentos-do-horror.png";
import cover3 from "/public/images/books/o-guia-do-mochileiro-das-galáxias.png";
import cover4 from "/public/images/books/o-hobbit.png";

export type PopularBook = Pick<
  RatedBook,
  "coverImage" | "title" | "author" | "rating"
>;

export const popularBooks: PopularBook[] = [
  {
    coverImage: cover1,
    title: "The animal revolution",
    author: "George Orwell",
    rating: true,
  },
  {
    coverImage: cover2,
    title: "14 Developer Habits High...",
    author: "Zeno Rocha",
    rating: true,
  },
  {
    coverImage: cover3,
    title: "The End of Eternity",
    author: "Isaac Asimov",
    rating: true,
  },
  {
    coverImage: cover4,
    title: "Understanding Algorithms",
    author: "Aditya Bhargava",
    rating: true,
  },
];