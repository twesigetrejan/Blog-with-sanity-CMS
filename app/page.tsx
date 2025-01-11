import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { BlogCard } from "@/constants";

async function getData() {
  const querry = `
  *[_type == "blog"] | order(_createdAt asc) {
  title,
    smallDescription,
    "currentSlug" : slug.current,
    author,
    titleImage
}

`;
  const data = await client.fetch(querry);
  return data;
}
export default async function Home() {
  const articles: BlogCard[] = await getData();

  return (
    <div className="px-10 max-w-[1440px] pt-10">
      <div className="grid grid-cols-3 place-items-center">
        {articles &&
          articles.map((article) => (
            <div className="pb-10" key={article.title}>
              <div
                key={article.title}
                className="flex flex-col gap-4 max-w-[320px] bg-gray-50 px-2 py-4 rounded-lg"
              >
                <h2 className=" text-xl">{article.title}</h2>
                <div className="max-h-[260px]">
                  <Image
                    src={urlFor(article.titleImage).url()}
                    width={300}
                    height={260}
                    className="object-cover rounded-md "
                    alt={"Blog post image"}
                  />
                </div>
                <p className="line-clamp-3">{article.smallDescription}</p>
                <div className="flex justify-between items-center">
                  <p className="">By: {article.author}</p>
                  <div className="">
                    <button className="bg-blue-500 py-1 px-1 text-white rounded-md hover:scale-105">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
