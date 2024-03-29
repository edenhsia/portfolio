import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleHalfStroke,
  faEnvelope,
  faPhone,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faCircleHalfStroke,
  faEnvelope,
  faPhone,
  faLinkedin,
  faGithub,
  faCirclePlay,
  faLink
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
