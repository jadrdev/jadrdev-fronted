"use client";
import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Menu from "@/components/header/menu";
import Image from "next/image";
import Avatar from "../../../img/avatar.webp";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

type PageProps = {
  post: Post;  // Usamos el tipo 'Post' directamente para el post cargado
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string }; // Extraemos el 'slug' de los parámetros

  try {
    const postData = await api.posts.read({ slug });  // Traemos el artículo usando el slug
    return {
      props: { post: postData },  // Pasamos el post como prop al componente
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,  // Si hay un error o el post no se encuentra, retornamos un 404
    };
  }
};

export default function Page({ post }: PageProps) {
  
  if (!post) return <div>Loading...</div>;
  
  return (
    <>
     {/* Head for SEO */}
     <Head>
        <title>{post?.title} | Mi Blog</title>
        <meta name="description" content={post?.excerpt || "Lee este artículo interesante en nuestro blog."} />
        <meta name="keywords" content="blog, artículo, noticias, tecnología, {post?.tags.join(',')}" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.excerpt || "Lee este artículo interesante en nuestro blog."} />
        <meta property="og:image" content={post?.feature_image || "/default-image.jpg"} />
        <meta property="og:url" content={`https://mi-blog.com/blog/${post?.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.excerpt || "Lee este artículo interesante en nuestro blog."} />
        <meta name="twitter:image" content={post?.feature_image || "/default-image.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <Menu></Menu>
    <main className="flex flex-col justify-center pt-32 pb-40">
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <small>
          <a href="/">
            <a>👈 Back to home</a>
          </a>
        </small>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-4">
          <img
            src={post?.feature_image}
            alt={post?.title}
            className="w-full"
          />
        </div>

        <h4 className="font-bold text-5xl md:text-5xl tracking-tight mb-4">
          {post?.title}
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
                {post?.reading_time} min read
              </span>
              {" / "}

              <span className="text-gray-600">
                {new Date(post?.published_at as string).toLocaleDateString()}
              </span>
            </p>
          </div>

          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {/* {article.readingTime.text} */}
          </p>
        </div>

        <div className="prose dark:prose-dark max-w-none w-full mt-5 mb-8">
          <div dangerouslySetInnerHTML={{ __html: post?.html as string }} />
        </div>
      </article>
    </main>
    </>
  );
}
