import {mount} from '../../dist';
import App from './App';

// App is mounted on to root in this file
// How to patch node if changes are made?
// Track node globally?

export default function main() {
  const root = document.getElementById('root');
  if (root === null) {
    return;
  }
  // Execute mount on first startup and patch every subsequent loads?
  return mount(App(), root);
}

main();
