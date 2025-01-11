import Image from "next/image";

async function getData() {
  const querry = `
  *[_type == "blog"] | order(_createdAt asc) {
  title,
    smallDescription,
    "currentSlug" : slug.current,
}

  `;
}
export default function Home() {
  return (
    <div className="px-10 max-w-[1440px] pt-10">
      <div className="grid grid-cols-3 place-items-center">
        <div className="flex flex-col gap-4 max-w-[320px] bg-gray-50 p-2">
          <h2 className=" text-xl">What to expect in the Next js 15 release</h2>
          <Image
            src={"/Images/image.png"}
            width={300}
            height={260}
            className="object-cover rounded-md "
            alt={"Blog post image"}
          />
          <p className="line-clamp-3">
            Next.js 15 introduces React 19 support, caching improvements, a
            stable release for Turbopack and more
          </p>
          <div className="flex justify-between items-center">
            <p className="">By: trejan_dev</p>
            <div className="">
              <button className="bg-blue-500 py-1 px-1 text-white rounded-md hover:scale-105">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
