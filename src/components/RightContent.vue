<template>
  <el-table
    :data="items"
    style="width: 100%">
    <el-table-column
      label="运单号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="收件人"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.recipient }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.phoneNumber }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      width="180">
      <template slot-scope="scope">
              <span v-if="scope.row.status===1">
                已预约
              </span>
        <span v-if="scope.row.status===2">
                已取件
              </span>
        <span v-if="scope.row.status===3">
                未预约
              </span>
      </template>
    </el-table-column>
    <el-table-column
      label="预约时间"
      width="180"
    >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ new Date(scope.row.time).toLocaleString() }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="180">
      <template slot-scope="scope">
              <span v-if="scope.row.status===1">
                <Button @click="receipt(scope.row)">确认收件</Button>
              </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "RightContentView",
        data () {
          return {
            items: this.$store.state.bookingList
          }
        },
        methods: {
          receipt (item) {
            // 确认收货
            this.$store.dispatch('updateDatas', item);
          },
          changeStatus (id) {
            this.$store.dispatch('getDatas', id)
          },

        },
        mounted () {
          // eslint-disable-next-line no-undef
          this.$store.dispatch('getDatas', 0)
        }
    }
</script>

<style scoped>

</style>
