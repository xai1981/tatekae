import { TatekaePage } from './app.po';

describe('tatekae App', function() {
  let page: TatekaePage;

  beforeEach(() => {
    page = new TatekaePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
