import Page from '../pages/Page';

class App {
  private page = new Page();

  run() {
    this.page.render();
    this.page.lister();
  }
}

export default App;
