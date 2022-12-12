import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    // ! https://newsapi-redirect-production.up.railway.app/ - DEPLOY PROXY
    super('https://newsapi.org/v2/', {
      apiKey: 'c426a880a96e48bda9f1d9faa27cb188',
    });
  }
}

export default AppLoader;
