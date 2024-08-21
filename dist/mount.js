export function mount(el) {
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
//# sourceMappingURL=mount.js.map