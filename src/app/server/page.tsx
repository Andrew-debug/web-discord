import { redirect } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  if (Object.keys(params).length < 1) redirect("/");
  return <></>;
};

export default page;
