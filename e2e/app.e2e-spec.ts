import { AngdemoGithubDeployPage } from './app.po';

describe('angdemo-github-deploy App', function() {
  let page: AngdemoGithubDeployPage;

  beforeEach(() => {
    page = new AngdemoGithubDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
