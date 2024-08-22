import {VNode} from './types/index.js';

export function patch(newNode: VNode, originalNode: VNode) {
  if (newNode.tag !== originalNode.tag) {
    originalNode.tag = newNode.tag;
  }

  for (const key in originalNode.attrs) {
    if (newNode.attrs[key] === undefined) {
      delete originalNode.attrs[key];
    } else if (originalNode.attrs[key] !== newNode.attrs[key]) {
      originalNode.attrs[key] = newNode.attrs[key];
    }
  }

  return originalNode;
}
