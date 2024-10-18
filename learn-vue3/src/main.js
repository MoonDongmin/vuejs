import { createApp } from 'vue';
import App from '@/App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCard from '@/components/PostItem.vue';

const app = createApp(App);

// app.component('AppCard', AppCard); // 전역으로 컴포넌트 등록

app.provide('app-message', 'app message 입니다');
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg');
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
