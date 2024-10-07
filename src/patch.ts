import {mount} from './mount.js';
import {VNode} from './types/index.js';
import {unmount} from './unmount.js';

function patchAttributes(originalVNode: VNode, newVNode: VNode) {
  /**
   * Look thourgh original vnode attributes and remove not existing attributes
   * in new vnode. Replaces any existing attributes of original vnode with new
   * vnode attributes
   */
  for (const [key, value] of Object.entries(originalVNode.attrs)) {
    if (newVNode.attrs[key] === undefined) {
      newVNode.el?.removeAttribute(key);
    } else if (newVNode.attrs[key] !== value) {
      newVNode.el?.setAttribute(key, newVNode.attrs[key]);
    }
  }

  /**
   * Add additional attributes found in new vnode
   */
  for (const [key, value] of Object.entries(newVNode.attrs)) {
    if (originalVNode.attrs[key] == undefined) {
      newVNode.el?.setAttribute(key, value);
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

  console.log(originalVNode.el.parentNode);
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
    originalVNode.children.forEach((child, index) => {
      const newChild = newVNode.children[index];
      if (
        typeof child !== 'string' &&
        typeof newChild !== 'string' &&
        newChild !== undefined
      ) {
        patch(child, newChild);
      } else {
        // newVNode.el.textContent = newChild;
      }
    });
  }
}
