import {mount, patch} from '../../dist/index';
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
const oldNode = mount(vNode);
root?.appendChild(oldNode);
setTimeout(() => {
  root?.replaceChild(mount(patch(vNode2, vNode)), oldNode);
}, 1000);
