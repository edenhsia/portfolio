import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleHalfStroke,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCircleHalfStroke, faEnvelope, faPhone, faLinkedin, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
