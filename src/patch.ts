import {VNode} from './types/index.js';

export function patch(newNode: VNode, oldNode: VNode) {
  if (newNode.tag !== oldNode.tag) {
    // do something
  }

  for (const key in newNode.attrs) {
    // attrs could be update instead of delete or add
    if (oldNode.attrs[key] === undefined) {
      // add attributes
    } else if (newNode.attrs[key] !== oldNode.attrs[key]) {
      // update attributes
    } else {
      // delete attributes
    }
  }
}
