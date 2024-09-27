
import { UserButton } from "@clerk/nextjs";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
       <UserButton />
      </main>
    </HydrateClient>
  );
}
