import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Markdown from './components/Markdown.vue'
import LinkDemo from './components/LinkDemo.vue'
import RadioDemo from './components/RadioDemo.vue'
import CheckboxDemo from './components/CheckboxDemo.vue'
import LoadingDemo from './components/LoadingDemo.vue'
import InputDemo from './components/InputDemo/InputDemo.vue'
import InputNumDemo from './components/InputNumDemo/InputNumDemo.vue'
import SelectDemo from './components/SelectDemo/SelectDemo.vue'
import TableDemo from './components/TableDemo/TableDemo.vue'
import SliderDemo from './components/SliderDemo/SliderDemo.vue'
import CascaderDemo from './components/CascaderDemo/CascaderDemo.vue'
import { h } from 'vue'
const md = filename =>  h(Markdown,{path: `../markdown/${filename}.md`,key: filename})

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children:[
            {path: '', redirect: '/doc/intro'},
            {path: 'intro', component: md('intro')},
            {path: 'get-started', component: md('get-started')},
            {path: 'install', component:  md('install')},
            {path: 'switch', component: SwitchDemo},
            {path: 'button', component: ButtonDemo},
            {path: 'dialog', component: DialogDemo},
            {path: 'tabs', component: TabsDemo},
            {path: 'link', component: LinkDemo},
            {path: 'radio', component: RadioDemo},
            {path: 'checkbox', component: CheckboxDemo},
            {path: 'loading', component: LoadingDemo},
            {path: 'input', component: InputDemo},
            {path: 'inputNumber', component: InputNumDemo},
            {path: 'select', component: SelectDemo},
            {path: 'table', component: TableDemo},
            {path: 'slider', component: SliderDemo},
            {path: 'cascader', component: CascaderDemo},
        ]},
    ]
})
// 路由守卫
router.afterEach(()=> {
    console.log('路由切换了')
})