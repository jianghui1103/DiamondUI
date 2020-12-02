import Loading from './Loading.vue'
import { h, render, nextTick } from 'vue'

function createComponent(component, props) {
    const vnode = h(component,{...props})
    const container = document.createElement('div');
    console.log(vnode)
    render(vnode,container)
    return vnode.component
}

function toggleLoading(el,binding) {
    if(binding.value) {
        nextTick(()=> {
            let parentEl = document.body
            el.instance.show();
            parentEl.appendChild(el.mask)
        })
    } else {
        el.instance.close();
        // parentEl.removeChild(el.mask)
    }
}

const loadingDirective = {
    // called when bound element's parent component is mounted
    mounted(el, binding, vnode) {
        const mask = createComponent(Loading,{
            onAfterLeave() {
                el.domVisible = false
                console.log(el.domVisible,'关闭了')
            }
        })
        el.instance = mask.ctx
        el.mask = mask.ctx.$el
        binding.value && toggleLoading(el, binding)
    },

    // called after the containing component's VNode and the VNodes of its children // have updated
    updated(el, binding) {
        if(binding.oldValue !== binding.value) {
            toggleLoading(el,binding)
        }
    },
   
}
export default {
    install(app) {
      // if (Vue.prototype.$isServer) return
      app.directive('loading', loadingDirective)
    }
  }
  
export const directive = loadingDirective
