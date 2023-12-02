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
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        {post.tags.map((tag) => (
                          <span key={tag.id}>{tag.name}</span>
                        ))}
                      </p>
                      <small className="text-default-500">
                        {post.reading_time} min.
                      </small>
                      <h4 className="font-bold text-large">{post.title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={post.feature_image}
                        width={670}
                      />
                    </CardBody>
                  </Card>
                  {/* <Card
                      renderImage={() => (
                        <img
                          src={post.feature_image}
                          alt={post.title}
                          className="w-full h-auto"
                        />
                      )}
                    >
                      <span className="text-sm text-gray-600">
                        {new Date(post.published_at).toLocaleDateString()}
                      </span>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                        {post.title}
                      </h5>
                      <p>{post.excerpt}</p>
                    </Card> */}
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
