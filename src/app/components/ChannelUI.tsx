"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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

interface ChannelUIProps {
  selectedChannel: string | null;
  setSelectedChannel: (v: string) => void;
}

// const ChannelUI = ({ selectedChannel, setSelectedChannel }: ChannelUIProps) => {
const ChannelUI = ({}: {
  //   searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchParams = useSearchParams();
  const selectedChannel = searchParams.get("channel");
  return (
    <>
      {channlesObs.map((item, index) => (
        <Link
          href={`?channel=${item.name}`}
          key={index}
          className={`${
            selectedChannel === item.name ? "text-red-500" : "text-blue-600"
          } block`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default ChannelUI;
