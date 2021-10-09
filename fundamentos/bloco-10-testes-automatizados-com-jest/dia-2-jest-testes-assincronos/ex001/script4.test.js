const getRepos = require('./script4');

describe('Dada a URL "https://api.github.com/orgs/tryber/repos",', () => {
  it('verifique que os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram nessa lista.', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
