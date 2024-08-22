export type VNode = {
  tag: string;
  attrs: Record<string, string>;
  children: Array<string | VNode>;
  el?: HTMLElement;
};
