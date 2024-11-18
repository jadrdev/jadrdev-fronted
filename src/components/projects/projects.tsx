"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Strings } from "@/constants/string";
import { api } from "@/api/api";
import { Post } from "@/domain/interfaces/PostInterface";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";

export default function Projects() {
  const [projects, setProjects] = useState<Post[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const postProjects = await api.posts.browse({
          limit: 10,
          include: "tags,authors",
          filter: "tag:projects",
        });
        setProjects(postProjects);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto h-28 mb-6">
        <h2 className="text-center font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-5xl">
          {Strings.Project}
        </h2>
        <h4 className="font-header text-xl font-medium py-2  sm:text-2xl text-center lg:text-3xl">
          {Strings.ProjectDescription}
        </h4>
      </div>
      {/* Grid starts here */}
      {projects.length > 0 ? (
        <div className="dark:bg-gray-900">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-18 pb-215">
            {/* Single card */}
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
              <div key={project.id} className="md:w-1/1 p-4">
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-auto"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-black/60 uppercase font-bold">
                    {project.tags.map((tag, index) => (
                      <span key={tag.id}>
                        {tag.name}
                        {index < project.tags.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={project.feature_image}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      {/* Grid ends here */}
      {/* <div className="mx-auto pt-8 text-center">
        <Link href="projects">
          <button className="text-xl bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Otros proyectos
          </button>
        </Link>
      </div> */}
    </section>
  );
}
