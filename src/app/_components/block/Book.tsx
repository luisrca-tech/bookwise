import Image from "next/image";
import { type Book } from "~/constants/books";
import Rating from "/public/images/rating.png";

export function Book({ book }: { book: Book }) {
  return (
    <div className="rounded-lg bg-gray-700 px-5 py-4">
      <div className="flex gap-5">
        <Image
          width={108}
          height={152}
          src={book.coverImage}
          alt="Cover of books images"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <strong className="text-sm text-gray-100">{book.title}</strong>
            <span className="text-xs text-gray-400">{book.author}</span>
          </div>
          <Image src={Rating} alt="Ilustrative rating" />
        </div>
      </div>
    </div>
  );
}
