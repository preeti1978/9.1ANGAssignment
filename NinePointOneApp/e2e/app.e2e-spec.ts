import { NinePointOneAppPage } from './app.po';

describe('nine-point-one-app App', function() {
  let page: NinePointOneAppPage;

  beforeEach(() => {
    page = new NinePointOneAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
