import Picture from "../components/picture";
import { getProjects } from "../../../sanity/sanity-utils";
import { getImageUrl } from "../lib/utils";


const projects = await getProjects();

const test ="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5yt3vrht%2Fproduction%2F705b153a030d85c1becdfe16caf1c7cb9645bdbc-1123x1404.jpg&w=1920&q=75"


export default function Playground() {


return(
    <main>
        <Picture image={getImageUrl(projects[0].images[0])}></Picture>
    </main>

)
}