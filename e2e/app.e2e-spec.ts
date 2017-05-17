import { PccCoopPage } from './app.po';

describe('pcc-coop App', () => {
  let page: PccCoopPage;

  beforeEach(() => {
    page = new PccCoopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
