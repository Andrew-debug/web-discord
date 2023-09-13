import Link from "next/link";

const channlesObs = [
  {
    id: "league-of-legends",
    name: "League of Legends",
  },
  {
    id: "dota",
    name: "Dota2",
  },
  {
    id: "cs-go",
    name: "CS:GO",
  },
];

const NavigationServers = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {channlesObs.map((item, index) => (
        <Link
          href={`/server/${item.id}?section=general`} // redirect to default 'general' channel
          key={index}
          className={`block text-${
            pathname === `/${item.name}` ? "red-500" : "blue-500"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default NavigationServers;
