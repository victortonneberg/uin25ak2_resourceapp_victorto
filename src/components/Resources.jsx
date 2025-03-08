import { useParams } from "react-router-dom";
import resources from "../data/ressurser";
import PageTitle from "./PageTitle";
import "../assets/styles/resources.scss"

export default function Resources() {
    const { category } = useParams();
    const resourcesFilter = resources.filter(resource => resource.category === category);

    return (
            <article className="resources">
                <PageTitle title={category} />
                {resourcesFilter.map(resource => (
                    <li key={resource.title}>
                        <h3>{resource.title}</h3>
                        <a href={resource.url} target="_blank">{resource.url}</a>
                    </li>
                ))}
            </article>
    );
}
