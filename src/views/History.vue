<template>
  <div class="history">
    <h1>{{ historyHeader }}</h1>
    <h3 v-if="!log.length">No records yet</h3>
    <base-table :data="log" paginated>
      <template v-slot="{ row }">
        <td class="base-table__data">
          {{ row.item.name }}
        </td>
        <td
          class="base-table__data"
          :class="{
            red: row.action === 'remove',
            green: row.action === 'restore'
          }"
        >
          {{ row.action }}
        </td>
        <td class="base-table__data">
          {{ formatedDate(row.date) }}
        </td>
      </template>
    </base-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import DateMixin from '@/mixins/dateMixin'

const loggerNamespace: string = 'logger'
@Component
export default class History extends Mixins(DateMixin) {
  @Getter('historyLog', { namespace: loggerNamespace })
  historyLog: any

  get action() {
    return this.$route.query.action
  }
  get log() {
    return this.historyLog(this.action)
  }
  get historyHeader() {
    return this.action ? `History of ${this.action}` : 'History'
  }
}
</script>
