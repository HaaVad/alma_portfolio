
import { getProjects } from "../../sanity/sanity-utils";
import ProjectGrid from "./components/projectGrid";

export const revalidate = 0;

async function Home() {
  const projects = await getProjects();
  projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });


  return (
    <main>
      <ProjectGrid projects={projects} />
    </main>
  );
}

export default Home;
