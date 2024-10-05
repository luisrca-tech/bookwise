import Image from "next/image";
import { type PopularBook } from "~/mocks/popularBooks";
import Rating from "/public/images/rating.png";

export function PopularBookPoster({ book }: { book: PopularBook }) {
  return (
    <div className="flex min-h-[8.125rem] w-full flex-col rounded-lg bg-gray-700 px-5 py-4">
      <div className="flex gap-5">
        <Image
          width={64}
          height={94}
          src={book.coverImage}
          alt="Cover image of books"
        />
        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col">
            <strong className="text-lg text-gray-100">{book.title}</strong>
            <span className="text-sm text-gray-400">{book.author}</span>
          </div>
          <Image src={Rating} alt="Ilustrative rating" />
        </div>
      </div>
    </div>
  );
}
