import Testbtn from "@/components/navbar/Testbtn";
import UserNavbar from "@/components/userUI/UserNavbar";
import { endpoints } from "@/lib/actions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex w-full overflow-hidden">
      <UserNavbar />
      <div className="w-full flex flex-col justify-center items-center">
        <h1>Welcome traveler.</h1>
        <p>This is my copy of Web Discord.</p>
        <div>
          <p>
            Here's a little bit of features that you'll be able to experience
            exploring through this app:
          </p>
          <ul>
            <li>lmao</li>
            <li>lmao</li>
            <li>lmao</li>
          </ul>

          <p className="mt-4">Feel free to check out my socials:</p>
          <div className="flex gap-4">
            <Link href={"/"}>github</Link>
            <Link href={"/"}>linkedIn</Link>
            <Link href={"/"}>portfolio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
