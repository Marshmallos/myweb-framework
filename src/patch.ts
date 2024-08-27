import {VNode} from './types/index.js';

export function patch(newNode: VNode, originalNode: VNode) {
  if (newNode.tag !== originalNode.tag) {
    // diffrent tag unmount
  }
}
