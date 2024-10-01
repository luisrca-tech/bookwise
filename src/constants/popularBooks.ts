import { type RatedBook } from "./ratedBooks";

import cover1 from "/public/images/cover/4.png";
import cover2 from "/public/images/cover/5.png";
import cover3 from "/public/images/cover/6.png";
import cover4 from "/public/images/cover/3.png";

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