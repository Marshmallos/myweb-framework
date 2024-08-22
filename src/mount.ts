import {VNode} from './types/index.js';

export function mount(vnode: VNode, dom: HTMLElement | ParentNode) {
  const $el = document.createElement(vnode.tag);
  vnode.el = $el;

  for (const [k, v] of Object.entries(vnode.attrs)) {
    $el.setAttribute(k, v);
  }

  for (const child of vnode.children) {
    if (typeof child === 'string') {
      $el.textContent = child;
    } else {
      $el.appendChild(mount(child, vnode.el));
    }
  }
  dom.appendChild($el);
  return $el;
}
