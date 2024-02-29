import Image from "next/image";
import Link from "next/link";

import { projects } from "../../testdata/projects";

export default function Home() {
  return (
    <main>A work in progress
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="">
          {project.images[0] && (
            <Link 
            href={`/projects/${project.slug}`}             
            >
            <div className="relative h-72 w-80 lg:w-96">
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
      </div>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/215403086?h=71e190b2f4" width="640" height="360" ></iframe>
      <iframe width="864" height="486" src="https://www.youtube.com/embed/mqHVbK-T_6g" title="Hand On Off Tøyen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}

    </main>
  );
}
