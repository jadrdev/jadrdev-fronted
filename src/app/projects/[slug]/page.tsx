'use client';
import { Metadata, ResolvingMetadata } from 'next'
import { api } from "@/api/api";

async function getData(params: { slug: string }) {
  const postsData = await api.posts.read({
    slug: params.slug,
  });
  return postsData;

}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params);
 
  return (
    <>
    <main className="flex flex-col justify-center pt-32 pb-40">
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <small>
        <a href="/">
          <a>👈 Back to home</a>
        </a>
      </small>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-4">
      <img src={data?.feature_image} alt={data?.title} className="w-full" />
      </div>

      <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-4">
        {data?.title}
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
        <div className="flex items-center">
          <img
            alt="Joshua"
            height={24}
            width={24}
            src="../../../img/avatar.webp"
            className="rounded-full"
          />

          <p className="text-sm ml-2 text-gray-500">
            {"Joshua A. Díaz Robayna / "}
            <span className="text-gray-600">
              {data?.reading_time} min read
            </span>
            {" / "}

            <span className="text-gray-600">
              {new Date(data?.published_at as string).toLocaleDateString()}
            </span>
          </p>
        </div>

        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {/* {article.readingTime.text} */}
        </p>
      </div>

      <div className="prose dark:prose-dark max-w-none w-full mt-5 mb-8">
      <div dangerouslySetInnerHTML={{ __html: data?.html as string }} />
      </div>
    </article>
  </main>
  </>
     
  );
}