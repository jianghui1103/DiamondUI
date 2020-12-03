import { h, render } from 'vue'
const createComponent =(component, props)=> {
    const vnode = h(component,{...props})
    const container = document.createElement('div');
    console.log(vnode)
    render(vnode,container)
    return vnode.component
}
export default createComponent