import React from "react";
import ProjectCard from "../projectsCard/projectCard";

export default function Projects() {
 const projects = [
    {
      title: "E-commerce Dashboard",
      type: "Personal",
      description: "Dashboard para gestión de ventas online con análisis en tiempo real",
      technologies: [
        { name: "Next", icon: "" },
        { name: "TypeScript", icon: "" },
        { name: "Python", icon: "" }
      ]
    },
    {
      title: "App de Gestión de Tareas",
      type: "Freelance",
      description: "Aplicación para gestión de proyectos y seguimiento de tareas",
      technologies: [
        { name: "React", icon: "" },
        { name: "Node", icon: "" },
        { name: "Flutter", icon: "" }
      ]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
