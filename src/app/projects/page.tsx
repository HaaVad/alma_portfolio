import { projects } from "../../../testdata/projects";
import Image from "next/image";
import Link from "next/link";
// import { PortableText } from "@portabletext/react";



export default function Page() {

const project = projects[0]
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image 
          src={project.images[0]} 
          alt={project.title} 
          width={1200}
          height={1200}
          priority={true}
          className="" />
      {/* <PortableText value= {project.description} /> */}
      <p>{project.description}</p> 
    </div>
  );
}
