export class Work {
    title: String;
    url: String;

    constructor(get: any) {
        this.title = get.title;
        this.url = get.url;
    }
}