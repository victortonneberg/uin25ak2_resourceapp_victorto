import resources from "../data/ressurser";
import PageTitle from "./PageTitle";
import "../assets/styles/resources.scss"

export default function Resources({category}) {
    //Variabel for å filtrere resources basert på category.
    const resourcesFilter = resources.filter(resource => resource.category === category);

    return (
            <article className="resources">
                {/*Viser tittel på side avhengig av hvilken category som er sendt med som prop.*/}
                <PageTitle title={category} />
                <ul>
                    {/*Bruker .map for å iterere gjennom de filtrerte ressursene.*/}
                    {resourcesFilter.map(resource => (
                        <li key={resource.title}> {/*Bruker resource.title som en unik key. Dette gjør at jeg slipper å bruke index. En "fallgruve" jeg ser her er at det kan skape problemer hvis man får 2 like titles i ressurser.js. */}
                            <a href={resource.url} target="_blank">{resource.title}</a> {/*Link og title som hentes fra resources.*/}
                        </li>
                    ))}
                </ul>
            </article>
    );
}
