import { ComicBookStoragePage } from './app.po';

describe('comic-book-storage App', () => {
  let page: ComicBookStoragePage;

  beforeEach(() => {
    page = new ComicBookStoragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
