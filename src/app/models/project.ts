import { Link } from "./link";
import { Work } from "./work";

export class Project {
    id: String;
    style: 'large' | 'small';
    title: String;
    content: String[];
    links: Link[];
    work: Work;

    constructor(get: any) {
        this.id = get.id;
        this.style = get.style;
        this.title = get.title;
        this.content = get.content;
        this.links = get.links.map(l => new Link(l));
        
        if (get.work != null) {
            this.work = new Work(get.work);
        }
    }
}