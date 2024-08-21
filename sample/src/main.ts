import {mount} from '../../dist/index';

const root = document.getElementById('root');

const vNode = {
  tag: 'div',
  attrs: {id: 1},
  children: [
    'Hello World',
    {tag: 'p', attrs: {id: 2}, children: ['Hello World']},
  ],
};
const vNode2 = {
  tag: 'div',
  attrs: {id: 1},
  children: ['Mine', {tag: 'p', attrs: {id: 2}, children: ['Hello World']}],
};
const oldNode = mount(vNode);
root?.appendChild(oldNode);
setTimeout(() => {
  root?.replaceChild(mount(vNode2), oldNode);
}, 1000);
