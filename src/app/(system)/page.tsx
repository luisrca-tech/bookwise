import Image from "next/image";
import { ratedBooks } from "~/constants/ratedBooks";
import { HydrateClient } from "~/trpc/server";
import { RatedBookPoster } from "../_components/block/RatedBookPoster";
import startGreenIcon from "/public/images/startGreenIcon.png";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex flex-col gap-10">
        <div className="flex items-center gap-3 pt-[4.5rem]">
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
      </main>
    </HydrateClient>
  );
}
