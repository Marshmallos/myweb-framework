import {VNode} from './types/VNode.type';

/**
 * Removes the HTMLElement from the DOM
 */

export function unmount(vnode: VNode) {
  vnode.el?.remove();
}
