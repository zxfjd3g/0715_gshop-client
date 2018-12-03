import Vue from 'vue'
import moment from 'moment'
/*
自定义过滤器: 对需要显示的数据进行特定处理后再显示
 */
Vue.filter('date-format', function (value, format='YYYY-MM-DD HH:mm:ss') { // 需要处理的数据(表达式的值)
  return moment(value).format(format)
})

Vue.filter('date-format2', function (value, format) { // 需要处理的数据(表达式的值)
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})