import Vue from 'vue'
import format from '@/helpers/currency'

Vue.filter('money', function (value, currency) {
  return format(value, currency)
})
