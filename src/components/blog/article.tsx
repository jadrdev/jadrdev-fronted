import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const Articles = () => {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await api.posts.browse({
          limit: 4,
          include: "tags,authors",
          filter: "tag:news",
          order: "published_at desc"
        });
        setPost(postsData);
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
      {post.length > 0 ? (
  <div className="flex flex-col items-center justify-center w-full py-10">
    <div className="flex flex-col md:flex-row md:space-x-4 gap-6">
      {post.map((post) => (
        <div key={post.id} className="md:w-1/3 p-4">
          <Link href={`/blog/${post.slug}`} className="block transform transition duration-300 hover:scale-105" passHref>
            <Card className="col-span-12 sm:col-span-4 h-[300px] overflow-hidden relative group">
            <CardHeader className="absolute z-10 top-0 left-0 right-0 p-4 flex flex-col gap-3 bg-gradient-to-b from-black/70 to-transparent">
  <div className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-2">
      {post.tags.map((tag) => (
        <span 
          key={tag.id}
          className="text-xs bg-primary/20 backdrop-blur-sm text-white px-2 py-1 rounded-full hover:bg-primary/40 transition-colors"
        >
          {tag.name}
        </span>
      ))}
    </div>
    <h4 className="text-white font-bold text-xl line-clamp-2 hover:text-primary transition-colors">
      {post.title}
    </h4>
  </div>
</CardHeader>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]" />
              <Image
                removeWrapper
                alt={post.title}
                className="z-0 w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                src={post.feature_image}
              />
            </Card>
          </Link>
        </div>
      ))}
    </div>
  </div>
) : (
  <p className="text-center text-white/60">Cargando...</p>
)}
    </>
  );
};
