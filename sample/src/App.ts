import {useState} from '../../dist';

export default function App() {
  const [name, setName] = useState<string>('');

  setTimeout(() => {
    setName('Hello');
  }, 1000);
  return {
    tag: 'div',
    attrs: {id: '1'},
    children: [
      {tag: 'p', attrs: {}, children: ['Hello World']},
      {tag: 'div', attrs: {}, children: [name]},
    ],
  };
}
