import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCircleHalfStroke)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
