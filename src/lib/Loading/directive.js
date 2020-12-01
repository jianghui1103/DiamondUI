import Loading from './Loading.vue'
import { h } from 'vue'
function createComponent(Component,props) {
    const vnode = h(Component,{...props});
    console.log(vnode)
}

const loadingDirective = {
    // Directive has a set of lifecycle hooks:
    // called before bound element's parent component is mounted
    beforeMount() {},
    // called when bound element's parent component is mounted
    mounted() {
        const options = {
            
        }
        const mask = createComponent(Loading, {
            ...options,
            onAfterLeave() {
                console.log('关闭')
            }
        })
    },
    // called before the containing component's VNode is updated
    beforeUpdate() {},
    // called after the containing component's VNode and the VNodes of its children // have updated
    updated() {},
    // called before the bound element's parent component is unmounted
    beforeUnmount() {},
    // called when the bound element's parent component is unmounted
    unmounted() {}
}
export const directive = loadingDirective
