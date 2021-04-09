export class Article {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public body: string,
    public created_at: string,
    public updated_at: string,
  ) {}
  public getProps(): any {
    return {title: this.title, image: this.image, body: this.body}
  }
}
