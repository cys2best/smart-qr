import { createApp } from 'vue'
import App from './App.vue'
// import VueTailwind from 'vue-tailwind'
import './index.css'

// import {
//     TInput,
//     TTextarea,
//     TSelect,
//     TDropdown,
//   } from 'vue-tailwind/dist/components';

// const vueTailwindSettings = {

// 't-input': {
//     component: TInput
// },
// 't-textarea': {
//     component: TTextarea,
// },
// }
const app = createApp(App);

// app.use(VueTailwind, vueTailwindSettings)

app.mount('#app')
