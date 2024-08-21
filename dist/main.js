function mount(el) {
    const $el = document.createElement(el.tag);
    for (const [k, v] of Object.entries(el.attrs)) {
        $el.setAttribute(k, v);
    }
    for (const child of el.children) {
        if (typeof child === 'string') {
            $el.textContent = child;
        }
        else {
            $el.appendChild(mount(child));
        }
    }
    return $el;
}
const root = document.getElementById('root');
const vNode = {
    tag: 'div',
    attrs: { id: 1 },
    children: [
        'Hello World',
        { tag: 'p', attrs: { id: 2 }, children: ['Hello World'] },
    ],
};
root?.appendChild(mount(vNode));
export {};
//# sourceMappingURL=main.js.map