import { LibraryBooksManagementAngularjsPage } from './app.po';

describe('library-books-management-angularjs App', () => {
  let page: LibraryBooksManagementAngularjsPage;

  beforeEach(() => {
    page = new LibraryBooksManagementAngularjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
