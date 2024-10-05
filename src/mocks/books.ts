import { type PopularBook } from "./popularBooks";

import cover1 from "/public/images/cover/4.png";
import cover2 from "/public/images/cover/5.png";
import cover3 from "/public/images/cover/6.png";
import cover4 from "/public/images/cover/3.png";
import cover5 from "/public/images/cover/7.png";
import cover6 from "/public/images/cover/8.png";
import cover7 from "/public/images/cover/9.png";
import cover8 from "/public/images/cover/1.png";
import cover9 from "/public/images/cover/10.png";
import cover10 from "/public/images/cover/11.png";
import cover11 from "/public/images/cover/12.png";
import cover12 from "/public/images/cover/13.png";
import cover13 from "/public/images/cover/2.png";
import cover14 from "/public/images/cover/14.png";
import cover15 from "/public/images/cover/15.png";

export type Book = PopularBook;

export const books: Book[] = [
  {
    coverImage: cover1,
    title: "The animal revolution",
    author: "George Orwell",
    rating: true,
  },
  {
    coverImage: cover2,
    title: "14 Developer Habits High...",
    rating: true,
    author: "Zeno Rocha",
  },
  {
    coverImage: cover3,
    title: "The end of eternity",
    author: "Isaac Asimov",
    rating: true,
  },
  {
    coverImage: cover4,
    title: "Understanding Algorithms",
    author: "Aditya Y. Bhargava",
    rating: true,
  },
  {
    coverImage: cover5,
    title: "clean code",
    author: "Aditya Y. Bhargava",
    rating: true,
  },
  {
    coverImage: cover6,
    title: "The power of habit",
    author: "Charles Duhigg",
    rating: true,
  },
  {
    coverImage: cover7,
    title: "clean architecture",
    author: "Robert C. Martin",
    rating: true,
  },
  {
    coverImage: cover8,
    title: "The hobbit",
    author: "J.R.R. Tolkien",
    rating: true,
  },
  {
    coverImage: cover9,
    title: "Extraordinary stories",
    author: "Edgar Allan Poe",
    rating: true,
  },
  {
    coverImage: cover10,
    title: "Refactoring",
    author: "Martin Fowler",
    rating: true,
  },
  {
    coverImage: cover11,
    title: "Domain-Driven Design",
    author: "Eric Evans",
    rating: true,
  },
  {
    coverImage: cover12,
    title: "Journey to the Center of the Earth",
    author: "Julio Verne",
    rating: true,
  },
  {
    coverImage: cover13,
    title: "The backpacker's guide to galaxy",
    author: "Douglas Adams",
    rating: true,
  },
  {
    coverImage: cover14,
    title: "Fragments of Horror",
    author: "Junji Ito",
    rating: true,
  },
  {
    coverImage: cover15,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    rating: true,
  },
];