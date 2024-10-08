"use client";

import Image from "next/image";
import { Book } from "~/app/_components/block/Book";
import { BookSkeleton } from "~/app/_components/block/BookSkeleton";
import { Category } from "~/app/_components/block/Category";
import { Categories } from "~/mocks/categories";
import { api } from "~/trpc/react";
import explorerImage from "/public/images/explorerGreenIcon.png";
import searchIcon from "/public/images/searchIcon.png";

export default function ExplorerPage() {
  const books = api.books.getAll.useQuery();

  return (
    <main className="flex w-full flex-col gap-12 pb-12 pr-24 pt-[4.5rem]">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Image
            width={32}
            height={32}
            src={explorerImage}
            alt="Explorer Icon"
          />
          <h2 className="text-lg text-gray-100">Explore</h2>
        </div>
        <div className="relative">
          <input
            className="w-[27.0625rem] border border-gray-500 bg-gray-800 px-5 py-[0.875rem]"
            placeholder="Search book or author"
            type="text"
          />
          <Image
            src={searchIcon}
            alt="Search icon"
            className="absolute right-[0.875rem] top-4"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        {Categories.map((category) => (
          <div key={category.id}>
            <Category category={category} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 items-center gap-5">
        {books.isLoading
          ? Array.from({ length: 15 }).map((_, index) => (
              <div key={index}>
                <BookSkeleton />
              </div>
            ))
          : books.data?.map((book) => (
              <div key={book.id}>
                <Book book={book} />
              </div>
            ))}
      </div>
    </main>
  );
}
