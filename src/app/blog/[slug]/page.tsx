"use client";
import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Image from "next/image";
import Avatar from "../../../img/avatar.webp";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [posts, setPosts] = useState<Post>();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await api.posts.read({
          slug: params.slug,
        });
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col justify-center pt-32 pb-40">
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <small>
          <a href="/">
            <a>👈 Back to home</a>
          </a>
        </small>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-4">
          <img
            src={posts?.feature_image}
            alt={posts?.title}
            className="w-full"
          />
        </div>

        <h4 className="font-bold text-5xl md:text-5xl tracking-tight mb-4">
          {posts?.title}
        </h4>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              src={Avatar}
              alt="joshua-avatar"
              width={24}
              height={24}
              className="rounded-full"
            />

            <p className="text-sm ml-2 text-gray-500">
              {"Joshua A. Díaz Robayna / "}
              <span className="text-gray-600">
                {posts?.reading_time} min read
              </span>
              {" / "}

              <span className="text-gray-600">
                {new Date(posts?.published_at as string).toLocaleDateString()}
              </span>
            </p>
          </div>

          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {/* {article.readingTime.text} */}
          </p>
        </div>

        <div className="prose dark:prose-dark max-w-none w-full mt-5 mb-8">
          <div dangerouslySetInnerHTML={{ __html: posts?.html as string }} />
        </div>
      </article>
    </main>
  );
}
