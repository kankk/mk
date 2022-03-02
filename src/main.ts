import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';
import MIcon from '@components/MIcon.vue';

const app = createApp(App);

app.component('MIcon', MIcon);

app.use(store);
app.use(router);

app.mount('#app');

export default app;