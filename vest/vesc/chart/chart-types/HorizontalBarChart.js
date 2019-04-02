
//port { HorizontalBar } from '../../../libs/vue//VueCharts/VueCharts.js'

import { HorizontalBar } from 'vue-chartjs'
import { chartMixin }    from './chartMixin'

export default {
  extends: HorizontalBar,
  mixins: [chartMixin],
}
