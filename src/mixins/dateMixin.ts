import {format} from 'date-fns'

import { Component, Vue } from 'vue-property-decorator'
@Component
class DateMixin extends Vue {
  formatedDate(date: string) {
    // @ts-ignore
    return format(date, 'HH:mm:ss')
  }
}
export default DateMixin