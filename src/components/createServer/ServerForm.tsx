"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import LoadImageSvg from "../../../public/load-image.svg";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface IForm {
  serverName: string;
  image: string;
}

const ServerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<IForm>({
    serverName: "",
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
  return (
    <form onSubmit={handleFormSubmit} className="">
      <fieldset className="flex justify-center mb-6">
        <div className={`relative w-[${form?.image ? "80px" : "60px"}]`}>
          <div className="flex justify-center">
            {form.image ? (
              <Image
                src={form?.image}
                width={80}
                height={80}
                className="rounded-full"
                alt="server image"
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
            id="server avatar"
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
          htmlFor="serverName"
        >
          server name
        </label>
        <input
          // type={type || "text"}
          type="text"
          id="serverName"
          placeholder="Server name"
          value={form.serverName}
          required
          className="w-full h-9 flex-1 inline-flex items-center justify-center rounded-sm px-[10px] text-sm bg-light-300 text-black placeholder:text-black focus:outline-none"
          onChange={(e) => handleStateChange("serverName", e.target.value)}
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
      <div
        style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
      >
        <Dialog.Close asChild>
          <button
            type="submit"
            className="inline-flex justify-center items-center text-[13px] rounded px-[25px] py-[10px] bg-[#5360ec] hover:bg-[#434dbb] transition-colors "
          >
            Create
          </button>
        </Dialog.Close>
      </div>
      <Dialog.Close asChild>
        <button
          type="button"
          className="absolute top-[10px] right-[10px] inline-flex justify-center items-center rounded-full w-6 h-6 text-light-600 hover:text-light-800 transition-colors"
          aria-label="Close"
        >
          <X />
        </button>
      </Dialog.Close>
    </form>
  );
};

export default ServerForm;
