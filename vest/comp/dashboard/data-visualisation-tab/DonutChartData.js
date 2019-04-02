
import { Store }  from '../../../vuex/store/Store.js'

let palette = Store.getters.palette

export default {
  labels: ['North America', 'South America', 'Australia'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.info, palette.warning, palette.primary],
    data: [3000, 6000, 1500],
  }],
}
