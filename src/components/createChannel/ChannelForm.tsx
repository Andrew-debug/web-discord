"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import LoadImageSvg from "../../../public/load-image.svg";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as Realm from "realm-web";

interface IForm {
  channelName: string;
  image: string;
}

const ChannelForm = ({
  setOpenModal,
}: {
  setOpenModal: (v: boolean) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<IForm>({
    channelName: "",
    image: "",
  });

  const handleStateChange = (fieldName: keyof IForm, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("image", result);
    };
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);

    // const { token } = await fetchToken();

    // try {
    //   if (type === "create") {
    //     await createNewProject(form, session?.user?.id, token);
    //     router.push("/");
    //   }

    //   if (type === "edit") {
    //     await updateProject(form, project?.id as string, token);
    //     router.push("/");
    //   }
    // } catch (error) {
    //   alert(
    //     `Failed to ${
    //       type === "create" ? "create" : "edit"
    //     } a project. Try again!`
    //   );
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleCreateChannel = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenModal(false);

    const realm_app = process.env.NEXT_PUBLIC_REALM_APP_ID ?? "";
    const app = new Realm.App({ id: realm_app });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allData = await user.functions.getAllServers();
      console.log(allData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCreateChannel}>
      <fieldset className="flex justify-center mb-6">
        <div className={`relative w-[${form?.image ? "80px" : "60px"}]`}>
          <div className="flex justify-center">
            {form.image ? (
              <Image
                src={form?.image}
                width={80}
                height={80}
                className="rounded-full"
                alt="channel image"
              />
            ) : (
              <Image
                src={LoadImageSvg}
                width={60}
                height={60}
                alt="load image"
              />
            )}
          </div>
          <input
            // id="channel avatar"
            type="file"
            accept="image/*"
            // required={type === "create" ? true : false}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer text-[0px]"
            onChange={(e) => handleChangeImage(e)}
          />
        </div>
      </fieldset>

      <fieldset className="mb-4">
        <label
          className="block mb-2 text-[11px] text-dark-300 uppercase font-bold"
          htmlFor="channelName"
        >
          server name
        </label>
        <input
          // type={type || "text"}
          type="text"
          id="channelName"
          placeholder="Server name"
          value={form.channelName}
          required
          className="w-full h-9 flex-1 inline-flex items-center justify-center rounded-sm px-[10px] text-sm bg-light-300 text-black placeholder:text-black focus:outline-none"
          onChange={(e) => handleStateChange("channelName", e.target.value)}
        />
      </fieldset>

      <div className="text-[11px] font-light text-black">
        By creating a server, you agree to Discord's{" "}
        <strong>
          <Link
            href={"/"}
            className="text-blue-600 font-semibold hover:underline underline-offset-2 decoration-1"
          >
            Community Guildelines
          </Link>
        </strong>
      </div>

      <div className="flex mt-6 justify-end">
        <button
          type="submit"
          className="inline-flex justify-center items-center text-[13px] rounded px-[25px] py-[10px] bg-[#5360ec] hover:bg-[#434dbb] transition-colors "
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ChannelForm;
