import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, 
  faPen, 
  faCode, 
  faBlog, 
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const iconMapping: { [key: string]: string } = {
    react: "devicon-react-original",
    reactNative: "devicon-react-original",
    typeScript: "devicon-typescript-plain",
    javaScript: "devicon-javascript-plain",
    node: "devicon-nodejs-plain",
    python: "devicon-python-plain",
    next: "devicon-nextjs-original",
    flutter: "devicon-flutter-plain",
    wordpress: "devicon-wordpress-plain",
    ionic: "devicon-ionic-original",
    ghost: "devicon-ghost-plain",
    gatsby: "devicon-gatsby-plain",
    strapi: "devicon-strapi-plain",
    git: "devicon-git-plain",
    mac: "devicon-apple-original",
    faNewspaper: "faNewspaper"
  };

export const Articles = () => {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await api.posts.browse({
          limit: 3,
          include: "tags,authors",
          filter: "tag:news, tag:ionic, tag: git, tag:react, tag:next, tag:wordpress, tag:ghost, tag:gatsby, tag:strapi, tag:python, tag:node, tag:javaScript, tag:typeScript, tag:flutter. tag: reflexion",
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
      <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post) => (
          <div key={post.id} className="group">
            <Link href={`/blog/${post.slug}`} className="block" passHref>
              <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Imagen */}
                <div className="aspect-video overflow-hidden">
                  <Image
                    removeWrapper
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={post.feature_image}
                  />
                </div>
    
                {/* Contenido */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag.id}
                        className="px-3 py-1 text-xs font-medium rounded-full 
                                 bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300"
                      >
                         {iconMapping[tag.name.toLowerCase()]?.startsWith('devicon') ? (
      <i className={`${iconMapping[tag.name.toLowerCase()]} text-lg  mr-2`}></i>
    ) : (
      <FontAwesomeIcon 
      icon={iconMapping[tag.name.toLowerCase()] as IconProp || faNewspaper} 
      className="text-lg mr-2" 
    />
  )}
    {tag.name}
                      </span>
                    ))}
                  </div>
    
                  {/* Título */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white 
                               group-hover:text-primary-600 dark:group-hover:text-primary-400 
                               transition-colors duration-300">
                    {post.title}
                  </h3>
    
                  {/* Metadata */}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.published_at}>
                      {new Date(post.published_at).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </article>
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
