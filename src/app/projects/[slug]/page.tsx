import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getImageUrl } from "@/app/lib/utils";
import { getProject } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import Picture from "@/app/components/picture";

  type Props = {
    params: {slug: string};
  };


export default async function Page({params}: Props) {
  const project = await getProject(params.slug);

console.log(getImageUrl(project.images[0]))
console.log(project.images)
  return (
    <main className="container">


      <div>
      <div className="relative h-fit mb-16 w-full flex justify-center items-end">
            <Image
              src={getImageUrl(project.images[0])}
              alt={project.name}
              fill={true}
              sizes="(min-width: 1540px) 1536px, (min-width: 1280px) 1280px, (min-width: 1040px) 1024px, (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"              
              className="object-cover"
              priority={true}
            />
        <h2 className="z-40 m-4 text-white bottom-0 drop-shadow-md" >{project.name}</h2>

      </div>

    <div className="mx-4 md:ml-20 my-4 grid grid-cols-1 md:grid-cols-2 gap-x-10">
      <div>
    {project.description.slice(1).map((project, index) => (
        <div key={index} className="pb-6">
        <PortableText value={project} />
        </div>
      ))}
      </div>
      <div className="pb-6 font-extralight">
      <PortableText value={project.description[0]} />

      <Image
              src={getImageUrl(project.images[0])}
              alt={project.name}
              height={800}
              width={800}
              priority={true}
              className="pt-10"
            />
      </div>
    </div>
      <div className="m-4 md:m-8 pt-14 my-4 grid grid-cols-1 md:grid-cols-3 gap-10">
    {project.images.slice(1).map((image, index) => (
      <div key={index}>
        <Picture image={getImageUrl(image)}></Picture>
      </div>
        ))}
      </div>

      <div className="w-full flex justify-center ">
      {project.videolink ? (
        <div className="">
          <iframe
            className=""
            src={project.videolink}
            title="Embedded Video"
            width="640" 
            height="360"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
    </div>
    </div>
    </main>
  );
}

