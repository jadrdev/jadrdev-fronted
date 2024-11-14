"use client";
import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Menu from "@/components/header/menu";
import Image from "next/image";
import Avatar from "../../../img/avatar.webp";
import { useEffect, useState } from "react";



type PageProps = {
  params: {
    slug: string;  // Aquí definimos que params tiene un 'slug' que es de tipo string.
  };
};

export default function Page({ params }: PageProps) {
  const [post, setPost] = useState<Post | null>(null);  // Inicializamos el estado como null.

  // Cargar datos cuando el componente se monta.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await api.posts.read({ slug: params.slug });
        setPost(postData);  // Actualizamos el estado con los datos obtenidos.
      } catch (error) {
        console.error("Error fetching the post:", error);
      }
    };

    fetchData();
  }, [params.slug]);  // Dependemos del 'slug' para volver a ejecutar la llamada si cambia.

  if (!post) return <div>Loading...</div>;  // Mostramos un mensaje de carga hasta que se obtengan los datos.

  return (
    <>
      <Menu />

      <main className="flex flex-col justify-center pt-32 pb-40">
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <small>
            <a href="/">👈 Back to home</a>
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