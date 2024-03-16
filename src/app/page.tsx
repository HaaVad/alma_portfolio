
import { getProjects } from "../../sanity/sanity-utils";
import ProjectGrid from "./components/projectGrid";

const projects = await getProjects();
projects.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function Home() {
  

  return (
    <main>
      <ProjectGrid projects={projects} />
    </main>
  );
}

