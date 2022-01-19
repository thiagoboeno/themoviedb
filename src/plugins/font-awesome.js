import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faPlus,
  faSearch
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
