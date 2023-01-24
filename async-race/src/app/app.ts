import Page from '../pages/Page';

class App {
  private page = new Page();

  async run() {
    await this.page.render();
    await this.page.listen();
  }
}

export default App;
