import './lib/diamond.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';
import Loading  from './lib/Loading/index'
import * as Diamond from './utils/entry'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown",Markdown)
app.use(Diamond)
app.use(Loading.directive);