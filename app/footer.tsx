import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row justify-evenly items-center bg-[#FAFAFA]">
      <Image src="/DO.png" alt="self-logo" width="200" height="200" />
    </div>
  );
}
