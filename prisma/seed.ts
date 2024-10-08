/* eslint-disable @typescript-eslint/no-misused-promises */
import { db } from "~/server/db";
import { books } from "./constants/books";
import { categories } from "./constants/categories";
import { ratings } from "./constants/ratings";
import { users } from "./constants/users";

async function main() {
  const usersSeed = users.map((user) => {
    return db.user.create({
      data: {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url,
      },
    });
  });

  const categoriesSeed = categories.map((category) => {
    return db.category.create({
      data: {
        id: category.id,
        name: category.name,
      },
    });
  });

  const booksSeed = books.map((book) => {
    return db.book.create({
      data: {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
      },
    });
  });

  const ratingsSeed = ratings.map((rating) => {
    return db.rating.create({
      data: {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        created_at: new Date(),
        book: {
          connect: { id: rating.book_id },
        },
        user: {
          connect: { id: rating.user_id },
        },
      },
    });
  });

  await Promise.all(usersSeed);
  await Promise.all(categoriesSeed);
  await Promise.all(booksSeed);
  await Promise.all(ratingsSeed);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
    return;
  });
