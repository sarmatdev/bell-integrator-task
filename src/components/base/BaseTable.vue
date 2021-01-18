<template>
  <div>
    <table class="base-table">
      <tbody class="base-table__body">
        <template v-for="item in padinatedData">
          <tr :key="item.id" class="base-table__row">
            <slot :row="item" />
          </tr>
        </template>
      </tbody>
    </table>
    <TablePagination v-if="paginated" :table-length="data.length" @paginate="paginate" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TablePagination from './table/TablePagination.vue'

@Component({
  components: {
    TablePagination
  }
})
export default class BaseTable extends Vue {
  @Prop(Array)
  data!: []
  @Prop(Boolean)
  paginated?: boolean

  paginationOptions = {
    contentPerPage: 10,
    currentPage: 1
  }

  paginate(settings: any) {
    this.paginationOptions = settings
  }

  get padinatedData() {
    return this.data.slice(
      this.paginationOptions.currentPage * this.paginationOptions.contentPerPage -
        this.paginationOptions.contentPerPage,
      this.paginationOptions.currentPage * this.paginationOptions.contentPerPage
    )
  }
}
</script>

<style lang="scss">
.fruit-list-move {
  transition: transform 1s;
}
.fruit-table-move {
  transition: transform 1s;
}
.base-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  &__body {
    border: 1px solid #e7e8e8;
    background-color: #fdfdfd;
  }
  &__row {
    background-color: #fafafa;
    cursor: pointer;

    &:nth-child(odd) {
      background-color: #fff;
    }

    &:hover {
      background-color: #e7e8e8;
    }
  }
  &__data {
    height: 50px;
    border-right: 1px solid #e7e8e8;
    padding: 25px;
    text-align: left;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
