import UserNavbar from "@/components/userUI/UserNavbar";

export default async function Home() {
  return (
    <div className="flex w-full">
      <UserNavbar />
      <div>user main</div>
    </div>
  );
}
