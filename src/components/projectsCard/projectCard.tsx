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
    flutter: "devicon-flutter-plain",
    // Añade más según necesites
  };

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  technologies: Technology[];
}

export default function ProjectCard({ title, type, description, technologies }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 max-w-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">{type}</span>
      </div>
      
      <p className="mt-4 text-gray-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="flex items-center bg-gray-800 px-3 py-1 text-sm rounded-full"
          >
            <i className={`${techIcons[tech.name]} text-xl mr-2`}></i>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}