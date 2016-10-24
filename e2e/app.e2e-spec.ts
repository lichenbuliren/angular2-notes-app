import { Angular2NotesAppPage } from './app.po';

describe('angular2-notes-app App', function() {
  let page: Angular2NotesAppPage;

  beforeEach(() => {
    page = new Angular2NotesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
