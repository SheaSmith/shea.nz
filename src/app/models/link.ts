export class Link {
    id: String;
    title: String;
    url: String;

    constructor(get: any) {
        this.id = get.id;
        this.title = get.title;
        this.url = get.url;
    }
}