import { auth } from "@/auth";
import { headers } from "next/headers";

export default async function DisplayUsername() {
  const session = await auth.api.getSession({
        headers: await headers(),
  });
  const name = session?.user.name; // Can be null/undef thechnically but edgecase for later

  return (
    <p className="">
      {name + "'s"}
    </p>
    
  );

}
