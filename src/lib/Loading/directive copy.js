import Loading from './Loading.vue'
import { h, render, nextTick } from 'vue'
function createComponent(Component, props, children) {
    const vnode = h(Component, { ...props }, children)
    const container = document.createElement('div')
    render(vnode, container)
    return vnode.component
}

function merge(target) {
    console.log(target)
    for (let i = 1, j = arguments.length; i < j; i++) {
      const source = arguments[i] || {}
      for (const prop in source) {
        if (Object.hasOwnProperty.call(source, prop)) {
          const value = source[prop]
          if (value !== undefined) {
            target[prop] = value
          }
        }
      }
    }
    console.log(target)
  
    return target
  }
  


const defaults = {
    target: null,
    body: false,
    fullscreen: true,
    lock: false,
    text: null,
    spinner: null,
  }
  
const toggleLoading = (el, binding) => {
    if (binding.value) {
      nextTick(() => {
        let parentEl = document.body
        if (!binding.modifiers.fullscreen) {
          parentEl = el
        }
        el.instance.show()
        parentEl.appendChild(el.mask)
      })
    } else {
        console.log(el.instance)
      el.instance.close()
    }
  }

const loadingDirective = {
    // Directive has a set of lifecycle hooks:
    // called before bound element's parent component is mounted
    beforeMount() {},
    // called when bound element's parent component is mounted
    mounted(el, binding, vnode) {
        const textExr = el.getAttribute('Diamond-loading-text')
        const spinnerExr = el.getAttribute('Diamond-loading-spinner')
        const vm = vnode.context

        const options = merge({}, defaults, {
        text: (vm && vm[textExr]) || textExr,
        spinner: (vm && vm[spinnerExr]) || spinnerExr,
        fullscreen: !!binding.modifiers.fullscreen
        })

        const mask = createComponent(Loading, {
            ...options,
            onAfterLeave() {
                el.domVisible = false
                console.log('关闭了')
            }
        })
        el.options = options
        el.instance = mask.ctx
        el.mask = mask.ctx.$el
        el.maskStyle = {}
        binding.value && toggleLoading(el, binding)
    },
    // called before the containing component's VNode is updated
    beforeUpdate() {},
    // called after the containing component's VNode and the VNodes of its children // have updated
    updated(el, binding) {
        console.log(el)
        if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding)
        }
    },
    // called before the bound element's parent component is unmounted
    beforeUnmount() {},
    // called when the bound element's parent component is unmounted
    unmounted() {}
}
export default {
    install(app) {
      // if (Vue.prototype.$isServer) return
      app.directive('loading', loadingDirective)
    }
  }
  
export const directive = loadingDirective
