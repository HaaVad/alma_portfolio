import Image from "next/image";
import Link from "next/link";

import { projects } from "../../testdata/projects";

export default function Home() {
  return (
    <div>
      Work in progress
      {/* <div className="grid grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="">
          {project.images[0] && (
            <Link 
            href={`/projects/${project.slug}`}             
            >
            <div className="relative h-72 w-72">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"              
              className="object-cover hover:opacity-60 z-30 hover:z-10 saturate-100 hover:saturate-50"
              priority={true}
            />
            <h2 className="absolute top-20 px-6 z-20 pointer-events-none">{project.title}</h2>
          </div>
          </Link>
          )}
        </div>
      ))}
      </div> */}
    </div>
  );
}
