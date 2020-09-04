import Dialog from './Dialog.vue';
import { createApp,h } from 'vue';
export const openDialog = (options) => {
    const { title,content,closeOnClickOverlay,ok,cancel } = options;
    const div = document.createElement('div');
    const close = ()=>{
        app.unmount(div);
        div.remove();
    }
    const app = createApp({
        render(){
            return h(
                Dialog, 
                {
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        if( newVisible === false) {
                            close();
                        }
                    },
                    closeOnClickOverlay,
                    ok,cancel
                },
                {
                    title,content
                }
            )
        }
    });
    app.mount(div);
};