import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';
import { PetList } from './components/petlist.js';
console.log('Loaded index');
new Header('body');
new Main('body');
new PetList('main');
new Footer('body');
