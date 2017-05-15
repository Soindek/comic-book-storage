import { ComicBooksStoragePage } from './app.po';

describe('comic-books-storage App', () => {
  let page: ComicBooksStoragePage;

  beforeEach(() => {
    page = new ComicBooksStoragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
