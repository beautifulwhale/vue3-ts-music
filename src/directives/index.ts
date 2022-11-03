import { debounce } from 'lodash';
import { App, DirectiveBinding } from 'vue';

interface bindValue {
    func: () => void,
    wait: number,
    immediate: boolean
}

export default (app: App<HTMLElement>) => {
    app.directive('debounce', {
        mounted(el: HTMLElement, binding: DirectiveBinding<bindValue>) {
            const { func, wait } = binding.value;
            el.addEventListener('click', () => {
                debounce(func, wait)
            })
        },
        unmounted(el: HTMLElement, binding: DirectiveBinding<bindValue>) {
            const { func, wait } = binding.value;
            el.removeEventListener('click', () => {
                debounce(func, wait)
            })
        }
    })
}