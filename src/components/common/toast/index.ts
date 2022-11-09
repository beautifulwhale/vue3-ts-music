import { createVNode, render } from 'vue';

import Toast from './toast.vue';

// toast容器
const div = document.createElement('div');
div.setAttribute('class', 'toast-wrapper');
document.body.appendChild(div);

let timer: any;
type title = string;
interface ToastType {
    title: title,
    duration?: number
}
type unionToast = title | ToastType;

export default (options: unionToast) => {
    let title, duration;
    if (typeof options === 'string') {
        title = options || '恭喜发财';
        duration = 2000;
    } else {
        title = options.title || '恭喜发财';
        duration = options.duration || 2000;
    }

    const vnode = createVNode(Toast, { title });
    render(vnode, div);
    clearTimeout(timer);
    timer = setTimeout(() => {
        render(null, div);
    }, duration);
}