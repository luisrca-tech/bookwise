"use client";

import Image from "next/image";
import { api } from "~/trpc/react";
import { Skeleton } from "../ui/skeleton";
import Rating from "/public/images/rating.png";

export function BookSkeleton() {
  const book = api.books.getAll.useQuery();

  return (
    <div className="rounded-lg bg-gray-700 px-5 py-4">
      <div className="flex gap-5">
        {book.isLoading && (
          <Skeleton className="min-h-[9.5rem] min-w-[6.75rem]" />
        )}

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            {book.isLoading && <Skeleton className="h-3 w-full" />}
            {book.isLoading && <Skeleton className="h-3 w-full" />}
          </div>
          <Image src={Rating} alt="Ilustrative rating" />
        </div>
      </div>
    </div>
  );
}
