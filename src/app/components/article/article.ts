export class Article {

  constructor(
    public id?: number,
    public title?: string,
    public body?: string,
    public desc?: string,
    public slug?: string,
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.desc = desc;
    this.slug = slug;
  }

}