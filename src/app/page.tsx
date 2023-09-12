import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      THIS IS HOME DISCORD PAGE WITH EXPLAINING HOW TO USE THE APP BELOW TELLS
      YOU IF U'R LOGGED IN...
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
