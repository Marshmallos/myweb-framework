import {mount} from '../../dist/index';
const root = document.getElementById('root');

const vNode = {
  tag: 'div',
  attrs: {id: '1', class: 'myDiv'},
  children: [
    'Hello World',
    {tag: 'p', attrs: {id: '2'}, children: ['Hello World']},
  ],
};
const vNode2 = {
  tag: 'div',
  attrs: {id: '3'},
  children: ['Hello', {tag: 'p', attrs: {id: '4'}, children: ['Hello World']}],
};

if (root !== null) {
  mount(vNode, root);

  setTimeout(() => {
    mount(vNode2, root);
  }, 5000);
}
