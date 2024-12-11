import React from "react";
import ProjectCard from "../projectsCard/projectCard";

export default function Projects() {
 const projects = [
    {
      title: "App de Gestión de Tareas",
      type: "Personal",
      description: "Aplicación para gestión de proyectos y seguimiento de tareas",
      technologies: [
        { name: "Flutter", icon: "" }
      ],
      githubUrl: "https://github.com/jadrdev/todoAppFlutter",
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Una selección de proyectos personales y profesionales que he desarrollado
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
  );
}
