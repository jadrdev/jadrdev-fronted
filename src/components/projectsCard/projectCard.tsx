import Image from 'next/image';

interface Technology {
  name: string;
  icon: string;
}

const techIcons: { [key: string]: string } = {
    React: "devicon-react-original",
    TypeScript: "devicon-typescript-plain",
    JavaScript: "devicon-javascript-plain",
    Node: "devicon-nodejs-plain",
    Python: "devicon-python-plain",
    Next: "devicon-nextjs-original",
    Flutter: "devicon-flutter-plain",
    Wordpress: "devicon-wordpress-plain",
    // Añade más según necesites
  };

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string; // Opcional
}

export default function ProjectCard({ title, type, description, technologies, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8 max-w-md hover:shadow-2xl transition-shadow duration-300">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
      <span className="bg-blue-700 text-blue-100 text-xs font-semibold uppercase px-3 py-1 rounded-lg shadow-sm">
        {type}
      </span>
    </div>
  
    {/* Description */}
    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
      {description.length > 100
        ? `${description.slice(0, 100)}...`
        : description}
    </p>
  
    {/* Technologies */}
    <div className="flex flex-wrap gap-3 mt-6">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="flex items-center bg-gray-800 px-4 py-2 text-sm rounded-full shadow-sm hover:bg-gray-700 transition-all"
        >
          <i className={`${techIcons[tech.name]} text-lg text-blue-400 mr-2`}></i>
          {tech.name}
        </span>
      ))}
    </div>
  
    {/* GitHub Link */}
    {githubUrl && (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
      >
        <i className="devicon-github-original text-2xl"></i>
        <span>Ver en GitHub</span>
      </a>
    )}
  </div>
  
  );
}