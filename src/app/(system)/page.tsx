
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <h1 className="text-green-200">Bookwise</h1>
        <h1 className="text-green-200/50 px-">Bookwise</h1>
      </main>
    </HydrateClient>
  );
}
