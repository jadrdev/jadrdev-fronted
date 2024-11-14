import { Metadata } from "next";
import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Menu from "@/components/header/menu";
import Image from "next/image";
import Avatar from "../../../img/avatar.webp";

type PageProps = {
  params: {
    slug: string;
  };
};

// Genera metadatos específicos del artículo
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const postData = await api.posts.read({ slug: params.slug });

  if (!postData) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: `${postData.title} | JadrDev - Joshua A. Díaz Robayna`,
    description: postData.excerpt,
    openGraph: {
      type: "article",
      title: postData.title,
      description: postData.excerpt,
      url: `https://jadrdev.com/blog/${params.slug}`,
      siteName: "JadrDev",
      images: [
        {
          url: postData.feature_image,
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.excerpt,
      creator: "@jadrdev",
      images: [
        {
          url: postData.feature_image,
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const postData = await api.posts.read({ slug: params.slug });

  if (!postData) return <div>Loading...</div>;

  return (
    <>
      <Menu />
      <main className="flex flex-col justify-center pt-32 pb-40">
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <small>
            <a href="/">👈 Back to home</a>
          </small>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-4">
            <img src={postData.feature_image} alt={postData.title} className="w-full" />
          </div>
          <h4 className="font-bold text-5xl md:text-5xl tracking-tight mb-4">
            {postData.title}
          </h4>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
            <div className="flex items-center">
              <Image src={Avatar} alt="joshua-avatar" width={24} height={24} className="rounded-full" />
              <p className="text-sm ml-2 text-gray-500">
                {"Joshua A. Díaz Robayna / "}
                <span className="text-gray-600">
                  {postData.reading_time} min read
                </span>
                {" / "}
                <span className="text-gray-600">
                  {new Date(postData.published_at as string).toLocaleDateString()}
                </span>
              </p>
            </div>
          </div>
          <div className="prose dark:prose-dark max-w-none w-full mt-5 mb-8">
            <div dangerouslySetInnerHTML={{ __html: postData.html as string }} />
          </div>
        </article>
      </main>
    </>
  );
}
