<template>
  <nav class="table-pagination">
    <div class="table-pagination__controller">
      <base-button small outlined @click="prevPage">prev</base-button>
      <base-button small outlined @click="nextPage">next</base-button>
    </div>

    <div class="table-pagination__quantity">
      <base-button
        small
        outlined
        v-for="button in quantityButtons"
        @click="setContentPerPage(button.quantity)"
        :active="settings.contentPerPage === button.quantity ? true : false"
        :key="button.quantity"
      >
        {{ button.quantity }}</base-button
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

@Component
export default class TablePagination extends Vue {
  @Prop({ required: true })
  tableLength!: number

  @Watch('settings', { immediate: true, deep: true })
  passSettings() {
    this.$emit('paginate', {
      contentPerPage: this.settings.contentPerPage,
      currentPage: this.settings.currentPage
    })
  }

  settings = {
    currentPage: 1,
    contentPerPage: 10
  }
  quantityButtons = [
    {
      quantity: 10
    },
    {
      quantity: 15
    },
    {
      quantity: 25
    }
  ]

  get pagesCount() {
    return Math.ceil(this.tableLength / this.settings.contentPerPage)
  }

  prevPage() {
    if (this.settings.currentPage <= 1) {
      return
    }
    this.settings.currentPage -= 1
  }
  nextPage() {
    if (this.settings.currentPage / this.pagesCount >= 1) {
      return
    }
    this.settings.currentPage += 1
  }
  setContentPerPage(quantity: number) {
    this.settings.contentPerPage = quantity
    this.settings.currentPage = 1
  }
}
</script>

<style lang="scss">
.table-pagination {
  display: flex;
  justify-content: space-between;

  & > * {
    margin: 20px;
  }
}
</style>
