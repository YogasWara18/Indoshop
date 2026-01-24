import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] pb-10">
        <div className="banner h-[300px] relative rounded-2xl flex justify-center items-center">
            <Image/>
        </div>
      </div>
    </>
  );
}
