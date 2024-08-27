import {VNode} from './types/VNode.type';

/**
 * Removes the element from the domsdhlgk'  sahgkls
 */

export function unmount(vnode: VNode) {
  vnode.el?.remove();
}
