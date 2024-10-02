import Image from "next/image";
import explorerImage from "/public/images/explorerGreenIcon.png";
import searchIcon from "/public/images/searchIcon.png";
import { books } from "~/constants/books";
import { Book } from "~/app/_components/block/Book";

export default function ExplorerPage() {
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
          <Image src={searchIcon} alt="Search icon" className="absolute top-4 right-[0.875rem]" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 items-center">
      {books.map((book) => (
        <div key={book.title}>
        <Book book={book} />  
        </div>
      )
      )}
      </div>
    </main>
  );
}
