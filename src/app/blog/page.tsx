"use client";
import Menu from "@/components/header/menu";
import { Post } from "@/domain/interfaces/PostInterface";
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import Link from "next/link";
import Head from "next/head";
export default function Blog() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await api.posts.browse({
          limit: 10,
          include: "tags,authors",
          filter: "tag:news",
        });
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  
    return (
      <>
      <Head>
        <title>Últimos artículos del blog | Mi Blog</title>
        <meta name="description" content="Lee los últimos artículos de mi blog sobre noticias y temas interesantes. Mantente al día con lo último." />
        <meta name="keywords" content="blog, noticias, artículos, tecnología, actualidad" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Últimos artículos del blog | Mi Blog" />
        <meta property="og:description" content="Lee los últimos artículos de mi blog sobre noticias y temas interesantes. Mantente al día con lo último." />
        <meta property="og:image" content="/default-image.jpg" />
        <meta property="og:url" content="https://mi-blog.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Últimos artículos del blog | Mi Blog" />
        <meta name="twitter:description" content="Lee los últimos artículos de mi blog sobre noticias y temas interesantes. Mantente al día con lo último." />
        <meta name="twitter:image" content="/default-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Menu></Menu>

      <main className="flex flex-col justify-center pt-32 pb-40 px-6">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Últimos artículos de mi blog
        </h1>

         {/* Contenedor de los artículos */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              key={post.slug}
              passHref
            >
              {/* Imagen destacada */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={post?.feature_image || "/default-image.jpg"} // Aquí se usa una imagen predeterminada si no existe la destacada
                  alt={post.title}
                  className="w-full h-48 object-cover object-center"
                />
              </div>

              {/* Título del artículo */}
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {post?.title}
              </p>

              {/* Resumen del artículo (opcional) */}
              <p className="text-gray-500 dark:text-gray-400">
                {post?.excerpt || "Resumen no disponible."}
              </p>
            </Link>
          ))}
        </div>
      </main>
      </>
    );
  }