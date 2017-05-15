export class Comic {
  public id: number;
  public title: string;
  public coverUrl: string;
  public publicationDate: string;
  public writtenBy: string[];
  public publisher: string;
  public genre: string;
  public excerpt: string;

  constructor(
    id: number,
    title: string,
    coverUrl: string,
    publicationDate: string,
    writtenBy: string[],
    publisher: string,
    genre: string,
    excerpt: string) {
      this.id = id;
      this.title = title;
      this.coverUrl = coverUrl;
      this.publicationDate = publicationDate;
      this.writtenBy = writtenBy;
      this.publisher = publisher;
      this.genre = genre;
      this.excerpt = excerpt;
    }
}
