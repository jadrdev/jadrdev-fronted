"use client";

import AboutMe from "@/components/aboutme/aboutme";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header";
import Projects from "@/components/projects/projects";
import Experience from "@/components/works/works";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function Home() {
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
      <Header></Header>
      <main className="max-w-5xl mx-auto pt-5 pb-40">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Experience></Experience>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Últimos artículos
        </h2>
        {posts.length > 0 ? (
          <div className="flex flex-col items-center justify-center w-full py-10">
            <div className="flex flex-col md:flex-row md:space-x-4">
              {" "}
              {/* Cambiado a flex-col para móvil y flex-row para pantallas medianas y grandes */}
              {posts.map((post) => (
                <div key={post.id} className="mb-4 md:w-1/3">
                  {" "}
                  {/* Establecer el ancho de la tarjeta en un tercio de la pantalla en dispositivos medianos y grandes */}
                  <Link href={`/blog/${post.slug}`} className="block"  passHref>
                    <Card
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
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}
