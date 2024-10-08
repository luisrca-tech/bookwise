import { type StaticImageData } from "next/image";
import avatar1 from "/public/images/avatar/1.png";
import avatar2 from "/public/images/avatar/2.png";
import avatar3 from "/public/images/avatar/3.png";

import cover1 from "/public/images/books/viagem-ao-centro-da-terra.png";
import cover2 from "/public/images/books/arquitetura-limpa.png";
import cover3 from "/public/images/books/fragmentos-do-horror.png";

export type RatedBook = {
  username: string;
  avatar: StaticImageData;
  publishedAt: string;
  rating: boolean;
  coverImage: StaticImageData;
  title: string;
  author: string;
  description: string;
};

export const ratedBooks: RatedBook[] = [
  {
    username: "Jaxson Dias",
    avatar: avatar1,
    publishedAt: "Today",
    rating: true,
    coverImage: cover1,
    title: "The hobbit",
    author: "J.R.R. Tolkien",
    description:
      "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... Lorem ipsum dolor sit amet, consectetur adipiscing elit. SedLorem ipsum dolor sit amet, consectetur adipiscing elit. sed",
  },
  {
    username: "Brandon Botosh",
    avatar: avatar2,
    publishedAt: "Hier",
    rating: true,
    coverImage: cover2,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. SedLorem ipsum dolor sit amet, consectetur adipiscing elit. sed",
  },
  {
    username: "Lindsey Philips",
    avatar: avatar3,
    publishedAt: "Hier",
    rating: true,
    coverImage: cover3,
    title: "Understanding Algorithms",
    author: "Aditya Bhargava",
    description:
      "Integer at tincidunt sed mi. Venenatis nunc justo porta viverra lacus scelerisque ut orci ultricies. Massa ultrices lacus non lectus pellentesque cras posuere neque. Nunc nisl curabitur et non. Tellus senectus elit porta lorem.",
  },
];
