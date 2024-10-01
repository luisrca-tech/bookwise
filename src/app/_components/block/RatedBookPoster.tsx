"use client";

import Image from "next/image";
import { useState } from "react";
import { type Book } from "~/constants/books";
import Rating from "/public/images/rating.png";

export function RatedBookPoster({ book }: { book: Book }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="flex max-w-[38rem] flex-col gap-8 rounded-lg bg-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Image
            width={40}
            height={40}
            src={book.avatar}
            alt="User avatar image"
          />
          <div className="flex flex-col gap-1">
            <span className="text-base text-gray-100">{book.username}</span>
            <span className="text-sm text-gray-400">{book.publishedAt}</span>
          </div>
        </div>
        <Image src={Rating} alt="Rating" />
      </div>
      <div className="flex gap-5">
        <Image
          width={108}
          height={152}
          src={book.coverImage}
          alt="Book cover image"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg text-gray-100">{book.title}</h3>
            <span className="text-sm text-gray-400">{book.author}</span>
          </div>
          <div>
            <p
              className={`text-sm text-gray-300 ${isExpanded ? "max-h-full" : "max-h-[5rem] overflow-hidden"}`}
            >
              {book.description}{" "}
            </p>
            <button onClick={handleExpand} className="text-purple-100">
              see more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
