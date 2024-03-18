import { groq} from "next-sanity";
import { client } from "./lib/client";
import { Project } from "../types/project";


    async function getProjects(): Promise<Project[]> {
    try {
  
      const query = groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        date,
        link,
        videolink,
        description,
        images[],
      }`;
  
      const projects = await client.fetch(query, 
        {},
        {next: {
          revalidate: 0 // look for updates to revalidate cache
        }}
      );

  
      if (!projects || !Array.isArray(projects)) {
        throw new Error('Invalid or empty response from Sanity.io');
      }
  
      return projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }

    async function getProject(slug: string): Promise<Project> {
    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            date,
            link,
            videolink,
            description,
            images[],
        }`,
        { slug }
    )
  }
  
  export {getProjects, getProject};