import {patch, useState} from '../../dist';
let ogApp = App();
export default function App() {
  const [name, setName] = useState<string>('');

  // Cant patch here as App does not have element unless its mounted at main.ts
  // Figure out how to patch vdom to update state
  function changeName() {
    setName('Hello');
    patch(ogApp, App());
  }

  // Used for simulating a button onclick event to update state
  // setTimeout(() => {
  //   console.log('triggered');
  //   changeName();
  // }, 5000);

  return {
    tag: 'div',
    attrs: {id: '1'},
    children: [
      {tag: 'p', attrs: {}, children: ['Hello World']},
      {tag: 'div', attrs: {}, children: [name]},
    ],
  };
}
