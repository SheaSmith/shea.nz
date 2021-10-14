import { Link } from "./link";
import { ProjectSection } from "./section-project";

export class Home {
    headline: String[];
    links: Link[];
    projects: ProjectSection;

    constructor(get: any) {
        this.headline = get.headline;
        this.links = get.links.map(l => new Link(l));
        this.projects = new ProjectSection(get.projects);
    }
}