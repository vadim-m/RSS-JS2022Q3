import Loader from './loader';
import { baseLink, apiKey } from '../config'

class AppLoader extends Loader {
  constructor() {
    super(baseLink, {
      apiKey
    });
  }
}

export default AppLoader;
