import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const Articles = () => {
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
      <h2 className="text-3xl font-bold tracking-tight text-white md: text-center p-1 ">
        Últimos artículos de mi blog
      </h2>
      {posts.length > 0 ? (
        <div className="flex flex-col items-center justify-center w-full py-10">
          <div className="flex flex-col md:flex-row md:space-x-4">
            {" "}
            {/* Cambiado a flex-col para móvil y flex-row para pantallas medianas y grandes */}
            {posts.map((post) => (
              <div key={post.id} className="md:w-1/3 p-4">
                {" "}
                {/* Establecer el ancho de la tarjeta en un tercio de la pantalla en dispositivos medianos y grandes */}
                <Link href={`/blog/${post.slug}`} className="block" passHref>
                  <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                      <p className="text-tiny text-white/60 uppercase font-bold">
                      {post.tags.map((tag) => (
                          <span key={tag.id}>{tag.name}</span>
                        ))}
                      </p>
                      <h4 className="text-white font-medium text-large">
                      {post.title}
                      </h4>
                    </CardHeader>
                    <Image
                      removeWrapper
                      alt="Card background"
                      className="z-0 w-full h-full object-cover"
                      src={post.feature_image}
                    />
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
