import Link from "next/link";

const channlesObs = [
  {
    name: "channel1",
  },
  {
    name: "channel2",
  },
  {
    name: "channel3",
  },
];

const ChannelUI = ({ pathname }: { pathname: string }) => {
  return (
    <>
      {channlesObs.map((item, index) => (
        <Link
          href={`/${item.name}?section=general`}
          key={index}
          className={`text-${
            pathname === `/${item.name}` ? "red-500" : "blue-500"
          } block`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default ChannelUI;
