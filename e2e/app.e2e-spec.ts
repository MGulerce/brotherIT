import { TestcasePage } from './app.po';

describe('testcase App', () => {
  let page: TestcasePage;

  beforeEach(() => {
    page = new TestcasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
