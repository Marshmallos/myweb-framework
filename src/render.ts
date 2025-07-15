import {mount} from './mount';
import {patch} from './patch';
import {VNode} from './types/VNode.type';

let oldVNode: VNode | null = null;

export function render(newVNode: VNode) {
  // mount vdom on first start up and patch subsequent calls
  if (oldVNode === null) {
    const root = document.getElementById('root');
    if (root === null) return;
    mount(newVNode, root);
  } else {
    patch(oldVNode, newVNode);
  }
  // Update vnode to keep track latest changes
  oldVNode = newVNode;
}
