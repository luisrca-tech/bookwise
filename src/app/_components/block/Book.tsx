import { type Book as DbBook } from "@prisma/client";
import Image from "next/image";
import { api } from "~/trpc/react";
import { Skeleton } from "../ui/skeleton";
import Rating from "/public/images/rating.png";

export function Book({ book }: { book: DbBook }) {
  const bookMutation = api.books.getAll.useQuery();

  return (
    <div className="rounded-lg bg-gray-700 px-5 py-4">
      <div className="flex gap-5">
        <Image
          width={108}
          height={152}
          className="min-h-[9.5rem] min-w-[6.75rem]"
          src={`/images/books/${book.cover_url}.png`}
          alt="Cover of books images"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            {bookMutation.isLoading ? (
              <Skeleton />
            ) : (
              <h3 className="text-lg text-gray-100">{book.name}</h3>
            )}
            <span className="text-xs text-gray-400">{book.author}</span>
          </div>
          <Image src={Rating} alt="Ilustrative rating" />
        </div>
      </div>
    </div>
  );
}
