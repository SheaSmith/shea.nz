import { Project } from "./project";

export class ProjectSection {
    header: String[];
    contents: Project[];

    constructor(get: any) {
        this.header = get.header;
        this.contents = get.contents.map(p => new Project(p));
    }
}