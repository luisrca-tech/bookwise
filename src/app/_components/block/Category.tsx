import { type Category } from "~/mocks/categories";

export function Category({ category }: { category: Category }) {
  return (
    <button className="min-w-[6.3125rem] rounded-full border border-purple-100 px-4 py-1 text-center text-sm text-purple-100 hover:bg-purple-200 hover:text-gray-100">
      {category.name}
    </button>
  );
}
