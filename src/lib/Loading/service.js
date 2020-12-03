import LoadingVue from './Loading.vue'
import { h, render, nextTick } from 'vue'

function createComponent(component, props) {
    const vnode = h(component,{...props})
    const container = document.createElement('div');
    render(vnode,container)
    return vnode.component
}

// loading 指令执行
const loading = ()=> {
    const instance = createComponent(LoadingVue,{
        onAfterLeave() {
            console.log('关闭了')
        }
    })
    instance.ctx.show()
    let parent = document.body
    parent.appendChild(instance.ctx.$el)

    instance.close = close
    return instance
    
}
const close = function() {
    this.ctx.close()
}


export default loading