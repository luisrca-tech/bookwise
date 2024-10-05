import Image from "next/image";
import { popularBooks } from "~/mocks/popularBooks";
import { ratedBooks } from "~/mocks/ratedBooks";
import { HydrateClient } from "~/trpc/server";
import { PopularBookPoster } from "../_components/block/PopularBookPoster";
import { RatedBookPoster } from "../_components/block/RatedBookPoster";
import arrow from "/public/images/arrow.png";
import startGreenIcon from "/public/images/startGreenIcon.png";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex w-full items-center gap-3 pt-[4.5rem]">
            <Image
              className="fill-green-100"
              width={32}
              height={32}
              src={startGreenIcon}
              alt="start icon"
            />
            <h2 className="text-lg text-gray-100">Start</h2>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm text-gray-100">Most recent reviews</h4>
            {ratedBooks.map((book) => (
              <div key={book.title}>
                <RatedBookPoster book={book} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-w-[20.25rem] flex-col gap-4 pt-[9.125rem]">
          <div className="flex w-full items-center justify-between px-2">
            <h4 className="text-sm text-gray-100">Popular books</h4>
            <button className="flex items-center gap-2 text-sm text-purple-100">
              See all <Image src={arrow} alt="Arrow to see all popular books" />
            </button>
          </div>
          {popularBooks.map((book) => (
            <div key={book.title}>
              <PopularBookPoster book={book} />
            </div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}
