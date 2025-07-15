import {mount} from './mount.js';
import {VNode} from './types/index.js';
import {unmount} from './unmount.js';

// Questions
// Why is it necessary to assign originalVNode HTMLElement to newVNode?
// - if originalVNode is unmounted all records are lost
// - this only happens if tags are different and it they are it should drop everything
// Why does VNode lose its html element when its not assigned from old to new vnode?

function patchAttributes(originalVNode: VNode, newVNode: VNode) {
  /**
   * Look through original vnode attributes and remove not existing attributes
   * in new vnode. Replaces any existing attributes of original vnode with new
   * vnode attributes
   */
  for (const [key, value] of Object.entries(originalVNode.attrs)) {
    if (newVNode.attrs[key] === undefined) {
      originalVNode.el?.removeAttribute(key);
    } else if (newVNode.attrs[key] !== value) {
      originalVNode.el?.setAttribute(key, newVNode.attrs[key]);
    }
  }

  /**
   * Add additional attributes found in new vnode
   */
  for (const [key, value] of Object.entries(newVNode.attrs)) {
    if (originalVNode.attrs[key] === undefined) {
      originalVNode.el?.setAttribute(key, value);
    }
  }
}

export function patch(originalVNode: VNode, newVNode: VNode) {
  if (originalVNode.el === undefined) {
    alert('No HTMLElement found');
    throw new Error('No HTMLElement found');
  }

  const originalVNodeParent = originalVNode.el.parentNode;
  newVNode.el = originalVNode.el;

  if (originalVNodeParent === null) {
    throw new Error('No parent node found');
  }

  /**
   * If tag is different don't keep original vdom and replace with new vdom.
   * Otherwise, patch attributes
   */
  if (newVNode.tag !== originalVNode.tag) {
    unmount(originalVNode);
    mount(newVNode, originalVNodeParent);
  } else {
    patchAttributes(originalVNode, newVNode);
  }

  /**
   * For each children in vdom, patch if its node else replace text content
   * Overwriting text content will erase all childrens
   */
  if (originalVNode.children !== newVNode.children) {
    const lgth = Math.ceil(
      (originalVNode.children.length + newVNode.children.length) / 2,
    );
    for (let i = 0; i < lgth; i++) {
      const child = originalVNode.children[i];
      const newChild = newVNode.children[i];
      if (child === undefined || newChild === undefined) return;
      if (typeof child === 'string' || typeof newChild === 'string') {
        if (typeof newChild === 'string' && child !== newChild) {
          originalVNode.el.textContent = newChild;
        }
      } else {
        patch(child, newChild);
      }
    }
  }
}
