import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'

import Element from 'element-ui'

Vue.use( Element, { locale },{
  theme: {
    primary: '#9ad8d3',
    secondary: '#9ad8d3',
    accent: '#2980b9',
    error: '#e74c3c',
    action: '#23DB2A'
  }})

// import {
//   Select,
//   Button,
//   // Divider
// } from 'element-ui'

// Vue.component(Select.name, Select)
// Vue.component(Button.name, Button)
// Vue.component(Divider.name, Divider)

// export default () => {
//   Vue.use( Element, { locale },{
//     theme: {
//       primary: '#9ad8d3',
//       secondary: '#9ad8d3',
//       accent: '#2980b9',
//       error: '#e74c3c',
//       action: '#23DB2A'
//     }})
// }
