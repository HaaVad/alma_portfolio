import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "./lib/utils";
import { getProjects } from "../../sanity/sanity-utils";


const projects = await getProjects();
projects.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();

});


console.log(projects[5])

export default function Home() {


  return (
    <main>
      <div className="pt-8 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="">
          {project.images && project.images.length > 0 && (            
          <Link 
            href={`/projects/${project.slug}`}             
            >
            <div className="relative h-72 w-80 lg:w-96 flex justify-center items-center">
            <Image
              src={getImageUrl(project.images[0])}
              alt={project.name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"              
              className="object-cover hover:opacity-60 z-30 hover:z-10 saturate-100 hover:saturate-50"
              priority={true}
            />
            <h2 className="z-20 text-center pointer-events-none">{project.name}</h2>
          </div>
          </Link>
          )}
        </div>
      ))}
      </div>

    </main>
  );
}



      {/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/215403086?h=71e190b2f4" width="1280" height="720" ></iframe> */}
      {/* <iframe width="864" height="486" src="https://www.youtube.com/embed/mqHVbK-T_6g" title="Hand On Off Tøyen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
